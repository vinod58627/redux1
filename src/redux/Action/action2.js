
export const VINOD_POSTS = "VINOD_POSTS";


export const iPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return dispatch({ type: VINOD_POSTS, payload: data });
    });
};

/*export const iPosts = () => (dispatch) => {
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((data) => {
      return dispatch({ type: VINOD_POSTS, payload: data });
    });
};*/
