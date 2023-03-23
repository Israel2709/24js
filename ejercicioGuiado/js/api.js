export default {
  getTodos: async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    return data;
  },
};
