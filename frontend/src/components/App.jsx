import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ContextProvider } from "./context/Context";
import { getGroups, getMetrics } from "../axios";
import Groups from "./Groups";
import Nodes from "./Nodes";
import Metrics from "./Metrics";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [onlyGroups, setOnlyGroups] = useState([]);

  // получаем общую информацию о всех группах
  useEffect(() => {
    const getData = async () => {
      const fetchedGroups = await getGroups();
      const fetchedMetrics = await getMetrics();
      setGroups(fetchedGroups);
      setMetrics(fetchedMetrics);
    };
    getData();
  }, []);

  // оставляем название и id группы
  useEffect(() => {
    let groupSet = new Set();
    groups.map(group => {
      groupSet.add(group.group_caption)
    });
    groupSet = Array.from(groupSet);
    const groupsWithIds = [];
    groupSet.forEach(groupName => {
      groupsWithIds.push({
        id: groups.find(group => group.group_caption === groupName).group_id,
        name: groupName,
      });
    })
    setOnlyGroups(groupsWithIds);
  }, [groups]);

  return (
    <ContextProvider>
      <Row className="py-5 text-center fw-light fs-4 w-100">
        <Col>ГРУППЫ</Col>
        <Col>НОДЫ</Col>
        <Col>МЕТРИКИ</Col>
      </Row>
      <Row className="py-2 px-4 w-100">
        <Col className="pt-2 d-flex flex-column justify-content-evenly align-items-center">
          <Groups groups={onlyGroups}/>
        </Col>
        <Col className="d-flex flex-column">
          <Nodes groups={groups} metrics={metrics}/>
        </Col>
        <Col className="d-flex flex-column justify-content-between align-items-center">
          <Metrics groups={groups} metrics={metrics}/>
        </Col>
      </Row>
    </ContextProvider>
  );
}

export default App;
