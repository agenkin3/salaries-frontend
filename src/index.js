// const BACKEND_URL = 'http://localhost:3000';
// fetch(`${BACKEND_URL}/api/v1/posts`, {mode: 'no-cors'})
// .then(response => response.json())
// .then(parsedResponse => console.log(parsedResponse));

document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/posts';
  fetch (endPoint)
  .then(res => res.json())
  .then (json => console.log(json));
});