import { Fragment, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Vans Old School",
    price: 1000000,
    image: "public/pair-trainers.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, explicabo.",
  },
  {
    id: 2,
    name: "Converse All Stars",
    price: 900000,
    image: "public/pair-trainers.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, explicabo.",
  },
  {
    id: 3,
    name: "Converse All Stars",
    price: 950000,
    image: "public/pair-trainers.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, explicabo.",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
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
      <div className="h-16 w-full fixed items-center flex bg-green-600 justify-between p-10">
        <h1 className="font-semibold text-xl text-white">{email}</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="w-full h-screen">
        <div className="container bg-white h-full mx-auto rounded-xl flex items-center justify-center ">
          {products.map((p) => (
            <CardProduct key={p.id}>
              <CardProduct.Header image={p.image} />
              <CardProduct.Body name={p.name}>{p.description}</CardProduct.Body>
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
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td className="border border-black text-center p-5">
                      {product.name}
                    </td>
                    <td className="border border-black text-center p-5">
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td className="border border-black text-center p-5">
                      {item.qty}
                    </td>
                    <td className="border border-black text-center p-5">
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="border border-black">
                  <strong>Total Price</strong>
                </td>
                <td className="border border-black"></td>
                <td className="border border-black"></td>
                <td className="border border-black">
                  <strong>
                    Rp
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="my-20 flex justify-center items-center">
        <Counter />
      </div>
    </Fragment>
  );
};

export default ProductPage;
