import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-xs border rounded-md p-3">
        <h1 className="text-green-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-300">
          Welcome, please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className=" mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-green-600 font-bold">
          Sign Up
        </Link>
      </p>
    );
  }
  return (
    <p className=" mt-5 text-center">
      Already have an account?{" "}
      <Link to="/login" className="text-green-600 font-bold">
        Sign In
      </Link>
    </p>
  );
};

export default AuthLayout;
