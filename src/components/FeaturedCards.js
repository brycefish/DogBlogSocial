import React from "react";
import Basura from "../assets/basuraBaby.jpg";

const FeaturedCards = () => {
  return (
    <>
      <div class="container">
        <div class="row align-items-md-stretch">
          <div class="col-md-6 h-100 p-5 text-white bg-dark rounded-3 shadow">
            <div class="d-flex justify-content-around mb-3">
              <h2 id="browse" class="text-uppercase">
                Blue
              </h2>
              <button type="button" class="btn btn-dark position-relative">
                Like
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  9+
                  <span class="visually-hidden">
                    Like button for featured dog
                  </span>
                </span>
              </button>
            </div>
            <img
              class="img-fluid"
              src="https://cdn.pixabay.com/photo/2017/06/24/20/40/dog-2438803_640.png"
              alt="pitbull dog portrait"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              minus, iure magni necessitatibus accusantium inventore magnam
              pariatur a aut animi sint earum natus aliquam facilis quos vero.
              Eos, delectus dignissimos.
            </p>
            <button class="btn btn-outline-light" type="button">
              View Profile
            </button>
          </div>
          <div class="col-md-6 h-100 p-5 border rounded-3 my-3 shadow">
            <div class="d-flex justify-content-around mb-3">
              <h2 id="browse" class="text-uppercase">
                Basura
              </h2>
              <button type="button" class="btn btn-secondary position-relative">
                Like
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  12+
                  <span class="visually-hidden">
                    Like button for featured dog
                  </span>
                </span>
              </button>
            </div>
            <img
              class="img-fluid"
              src="https://cdn.pixabay.com/photo/2022/05/31/23/16/dogs-7234471_640.jpg"
              alt="Two dogs playing in a field"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              minus,
            </p>
            <button class="btn btn-outline-secondary" type="button">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCards;
