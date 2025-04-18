import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Row, Col } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Metric = ({ groups, metrics, activeNode }) => {
  const [activeMetrics, setActiveMetrics] = useState([]);
  const [applications, setApplications] = useState([]);
  const [admin, setAdmin] = useState({
    firstname: null,
    lastname: null,
    email: null,
  });
  const [nodeInterface, setNodeInterface] = useState({
    name: null,
    description: null,
    color: null,
  });
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const newMetrics = metrics.filter(metric => metric.node_id === activeNode.node_id);
    const node = groups.find(group => group.node_id === activeNode.node_id);
    const newNodeInterface = {
      name: node?.interface_caption,
      description: node?.interface_description,
      color: node?.interface_color,
    };
    const newAdmin = {
      firstname: node?.firstname,
      lastname: node?.lastname,
      email: node?.email,
    };
    const newApps = new Set(groups.filter(group => group.node_id === activeNode.node_id)
      .map(node => node.application_caption));
    setApplications(Array.from(newApps));
    setAdmin(newAdmin);
    setNodeInterface(newNodeInterface);
    setActiveMetrics(newMetrics);
  }, [activeNode]);

  useEffect(() => {
    if (activeMetrics.length > 0) {
      const labels = activeMetrics.map((m) => m.datetime);
      const cpuData = activeMetrics.map((m) => m.cpu_utilization);
      const memoryData = activeMetrics.map((m) => m.memory_utilization);
      const diskData = activeMetrics.map((m) => m.disk_utilization);

      setData({
        labels,
        datasets: [
          {
            label: "CPU",
            data: cpuData,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.4,
          },
          {
            label: "Memory",
            data: memoryData,
            borderColor: "rgb(192, 75, 75)",
            backgroundColor: "rgba(229, 115, 77, 0.2)",
            tension: 0.4,
          },
          {
            label: "Disk",
            data: diskData,
            borderColor: "rgb(138, 189, 36)",
            backgroundColor: "rgba(71, 218, 34, 0.2)",
            tension: 0.4,
          },
        ],
      });
    }
  }, [activeMetrics]);

  return (
    <>
      <Row className="fs-4 pb-2">
        {activeNode?.node_caption}
      </Row>
      {activeMetrics.length > 0 ? (
        <Line
          height={300}
          data={data}
          options={{
            responsive: false,
            plugins: {
              legend: {
                position: 'top',
              },
            },
          }}
        />
      ) : null}
      <Row className="pt-3 fw-light fs-6">
        Интерфейс
      </Row>
      <Row>
        <Col>
          {nodeInterface.name}
        </Col>
        <Col className="fw-bold" style={{"color": nodeInterface.color}}>
          {nodeInterface.description}
        </Col>
      </Row>
      <Row className="pt-3 fw-light fs-6 ">
        Администратор
      </Row>
      <Row className="">
        {`${admin.firstname} ${admin.lastname}`}
      </Row>
      <Row className="pt-3 fw-light fs-6">
        Приложения
      </Row>
      <Row>
        {applications.map(app => <Col key={app}>{app}</Col>)}
      </Row>
    </>
  );
};

export default Metric;
