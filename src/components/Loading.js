import React from "react";

const Loading = () => {
  return (
    <section className="container" class="d-flex justify-content-center">
      <div className="row px-5">
          <div class="loader-glass"></div>
          <div class="item"></div>
      </div>
      <h3> Loading...</h3>
    </section>
  );
};

export default Loading;
