const cardsFromFakeDB = [{

    _id : 1,
    title : 'task1',
    priority : 'medium',
    createdBy : 'dory',
    assignedTo : 'person',
    status: 'queue'

  },
  {
    _id : 2,
    title : 'task2',
    priority : 'low',
    createdBy : 'someone',
    assignedTo : 'someone else',
    status: 'queue'

  },
  {
    _id : 3,
    title : 'task3',
    priority : 'high',
    createdBy : 'guy',
    assignedTo : 'friend',
    status: 'done'
  },
  {
      _id : 4,
      title : 'task4',
      priority : 'blocker',
      createdBy : 'dory',
      assignedTo : 'nelson',
      status: 'queue'
    },
    {
      _id : 5,
      title : 'task5',
      priority : 'low',
      createdBy : 'human',
      assignedTo : 'different human',
      status: 'progress'
    }
];

module.exports = {cards: cardsFromFakeDB};