let gridContainer = document.getElementById("content");
// CALLING POST
// aPPI CALL FOR POST:

// const fetchPost = async () => {
//   const apiURL = "https://jsonplaceholder.typicode.com/posts";
//   let posts = [];

//   try {
//     const data = await fetch(apiURL);
//     posts = await data.json();
//   } catch (error) {
//     console.error(error);
//   }

//   return posts;
// };

// const fetchImgs = async () => {
//   const apiURL = "https://jsonplaceholder.typicode.com/albums/1/photos";
//   let imgs = [];

//   try {
//     const data = await fetch(apiURL);
//     imgs = await data.json();
//   } catch (error) {
//     console.error(error);
//   }

//   return imgs;
// };

const photoUrl = "https://fakerapi.it/api/v1/books?_quantity=10";

fetch(photoUrl)
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts);
    posts.data.map((post) => {
      let singlePost = postCreation(post);
      gridContainer.appendChild(singlePost);
    });
  })

  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function postCreation(post) {
  let anchorTag = document.createElement("a");
  anchorTag.href = "../pages/blog.html";
  let container = document.createElement("div");
  let imgSection = document.createElement("div");
  imgSection.classList.add("image-section");
  let img = document.createElement("img");
  img.src = "./background.png";
  img.alt = "image of a person";
  imgSection.appendChild(img);

  container.appendChild(imgSection);

  let textSection = document.createElement("div");
  textSection.classList.add("text-section");

  let p1 = document.createElement("p");
  p1.classList.add(`text-[#757B83]`);
  p1.textContent = "FOOD";

  textSection.appendChild(p1);

  let title = document.createElement("p");
  title.classList.add("font-bold");
  title.textContent = post.title;

  textSection.appendChild(title);

  let body = document.createElement("p");
  body.textContent = post.description;
  body.classList.add("text");
  textSection.appendChild(body);

  let btn = document.createElement("button");
  btn.classList.add(
    "bg-[#C6000F]",
    "text-[#ffffff]",
    "rounded-[20px]",
    "px-[20px]"
  );
  btn.textContent = "Read more";

  textSection.appendChild(btn);

  container.appendChild(textSection);

  anchorTag.appendChild(container);

  return anchorTag;
}

// const fetchContent = async () => {
//   const contents = [];
//   const posts = await fetchPost();
//   const imgs = await fetchImgs();

//   if (condition) {
//   } else {
//   }

//   console.log("posts", posts);
//   console.log("imgs", imgs);
// };

// fetchContent();
