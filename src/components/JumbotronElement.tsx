import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

export default function JumbotronElement() {
  return (
    <Jumbotron className="mt-5">
      <h1>Hello, Space-News Readers and other FOMOs!</h1>
      <p>
        Here you find the most popular articles about every centimeter out in
        space!
      </p>
      <p>
        <Button variant="primary">Load Articles</Button>
      </p>
    </Jumbotron>
  );
}
