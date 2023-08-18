import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product";
  };

  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        placeholder="example@mail.com"
        type="email"
        name="email"
        ref={emailRef}
      />
      <InputForm
        label="Password"
        placeholder="********"
        type="password"
        name="password"
      />
      <Button classname="bg-green-600 w-full">Login</Button>
    </form>
  );
};

export default LoginForm;
