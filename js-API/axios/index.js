// GET
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error));

// POST
axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "POST request with Axios",
    body: "POST request",
    userId: 10,
  })
  .then(function (response) {
    console.log(response.data);
  })
  .then((error) => console.log(error));

// PUT
axios
  .put("https://jsonplaceholder.typicode.com/posts/10", {
    title: "PUT request with Axios",
    body: "PUT request",
    userId: 10,
  })
  .then(function (response) {
    console.log(response.data);
  })
  .then((error) => console.log(error));

// DELETE
axios
  .delete("https://jsonplaceholder.typicode.com/posts/10")
  .then(function (response) {
    console.log(response);
  })
  .then((error) => console.log(error));