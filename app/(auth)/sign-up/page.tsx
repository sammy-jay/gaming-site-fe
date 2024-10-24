import SignupForm from "@/components/auth/SignupForm";
import React from "react";

const SignUpPage = () => {
  return (
    <section
      id="auth-section"
      className="w-full min-h-[100vh] flex flex-col-reverse lg:flex-row pb-12"
    >
     <SignupForm/>
    </section>
  );
};

export default SignUpPage;
