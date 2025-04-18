import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import Group from './Group';

const Groups = ({ groups }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    const newContent = (
      <ListGroup className="pt-5 w-100">
        {groups.map(group => <Group key={group.id} group={group}/>)}
      </ListGroup>
    );
    setContent(newContent);
  }, [groups]);
  return (
    <>
      {content}
    </>
  );
}

export default Groups;
