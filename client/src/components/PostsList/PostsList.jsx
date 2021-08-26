import React from "react";
import "./postsList.scss";
import { Link } from "react-router-dom";
import down from "../../assets/icons/down-arrow.png";

const PostsList = ({ allPosts }) => {
  const posts = allPosts;
  function refreshNew() {
    window.location.href = "/posts/new";
  }

  function useEffect() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <>
      {posts && (
        <div className="post">
          <div className="post__new">
            <div className="post__wrapper">
              <h1 className="posts__title">Posts</h1>
              <button className="post__btm-btn" onClick={useEffect}>
                <img
                  className="post__down-img"
                  src={down}
                  alt="arrow to scroll to bottom"
                />
              </button>
            </div>
            <Link className="post__link " to="/posts/new" onClick={refreshNew}>
              add post
            </Link>
          </div>
          {posts
            .filter((post) => post._id !== posts._id)
            .map((data) => {
              return (
                <div key={data._id} className="post__container">
                  <p className="post__title">{data.title}</p>
                  <p className="post__content">{data.content}</p>

                  {/* <p className="">posted by {data.postedBy}</p> */}
                  <div className="post__info-container">
                    <p className="post__date">on {data.createdAt}</p>
                    <p className="post__likes">likes {data.likes}</p>
                  </div>

                  <Link
                    className="post__link post__link--delete"
                    to={`/posts/delete/${data._id}`}
                  >
                    delete
                  </Link>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default PostsList;
