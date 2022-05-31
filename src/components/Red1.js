import React, { useEffect } from "react"
import { useSelector , useDispatch } from 'react-redux'
//import { connect } from "react-redux";
//import { getPosts } from './../redux/Action/action1';
import { iPosts  } from './../redux/Action/action2'
import { kumarPosts  } from './../redux/Action/action3'

function Red1(props) {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.users)
  const { products } = useSelector(state => state.vin)

 
  useEffect(() => {
    dispatch(iPosts())
    dispatch(kumarPosts())}, []);
    console.log(iPosts)
  return (
    <div>
      <h1>React Redux & Fake Rest API</h1>
      <div className="row">
          {/*<div key={post.id}>*/}
      {
         user && user.map((post,i) => {
        return (<div key={i} className=" col col-lg-4 border"> 
            <h2>Id:{post.id}</h2>
            <p>Title:{post.name}</p>
            <p>Body: {post.username}</p>
          </div>
        );
      })
     }
           {/*
         products && products.map((post,i) => {
        return (<div key={i} className=" col col-lg-4 border"> 
            <h2>Id:{post.id}</h2>
            <p>Title:{post.name}</p>
            <p>Body: {post.username}</p>
          </div>
        );
      })
    */}
      </div>
    </div>
  );
}

/*const mapStateToProps = (state) => {
  console.log("this is state", state);
  return {
    user: state.vinodReducer
  };
};*/

export default Red1;
