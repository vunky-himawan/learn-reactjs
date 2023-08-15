import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    name: "Vans Old School",
    price: 1000,
    image: "public/pair-trainers.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, explicabo.",
  },
  {
    id: 2,
    name: "Converse All Stars",
    price: 900,
    image: "public/pair-trainers.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, explicabo.",
  },
  {
    id: 3,
    name: "Converse All Stars",
    price: 900,
    image: "public/pair-trainers.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, explicabo.",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
              <CardProduct.Footer price={p.price} />
            </CardProduct>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;
