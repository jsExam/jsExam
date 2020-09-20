export default function getCourse(id) {
  return fetch("https://jsexam.herokuapp.com/lectures?id=" + id)
    .then((response) => {
      return response.status >= 200 && response.status < 300
        ? Promise.resolve(response.json())
        : Promise.reject(new Error(response.statusText));
    })
    .catch((err) => {
      console.log(err);
    });
}
