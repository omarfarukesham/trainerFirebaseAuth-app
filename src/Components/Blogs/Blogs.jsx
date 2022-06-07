import React from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <div className="container">
      <Helmet>
        <title>Blogs</title>
      </Helmet>
      <h1 className="text-center fs-2 fw-bold">Your Question</h1>
      <div class="accordion " id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Differences between Authorization and Authentication ?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Authorization is a such kind of process.</strong> in which
              user get a certain level of experience or access to use any sorts
              of things, for example, an application executive can get some
              level of access, on the other, bottom level workers can do another
              level of permission that how much can do that will define by the
              definition of application. 
              <strong> Authentication</strong>, it is a validation process that
              which user will be allow or not, for example a register user or
              not, if register how much can access to use the application that
              type of verification task has done by the Authentication process.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             Why are you using firebase? what are the option do you have to implement by authentication?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Firebase services in which provided by Google</strong>, these services are usages for multiple 
              purposes. Easy to use, and smooth experience of users and authorities in term of AI base analytics.Rapid 
              services help to grow any personal or collective level of Business industry, for instance if you need, Mobile App, iOS APP,
              web app, firebase is hugely benefited service. 
              A lot of Possible ways is available to implement by authentication, here is three vitals<br></br>
              1. Token base authentication.<br></br>
              2. Personal Identification number(pin) base authentication.<br></br>
              3. Biometric(facial, fingerprints and voice recognition).<br></br>
              

            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            What other services dose firebase provide other then authentication ?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Firebase provide a bunch services to help any sort of Application</strong> 
             <br></br>Major services here is that <br>
             </br>
             #1. Cloud Messaging.<br></br>
             #2. Authentication<br></br>
             #3. Hosting<br></br>
             #4. Remote Configuration<br></br>
             #5. Test Lap<br></br>
             #6. Crash Reporting<br>
             </br>
             #7. Realtime Database<br></br>
             #8. Storage<br></br>
             Above exclusive services are easy to usages and effortlessly maintainable for web application.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
