import React from "react";
import cn from "classnames";
import { Button } from "react-bootstrap";
import { useAppContext } from "./context/Context";

const Group = ({ group }) => {
  const { activeGroup, handleGroupClick } = useAppContext();
  const handleClick = (e) => {
    e.preventDefault();
    handleGroupClick(group);
  }
  return (
    <>
      <Button
        variant='outline-primary'
        className={cn({"active": group.id === activeGroup.id})}
        onClick={handleClick}
      >
        {group.name}
      </Button>
    </>
  );
}

export default Group;
