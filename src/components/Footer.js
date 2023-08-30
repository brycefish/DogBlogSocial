import React from "react";
import SignIn from "../pages/SignIn";

const FooterJsx = () => {
  return (
    <footer id="signIn" class="footer mt-5 py-3 bg-light border-top">
      <div class="d-flex justify-content-between px-3">
        <span class="text-muted"> &copy; Pitbull Party Inc. 2023</span>
        <SignIn />
      </div>
    </footer>
  );
};

export default FooterJsx;
