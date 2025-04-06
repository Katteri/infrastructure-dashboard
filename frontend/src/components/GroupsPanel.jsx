import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGroups } from '../store.js';
import { groupsSlice } from '../store.js';
const { selectGroup } = groupsSlice.actions;

const GroupsPanel = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.groups.data);
  const selectedGroup = useSelector((state) => state.groups.selectedGroup);
  const status = useSelector((state) => state.groups.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getGroups());
    }
  }, [dispatch, status]);

  const handleGroupClick = (groupId) => {
    dispatch(selectGroup(groupId));
  };

  if (status === 'loading') return <div>Загрузка групп...</div>;
  if (status === 'failed') return <div>Ошибка загрузки групп</div>;

  const uniqueGroups = Array.from(new Map(groups.map(group => [group.group_id, group])).values());

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h2>Группы</h2>
      {uniqueGroups.length === 0 && <div>Нет доступных групп</div>}
      <ul>
        {uniqueGroups.map((group) => (
          <li
            key={group.group_id}
            onClick={() => handleGroupClick(group.group_id)}
            style={{
              cursor: 'pointer',
              fontWeight: selectedGroup === group.group_id ? 'bold' : 'normal',
              color: selectedGroup === group.group_id ? 'blue' : 'black',
              marginBottom: '8px',
            }}
          >
            {group.group_caption}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupsPanel;
