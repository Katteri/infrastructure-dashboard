import React, { createContext, useState, useContext, Children } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState([]);
  const [activeNode, setActiveNode] = useState(null);
  const [activeMetric, setActiveMetric] = useState(null);

  const handleGroupClick = (group) => {
    setActiveGroup(group);
  };

  const handleNodeClick = (node) => {
    setActiveNode(node);
  };

  const handleMetricClick = (metric) => {
    setActiveMetric(metric);
  };

  return (
    <AppContext.Provider value={{activeGroup, activeNode, activeMetric, handleGroupClick, handleNodeClick, handleMetricClick}}>
      {children}
    </AppContext.Provider>
  );
};