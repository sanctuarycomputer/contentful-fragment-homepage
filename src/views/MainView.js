import React, { Fragment } from "react";
import get from "utils/get";

import Hero from "components/Hero";

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Something went wrong...</h1>;

  return (
    <Fragment>
      <Hero />
    </Fragment>
  );
};

export default MainView;
