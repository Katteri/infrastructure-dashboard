import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Groups from "./Groups";
import Nodes from "./Nodes";
import { getGroups, getMetrics } from "../axios";

const App = () => {
  const [groups, setGroups] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [onlyGroups, setOnlyGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState(null);

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

  useEffect(() => {
    console.log(activeGroup);

  }, [activeGroup]);

  return (
    <>
      <Row>
        <Col>Группы</Col>
        <Col>Ноды</Col>
        <Col>Метрики</Col>
      </Row>
      <Row>
        <Col className="d-flex flex-column justify-content-between align-items-center">
          <Groups groups={onlyGroups} activeGroup={activeGroup} setActiveGroup={setActiveGroup}/>
        </Col>
        <Col>
          <Nodes activeGroup={activeGroup} groups={groups} metrics={metrics}/>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default App;
