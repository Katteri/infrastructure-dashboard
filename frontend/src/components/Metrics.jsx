import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useAppContext } from "./context/Context";
import Metric from "./Metric";

const Metrics = ({ groups, metrics }) => {
  const [content, setContent] = useState(null);
  const { activeNode } = useAppContext();

  useEffect(() => {
    if (activeNode) {
      setContent(<Metric groups={groups} metrics={metrics} activeNode={activeNode}/>);
    }
  }, [activeNode]);

  return (
    <>
      {content? content : <Row className="align-self-center">Нода не выбрана</Row>}
    </>
  )
};

export default Metrics;