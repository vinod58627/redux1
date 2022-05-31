import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { connect } from "react-redux";
import { getPosts } from './../redux/Action/action1';


function Home(props) {
  const dispatch = useDispatch()
  const { posts } = useSelector(state=> state.postsReducer)


 
  useEffect(() => {
    dispatch(getPosts())
  }, []);
  return (
    <div>
      <h1>React Redux & Fake Rest API</h1>
      <div className="row">
      {
         posts && posts.map((post,i) => {
        return (<div key={i} className=" col col-lg-4 border"> {/*<div key={post.id}>*/}
            <h2>Id:{post.id}</h2>
            <p>Title:{post.title}</p>
            <p>Body: {post.body}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

/*const mapStateToProps = (state) => {
  console.log("this is state", state);
  return {
    posts: state.postsReducer
  };
};*/

export default Home;
