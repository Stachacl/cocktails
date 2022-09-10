import React from "react";

const Loading = () => {
  return (
    <section className="container">
      <div className="row px-5">
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
