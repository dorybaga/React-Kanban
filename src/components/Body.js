import React from 'react';
import QueueList from './QueueList.js';
import ProgressList from './ProgressList.js';
import DoneList from './DoneList';

const Body = ({ cards }) => {
  return (
    <div id="main">
      <QueueList
        cards={cards}
      />
      <ProgressList />
      <DoneList />
    </div>
  )
}

export default Body;