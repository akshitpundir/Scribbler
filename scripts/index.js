var createPost = document.getElementById('createPostModal');
var createPostBtn = document.getElementById("createBtn");
var createmodalSpan = document.getElementById("createModalSpan");
createmodalSpan.onclick = function() {
  createPost.style.display = "none";
}
createPostBtn.onclick = function() {
  createPost.style.display = "block";
}
//Akshit