import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-[20rem] border border-gray-300 p-3 rounded-xl shadow-xl h-[30rem] flex flex-col justify-between mx-10">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="" />
    </a>
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div>
      <a href="" className="text-xl font-bold">
        <h1>{name}</h1>
      </a>
      <p>{children}</p>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex justify-between items-center mt-10">
      <h1 className="font-bold text-2xl">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </h1>
      <Button classname="bg-green-500 hover:bg-black transition-colors duration-500" onClick={() => handleAddToCart(id)}>
        Buy Now
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
