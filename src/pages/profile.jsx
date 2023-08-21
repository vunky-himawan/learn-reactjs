import { useLogin } from "../components/hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <div>
      <h1>Hello Profile</h1>
    </div>
  );
};

export default ProfilePage;
