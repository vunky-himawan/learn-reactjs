import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="text-center">
        <h1 className="font-bold text-xl">Oops!</h1>
        <p>Sorry, an unexpected error has occured</p>
        <p>{error.statusText || error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
