import React from 'react';
import QueueList from './QueueList.js';
import ProgressList from './ProgressList.js';
import DoneList from './DoneList';

const Body = () => {
  return (
    <div id="main">
      <QueueList />
      <ProgressList />
      <DoneList />
    </div>
  )
}

export default Body;