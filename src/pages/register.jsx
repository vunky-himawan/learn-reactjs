import RegisterForm from "../components/Fragments/RegisterForm";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = (props) => {
  return (
    <AuthLayout title="Register" type="register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
