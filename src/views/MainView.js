import React, { Fragment } from "react";
import get from "utils/get";

import Nav from "components/Nav";
import Hero from "components/Hero";
import Footer from "components/Footer";
import BlockSwitch from "components/BlockSwitch";

const MainView = ({ model }) => {
  if (!model || model.isError) return <h1>Something went wrong...</h1>;

  const fields = get(model, 'fields', {});
  const contentBlocks = get(fields, 'contentBlocks', []);

  return (
    <Fragment>
      <div className="MainView block-background">
        <Nav />
        <Hero
          title={get(fields, "heroTitle", '')}
          description={get(fields, "heroDescription", '')}
        />
      </div>
      {contentBlocks
        .map((block, i) => <BlockSwitch key={get(block, 'sys.id', i)} block={block} />)}
      <Footer contentBlocksCount={contentBlocks.length} />
    </Fragment>
  );
};

export default MainView;
