// GET
$.get("https://jsonplaceholder.typicode.com/users", (data, status) => {
  console.log(data);
  console.log(status); // 接続結果を表示 success
});

// POST
const bodyPost = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});
$.post(
  "https://jsonplaceholder.typicode.com/users",
  bodyPost,
  (data, status) => {
    console.log(data);
  }
);

// ajaxを使用した非同期リクエスト
$.ajax({
  url: "https://jsonplaceholder.typicode.com/users",
  type: "GET",
  success: function (result) {
    console.log(result);
  },
});

// ajaxを使用したPATCH非同期リクエスト
const bodyPatch = JSON.stringify({
  body: "My PATCH request",
});
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/101",
  type: "PATCH",
  data: bodyPatch,
  success: function (result) {
    console.log(result);
  },
});

// ajaxを使用したDELETE非同期リクエスト
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts/3",
  type: "DELETE",
  success: function (result) {
    console.log(result);
  },
});

// getJSONメソッドの使用
$.getJSON("https://jsonplaceholder.typicode.com/users", function (result) {
  console.log(result);
});
