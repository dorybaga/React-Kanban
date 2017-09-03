import React from 'react';

const Header = () => {
  return (
    <div id="header">
      <div id="appName">
        <h2>kanban</h2>
      </div>
      <div id="addNewTaskBox">
        <button id="addNewTaskBtn">New Task</button>
      </div>
    </div>
  )
}

export default Header;