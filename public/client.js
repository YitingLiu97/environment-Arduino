let canvas = document.getElementById("canvas");
let upload = document.getElementById("upload");
let posts = document.getElementById("posts");

// fetch posts from server
function getPosts() {
  fetch("/posts", {
    method: "get"
  })
    .then(res => res.json())
    .then(response => {

      let images_html = response
        .map(file_url => {
          return `<img src="uploaded/${file_url}">`;
        })
        .join("\n");
      posts.innerHTML = images_html;
    });
}
getPosts();

//UPLOAD CANVAS TO SERVER
upload.addEventListener("click", e => {
  let payload = {
    image: canvas.toDataURL("image/png"),
  };
  
  
  
  fetch("/upload", {
    method: "POST",
    body: JSON.stringify(payload), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(response => {
      console.log("Success:", JSON.stringify(response));
      getPosts();
    });
});
