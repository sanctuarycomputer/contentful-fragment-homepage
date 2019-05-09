import React, { Fragment } from "react";
import get from "utils/get";

import Nav from "components/Nav";
import Hero from "components/Hero";
import DetailBlock from "components/DetailBlock";
import Footer from "components/Footer";

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Something went wrong...</h1>;

  const fields = get(model, 'fields', {});

  return (
    <Fragment>
      <Nav />
      <Hero
        title={get(fields, "heroTitle", '')}
        description={get(fields, "heroDescription", '')}
      />
      <DetailBlock
        headline={get(model, "fields.detailHeadline", '')}
        paragraph={get(model, "fields.paragraph", '')}
      />
      <Footer />
    </Fragment>
  );
};

export default MainView;
