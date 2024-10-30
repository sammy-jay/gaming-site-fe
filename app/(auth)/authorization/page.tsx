export default function AuthorizationPage(){
    return (
      <main>
        <a href="javascript:void(0)" className="scrollToTop">
          <i className="las la-angle-up"></i>
        </a>

        <div className="account-section pt-120 pb-120">
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className="verification-code-wrapper bg--section">
                <div className="verification-area">
                  <div className="account-logo">
                    <a href="https://www.cryptoplustrader.com">
                      <img src="https://www.cryptoplustrader.com/assets/images/logoIcon/logo.png" />
                    </a>
                  </div>
                  <h5 className="pb-3 text-center border-bottom mb-3">
                    Verify Email Address
                  </h5>
                  <form
                    action="https://www.cryptoplustrader.com/user/verify-email"
                    method="POST"
                    className="submit-form"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      value="WrC7nzldwY9MDhqeq59E49GEUTmKWdBFbxBYg7KI"
                    />
                    <p className="verification-text">
                      A 6 digit verification code sent to your email address:
                      s***@gmail.com
                    </p>

                    <div className="mb-3">
                      <label>Verification Code</label>
                      <div className="verification-code">
                        <input
                          type="text"
                          name="code"
                          id="verification-code"
                          className="form-control overflow-hidden"
                          required
                          autocomplete="off"
                        />
                        <div className="boxes">
                          <span>-</span>
                          <span>-</span>
                          <span>-</span>
                          <span>-</span>
                          <span>-</span>
                          <span>-</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <button type="submit" className="cmn--btn btn-block">
                        Submit
                      </button>
                    </div>

                    <div className="mb-3">
                      <p>
                        If you don't get any code,
                        <a
                          href="https://www.cryptoplustrader.com/user/resend-verify/email"
                          className="text--base"
                        >
                          Try again
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}