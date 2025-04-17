import React from "react";
import { Button } from "react-bootstrap";

const Group = ({ group, setActiveGroup }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setActiveGroup(group);
  }
  return (
    <>
      <Button variant='outline-secondary' onClick={handleClick}>{group.name}</Button>
    </>
  );
}

export default Group;
