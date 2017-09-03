import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div id="appName">
        <h2>KANBAN</h2>
      </div>
      <div id="addNewTaskBox">
        <button id="addNewTaskBtn">+ NEW TASK</button>
      </div>
    </div>
  )
}

export default Header;