import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-center darkOverlay">
      <div className="container flex items-center justify-center mt-16 md:mt-20 py-20 text-3xl font-bold pageHeader darkOverlaybgImage text-white text-center">
        {title}
      </div>
    </div>
  );
};

export default PageHeader;
