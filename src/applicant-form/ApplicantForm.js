import React from "react";

// Images

import FooterLogo from "../assets/images/footer-logo.png";
import AptilzyLogo from "../assets/images/Optilyz Logotype 1.png";
import Illustration from "../assets/images/Illustration.png";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./ApplicantForm.css";

function ApplicantForm() {
  return (
    <div>
      <main className=" d-flex flex-column flex-lg-row">
        <section className=" formInput col-12 col-lg-6 order-1 order-lg-0">
          <main className="p-2 p-lg-5">
            <div className="pt-5 ">
              <h2 className="pt-5"> We're Hiring</h2>
              <h3> for the role of UX DESIGNER </h3>
            </div>

            <form className="mt-5 mb-5">
              <div className="mt-3">
                <label for="Name"> Name </label>
                <input
                  type="text"
                  placeholder="Enter full Name"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <label for="Email"> Email </label>
                <input
                  type="email"
                  placeholder="name@mail.com"
                  className="form-control"
                />
              </div>
              <div className="mt-3">
                <label for="Link to Profile"> Link to profile </label>
                <input
                  type="url"
                  placeholder="Enter full Name"
                  className="form-control"
                />
              </div>
              <div className="mt-3 d-flex flex-row ">
                <input type="checkbox" className="checkbox" />
                <p> I agree to the terms of this application</p>
              </div>
              <div className="mt-4 d-flex flex-row ">
                <button> Submit </button>
              </div>
            </form>
          </main>

          <footer className=" col-12 text-center">
            <div className=" mt-3 ">
              <img src={FooterLogo} alt="optilzy footer logo" />{" "}
              <small className="mt-5">Powered by Optilyz</small>
            </div>
          </footer>
        </section>
        <section className="d-flex flex-column align-items-center align-items-lg-end  aptilzy pb-5 pb-lg-0 col-12 col-lg-6 ">
          <img className="logo" src={AptilzyLogo} alt="aptilzy logo" />
          <img
            className="Illustration  pb-5 pb-lg-0"
            src={Illustration}
            alt="aptilzy"
          />
        </section>
      </main>
    </div>
  );
}

export default ApplicantForm;
