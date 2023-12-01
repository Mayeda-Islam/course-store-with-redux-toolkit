import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="py-4 border-b">
        <div class="navbar-container">
          <div class="logo">
            <a href="index.html">
              <img src="./images/LWSBlog.svg" alt="search" />
            </a>
          </div>
          <div class="auth-buttons">
            <button class="btn btn-primary">sign in</button>
            <button class="btn btn-outline">sign up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
