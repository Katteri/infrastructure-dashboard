import React, { useEffect } from "react";
import Group from './Group';

const Groups = ({ groups, activeGroup, setActiveGroup }) => {
  useEffect(() => {
  }, []);

  return (
    <>
      {groups.map(group => <Group key={group.id} group={group} setActiveGroup={setActiveGroup}/>)}
    </>
  );
}

export default Groups;
