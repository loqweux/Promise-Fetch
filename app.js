const postsContainer = document.getElementById("posts-container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("h1");
      title.textContent = item.title;

      const content = document.createElement("p");
      content.textContent = item.body;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Удалить";
      deleteBtn.className = "delete-btn";
      deleteBtn.addEventListener("click", () => {
        card.remove();
      });

      const postId = document.createElement("span");
      postId.className = "post-id";
      postId.textContent = `ID: ${item.id}`;

      card.append(title, content, deleteBtn, postId);
      postsContainer.append(card);
    });
  });
