import React from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const Sorting = ({ setSort }) => {
  return (
    <div>
      {/* <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Sort By Price</Accordion.Header>
          <Accordion.Body>
            <Button variant="primary" onClick={() => setSort("asc")}>
              High To Low
            </Button>{" "}
            <Button variant="primary" onClick={() => setSort("desc")}>
             Low to High
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}

      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1"/>
        <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
      </div>
    </div>
  );
};

export default Sorting;
