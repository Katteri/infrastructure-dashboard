import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const Nodes = ({ activeGroup, groups, metrics }) => {
  const [nodes, setNodes] = useState([]);
  const [nodesMetrics, setNodesMetrics] = useState([]);
  const [activeNode, setActiveNode] = useState(null);
  const [metric, setMetric] = useState([]);

  useEffect(() => {
    const newNodes = groups.filter(group => group.group_id === activeGroup.id);
    const newNodesMetrics = metrics.filter(metric => metric.group_id === activeGroup.id);
    setNodes(newNodes);
    setNodesMetrics(newNodesMetrics);
    console.log(newNodesMetrics.filter(metric => metric.node_id === 1).at(-1)?.cpu_utilization, activeGroup);
  }, [activeGroup]);

  useEffect(() => {
    console.log(nodes);
  }, [nodes]);

  useEffect(() => {
    const newMetric = metrics.filter(metric => metric.node_id === activeNode.node_id);
    setMetric(newMetric);
    console.log(newMetric);
  }, [activeNode]);

  return (
    <>
      <Row>
        <Col>Название</Col>
        <Col>Утилизация</Col>
      </Row>
      <Row>
      {nodes.map(node => <Row key={node.node_id} onClick={() => setActiveNode(node)}>
          <Col>{node.node_caption}</Col>
          <Col>
            <Row>
              cpu:
              {nodesMetrics
                .filter(nodesMetric => nodesMetric.node_id === node.node_id)
                .at(-1)?.cpu_utilization
              }
            </Row>
            <Row>
              memory:
              {nodesMetrics
                .filter(nodesMetric => nodesMetric.node_id === node.node_id)
                .at(-1)?.memory_utilization
              }
            </Row>
            <Row>
              disk:
              {nodesMetrics
                .filter(nodesMetric => nodesMetric.node_id === node.node_id)
                .at(-1)?.disk_utilization
              }
            </Row>
          </Col>
          </Row>)}
      </Row>
    </>
  );
}

export default Nodes;
