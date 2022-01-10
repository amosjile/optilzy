import React from "react";

// Images

import FooterLogo from "../assets/images/footer-logo.png";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./ApplicantForm.css";

function ApplicantForm() {
  return (
    <div>
      <main className=" d-flex flex-column flex-md-row">
        <section className=" formInput col-12 col-md-6 order-1 order-md-0">
          <main className="p-2 p-lg-5">
            <h2> We're Hiring</h2>
            <h3> for the role of UX DESIGNER </h3>

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
            <div className=" mt-5 pt-5">
              <img src={FooterLogo} alt="optilzy footer logo" />{" "}
              <small className="mt-5">Powered by Optilyz</small>
            </div>
          </footer>
        </section>
        <section className=" aptilzy col-12 col-md-6 "></section>
      </main>
    </div>
  );
}

export default ApplicantForm;
