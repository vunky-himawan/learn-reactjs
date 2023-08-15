import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        placeholder="Insert your name here..."
        type="text"
        name="fullname"
      />
      <InputForm
        label="Email"
        placeholder="example@mail.com"
        type="email"
        name="email"
      />
      <InputForm
        label="Password"
        placeholder="********"
        type="password"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        placeholder="********"
        type="password"
        name="confirmpassword"
      />
      <Button classname="bg-green-600 w-full">Register</Button>
    </form>
  );
};

export default RegisterForm;
