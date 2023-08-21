import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const LoginForm = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "/product";
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    login(data, (status, response) => {
      if (status) {
        localStorage.setItem("token", response);
      } else {
        setLoginFailed(response.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        placeholder="John Doe"
        type="text"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        placeholder="********"
        type="password"
        name="password"
      />
      {loginFailed && (
        <p className="text-red-500 pb-2 text-center first-letter:capitalize">
          {loginFailed}
        </p>
      )}
      <Button classname="bg-green-600 w-full">Login</Button>
    </form>
  );
};

export default LoginForm;
