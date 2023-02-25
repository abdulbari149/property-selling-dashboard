import type { NextPage } from "next";
import AuthLayout from "@/components/auth/Layout";
import LoginForm from "@/components/auth/Login";

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
