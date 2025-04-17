import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useAppContext } from "./context/Context";

const Metrics = ({ groups, metrics }) => {
  const { activeNode } = useAppContext();
  const [activeMetrics, setActiveMetrics] = useState();

  useEffect(() => {
    const newMetrics = metrics.filter(metric => metric.node_id === activeNode.node_id);
    setActiveMetrics(newMetrics);
  }, [activeNode]);

  useEffect(() => {
    console.log(activeMetrics, activeNode);
  }, [activeMetrics]);
  return (
    <></>
  );
};

export default Metrics;