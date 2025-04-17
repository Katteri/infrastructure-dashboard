import React, { useEffect } from "react";
import { useAppContext } from "./context/Context";
import Group from './Group';

const Groups = ({ groups }) => {
  const { activeGroup } = useAppContext();
  useEffect(() => {
    
  }, [activeGroup]);

  return (
    <>
      {groups.map(group => <Group key={group.id} group={group}/>)}
    </>
  );
}

export default Groups;
