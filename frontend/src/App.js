import React from 'react';
import GroupsPanel from './components/GroupsPanel';

function App() {
  return (
    <div className="App" style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: 1 }}>
        <GroupsPanel />
      </div>
      <div style={{ flex: 1 }}>
        {/* Здесь позже будет блок с Нодами */}
      </div>
      <div style={{ flex: 1 }}>
        {/* Здесь будет Метрики/Интерфейсы и пр. */}
      </div>
    </div>
  );
}

export default App;
