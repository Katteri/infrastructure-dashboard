import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useAppContext } from "./context/Context";
import Node from "./Node";

const Nodes = ({ groups, metrics }) => {
  const { activeGroup} = useAppContext();
  const [nodes, setNodes] = useState([]);
  const [lastMetrics, setLastMetrics] = useState({});
  const [content, setContent] = useState(null);

  useEffect(() => {
    const newNodes = groups.filter(group => group.group_id === activeGroup.id);
    const nodesMetrics = metrics.filter(metric => metric.group_id === activeGroup.id);
    const newLastMetrics = {};
    
    newNodes.forEach(node => {
      const nodeMetrics = nodesMetrics.filter(nodesMetric => nodesMetric.node_id === node.node_id);
      if (nodeMetrics.length > 0) {
        newLastMetrics[node.node_id] = nodeMetrics.at(-1);
      } else {
        newLastMetrics[node.node_id] = nodeMetrics;
      }
    });
    
    setNodes(newNodes);
    setLastMetrics(newLastMetrics);
  }, [activeGroup]);

  useEffect(() => {
    if (nodes.length > 0) {
      setContent(
        <>
          <Row className="text-center border-bottom">
            <Col className="border-end">Название</Col>
            <Col>Утилизация</Col>
          </Row>
          <Row className="d-flex flex-column justify-content-between align-items-center">
            {nodes.map(node => <Node key={node.node_id} node={node} metric={lastMetrics[node.node_id]}></Node>)}
          </Row>
        </>
      );
    }
  }, [nodes, lastMetrics]);

  return (
    <>
      {content? content: <Row className="align-self-center">Группа не выбрана</Row>}
    </>
  );
}

export default Nodes;
