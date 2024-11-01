import React from "react";
import Link from "next/link";
import SigninForm from "@/components/auth/SigninForm";

const SignInPage = () => {
  return (
    <main>
      <Link href="#" className="scrollToTop">
        <i className="las la-angle-up"></i>
      </Link>

      <div className="account-section pt-120 pb-120">
        <div className="container">
          <div className="account-wrapper bg--section">
            <div className="account-logo">
              <Link href="/">
                <img src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png" />
              </Link>
            </div>
            <h4 className="text-center p-2">Sign In</h4>
            <SigninForm/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
