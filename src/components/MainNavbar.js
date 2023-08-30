import React from "react";

const MainNavbar = () => {
  return (
    <nav>
      <div class="navbar navbar-dark navbar-expand-md bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#https://getbootstrap.com/">
            Show Me Your Pitties
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#signIn">
                  Sign In
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#browse">
                  Browse
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
