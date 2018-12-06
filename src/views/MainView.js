import React, { Fragment } from "react";
import get from "utils/get";


const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Something went wrong...</h1>;

  return (
    <Fragment>
      <div></div>
    </Fragment>
  );
};

export default MainView;
