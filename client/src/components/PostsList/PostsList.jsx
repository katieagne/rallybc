import React from "react";

const PostsList = ({ allPosts }) => {
  const posts = allPosts;
  console.log("inside posts list component");
  return (
    <>
      {posts && (
        <div>
          <h1>posts list</h1>
          {posts
            .filter((post) => post._id !== posts._id)
            .map((data) => {
              return (
                <>
                  <p>{data.title}</p>
                </>
              );
            })}
        </div>
      )}
    </>
  );
};

export default PostsList;
