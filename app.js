const { default: axios } = require("axios");

(async (userId) => {
  const { data: posts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=1`
  );

  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  user.posts = posts;
  console.log(posts);
})(1);
