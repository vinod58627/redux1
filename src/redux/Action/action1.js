export const GET_POSTS = "GET_POSTS";

export const getPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: GET_POSTS, payload: data });
    });
};
