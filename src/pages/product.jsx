import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import { getProducts } from "../services/product.service";
import { useLogin } from "../components/hooks/useLogin";

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <Fragment>
      <div className="h-16 w-full fixed items-center flex bg-green-600 justify-between border border-black p-10 px-32">
        <h1 className="font-semibold text-xl text-white">{username}</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="w-full h-fit">
        <div className="container bg-white h-fit mx-auto rounded-xl flex flex-wrap items-center justify-center ">
          {products.length > 0 &&
            products.map((p) => (
              <CardProduct key={p.id}>
                <CardProduct.Header image={p.image} id={p.id} />
                <CardProduct.Body name={p.title}>
                  {p.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={p.price}
                  id={p.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
      </div>
      <div className="w-full h-screen">
        <div className="container flex flex-col justify-center items-center h-full mx-auto border border-black">
          <h1 className="text-xl font-bold text-green-600">Cart</h1>
          <table className="table-auto border-spacing-10 mt-10">
            <thead>
              <tr>
                <th className="border border-black">Nama</th>
                <th className="border border-black">Harga</th>
                <th className="border border-black">Quantity</th>
                <th className="border border-black">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td className="border border-black text-center p-5">
                        {product.title.substring(0, 20)}...
                      </td>
                      <td className="border border-black text-center p-5">
                        ${" "}
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td className="border border-black text-center p-5">
                        {item.qty}
                      </td>
                      <td className="border border-black text-center p-5">
                        ${" "}
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td className="border border-black">
                  <strong>Total Price</strong>
                </td>
                <td className="border border-black"></td>
                <td className="border border-black"></td>
                <td className="border border-black">
                  <strong>
                    $
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
