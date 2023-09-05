import React from "react";
import { Button, Card } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from 'react-bootstrap/Form';

const Filtering = ({ setSearch, setFilter,setOrder }) => {
  return (
    <div>
      {/* <Accordion defaultActiveKey="0" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Search By Name Here...</Accordion.Header>
          <Accordion.Body>
            <input
              class="form-control"
              type="text"
              placeholder="Serach By Name Here..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Filter By Title Here...</Accordion.Header>
          <Accordion.Body>
            <input
              class="form-control"
              type="text"
              placeholder="Filter By Title Here..."
              onChange={(e) => setFilter(e.target.value)}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> */}

      {/*  */}

      <Card body>
        <Tabs
          defaultActiveKey="Search By Name Here..."
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Search By Name Here..." title="Search By Name Here...">
            {/* <Sonnet /> */}
            <input
              class="form-control"
              type="text"
              placeholder="Serach By Name Here..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </Tab>
          <Tab
            eventKey="Filter By Title Here..."
            title="Filter By Title Here..."
          >
            {/* <Sonnet /> */}
            <input
              class="form-control"
              type="text"
              placeholder="Filter By Title Here..."
              onChange={(e) => setFilter(e.target.value)}
            />
          </Tab>
          <Tab eventKey='Sorting' title="Sort By Price">
          <Button variant="primary" onClick={() => setOrder("desc")}>
              High To Low
            </Button>{" "}
            <Button variant="primary" onClick={() => setOrder("asc")}>
             Low to High
            </Button>
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
};

export default Filtering;
