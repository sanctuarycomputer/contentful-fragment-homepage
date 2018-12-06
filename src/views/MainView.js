import React, { Fragment } from "react";
import get from "utils/get";

import Hero from "components/Hero";
import DetailBlock from "components/DetailBlock";

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Something went wrong...</h1>;

  return (
    <Fragment>
      <Hero
        headline={get(model, "fields.headline", {})}
        subHeadline={get(model, "fields.subHeadline", {})}
      />
      <DetailBlock
        headline={get(model, "fields.detailHeadline", {})}
        paragraph={get(model, "fields.paragraph", {})}
      />
    </Fragment>
  );
};

export default MainView;
