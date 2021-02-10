module.exports = {
  posts: [
    {
      id: 1,
      title: "Teste Mural",
      description: "Descrição Teste",
    },
    {
      id: 2,
      title: "Teste Mural",
      description: "Descrição Teste",
    },
    {
      id: 3,
      title: "Teste Mural",
      description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus quos fuga quia amet ullam vero sed voluptas cupiditate.",
    },
  ],
  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: generateID(), title, description });
    },
  
};

function generateID() {
  return Math.random().toString(36).substr(2, 9);
}
