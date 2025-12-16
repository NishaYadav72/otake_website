// Example API service
export const fetchData = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .catch(err => console.error(err));
};
