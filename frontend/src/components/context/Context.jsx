import React, { createContext, useState, useContext, Children } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState([]);
  const [activeNode, setActiveNode] = useState(null);

  const handleGroupClick = (group) => {
    setActiveGroup(group);
  };

  const handleNodeClick = (node) => {
    setActiveNode(node);
  };

  return (
    <AppContext.Provider value={{activeGroup, activeNode, handleGroupClick, handleNodeClick}}>
      {children}
    </AppContext.Provider>
  );
};