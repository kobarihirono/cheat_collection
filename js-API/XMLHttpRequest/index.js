// GET
const xhrGet = new XMLHttpRequest();

xhrGet.open("GET", "https://jsonplaceholder.typicode.com/users");
xhrGet.responseType = "json";

xhrGet.onload = () => {
  if (xhrGet.readyState == 4 && xhrGet.status == 200) {
    console.log(xhrGet.response);
  } else {
    console.log(`Error: ${xhrGet.status}`);
  }
};

xhrGet.send();

// POST
const xhrPost = new XMLHttpRequest();

// POSTリクエストの設定
xhrPost.open("POST", "https://jsonplaceholder.typicode.com/posts");

xhrPost.setRequestHeader("Content-Type", "application/json");
const postBody = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});

xhrPost.onload = () => {
  if (xhrPost.readyState == 4 && xhrPost.status == 201) {
    console.log(JSON.parse(xhrPost.responseText));
  } else {
    console.log(`Error: ${xhrPost.status}`);
  }
};

xhrPost.send(postBody);

// Patch
const xhrPatch = new XMLHttpRequest();

xhrPatch.open("PATCH", "https://jsonplaceholder.typicode.com/posts/101");
xhrPatch.setRequestHeader("Content-type", "application/json; charset=utf-8");
const body = JSON.stringify({
  body: "My PATCH request",
});

xhrPatch.onload = () => {
  var data = JSON.parse(xhrPatch.responseText);
  if (xhrPatch.readyState == 4 && xhrPatch.status == "200") {
    console.log(data);
  } else {
    console.log(`Error: ${xhrPatch.status}`);
  }
};

xhrPatch.send(body);

// Delete
const xhrDelete = new XMLHttpRequest();

xhrDelete.open("DELETE", "https://jsonplaceholder.typicode.com/posts/3");

xhrDelete.onload = function () {
  var data = JSON.parse(xhrDelete.responseText);
  if (xhrDelete.readyState == 4 && xhrDelete.status == "200") {
    console.log(data);
  } else {
    console.log(`Error: ${xhrDelete.status}`);
  }
};

xhrDelete.send();
