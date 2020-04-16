exports.get = (req, res) => {
  res.json({
    status: 'ok',
    lobbiest: [
      { id: 0, name: 'Lobby #1', members: 4, isPrivate: true },
      { id: 1, name: 'Top lobby 4ever', members: 3, isPrivate: false },
      { id: 2, name: 'Fun!', members: 1, isPrivate: false },
      { id: 3, name: 'Oh my', members: 2, isPrivate: true },
      { id: 4, name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Loremm', members: 5, isPrivate: false },
      { id: 5, name: 'Все сюда!', members: 1, isPrivate: false },
      { id: 6, name: 'Empty lobby', members: 0, isPrivate: false }
    ]
  });
};