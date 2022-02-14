import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Container = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroudImag="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroudImag="model-y.jpg"
      />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroudImag="model-3.jpg"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroudImag="model-x.jpg"
      />

      <Section
        title="Lowest Cost Solar Panels in Amercia"
        description="Money-Back Guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroudImag="solar-panel.jpg"
      />

      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels "
        leftBtnText="Custom Order"
        rightBtnText="Learn More"
        backgroudImag="solar-roof.jpg"
      />

      <Section
        title="Accessories"
        description=""
        leftBtnText="Shop Now"
        backgroudImag="accessories.jpg"
      />
    </Container>
  );
}

export default Home;
