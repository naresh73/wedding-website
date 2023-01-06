import React from "react";

const ComingSoon = () => {
  return (
    <div>
      <section id="coming_soon" className="coming_soon_area pt-20 pb-70">
        <div className="coming_soon_shape_1">
          <img src="assets/images/shape-1.png" alt="shape" />
        </div>

        <div className="container">
          <div className="text-center">
            <h1>-</h1>
            <h1>Your welcome to our wedding</h1>
            {/* <p>
              Please purchase full version to get all elements, sections and
              permission to remove footer credit
            </p> */}
          </div>
        </div>

        <div className="coming_soon_shape_2">
          <img src="assets/images/shape-2.png" alt="shape" />
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;
