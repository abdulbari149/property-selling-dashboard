import AuthLayout from "@/components/auth/Layout";
import ResetPasswordForm from "@/components/auth/ResetPassword";
import type { NextPage } from "next";

const ResetPasswordPage: NextPage = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
