import React, {} from "react";
import { Row, Col, Badge } from "react-bootstrap";
import cn from "classnames";
import { useAppContext } from "./context/Context";

const Node = ({ node, metric }) => {
  const { activeNode, handleNodeClick } = useAppContext();
  return (
    <Row key={node.node_id} onClick={() => handleNodeClick(node)}  className="py-3">
      <Col className={cn("text-center", {"fw-bold": activeNode?.node_id === node.node_id, "text-secondary": activeNode?.node_id === node.node_id})}>{node.node_caption}</Col>
      <Col className="d-flex flex-column justify-content-between gap-1">
        <Row className="px-2 d-flex flex-row justify-content-between">
          <Col>cpu:</Col>
          <Badge
            pill
            bg={cn({"warning": metric?.cpu_utilization >= 95, "warning": metric?.cpu_utilization >= 85, "secondary": metric?.cpu_utilization < 85})}
            className="w-auto p-2"
          >
            {metric?.cpu_utilization}
          </Badge>
        </Row>
        <Row className="px-2 d-flex flex-row justify-content-between">
          <Col>memory:</Col>
          <Badge
            pill
            bg={cn({"warning": metric?.memory_utilization >= 95, "warning": metric?.memory_utilization >= 85, "secondary": metric?.memory_utilization < 85})}
            className="w-auto p-2"
          >
            {metric?.memory_utilization}
          </Badge>
        </Row>
        <Row className="px-2 d-flex flex-row justify-content-between">
          <Col>disk:</Col>
          <Badge
            pill
            bg={cn({"warning": metric?.disk_utilization >= 95, "warning": metric?.disk_utilization >= 85, "secondary": metric?.disk_utilization < 85})}
            className="w-auto p-2"
          >
            {metric?.disk_utilization}
          </Badge>
        </Row>
      </Col>
    </Row>
  );
};

export default Node;
