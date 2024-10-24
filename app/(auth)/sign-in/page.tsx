import SigninForm from '@/components/auth/SigninForm';
import React from 'react'

const SignInPage = () => {
  return (
    <section
      id="auth-section"
      className="w-full min-h-[100vh] flex flex-row pb-12"
    >
      <SigninForm/>
    </section>
  );
}

export default SignInPage