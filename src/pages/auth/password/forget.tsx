import AuthLayout from "@/components/auth/Layout";
import ForgetPasswordForm from "@/components/auth/ForgetPassword";
import type { NextPage } from "next";

const ForgetPasswordPage: NextPage = () => {
  return (
    <AuthLayout>
      <ForgetPasswordForm />
    </AuthLayout>
  );
};

export default ForgetPasswordPage;
