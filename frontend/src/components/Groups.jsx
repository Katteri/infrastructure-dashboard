import React, { useState, useEffect } from "react";
import { ListGroup, Row } from "react-bootstrap";
import Group from './Group';

const Groups = ({ groups }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    const newContent = (
      <ListGroup className="w-100 h-100">
        {groups.map(group => <Group key={group.id} group={group}/>)}
      </ListGroup>
    );
    setContent(newContent);
  }, [groups]);
  return (
    <>
      {content? content: <Row className="align-self-center">Группы не найдены</Row>}
    </>
  );
}

export default Groups;
