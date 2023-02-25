import { type NextPage } from "next";
import AuthLayout from "@/components/auth/Layout";
import SignupForm from "@/components/auth/Signup";

const Signup: NextPage = () => {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;
