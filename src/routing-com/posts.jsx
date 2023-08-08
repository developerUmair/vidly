import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Posts = () => {
  const { year, month } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(location.search);
  console.log(searchParams);
  // const sortBy = searchParams.get("sortBy")
  // const approved = searchParams.get("approved")
  return (
    <div>
      <h1>Posts</h1>
      Year:{year} , Month:{month}
      {/* <p>Sort By: {sortBy}</p>
      <p>Approved: {approved}</p> */}
    </div>
  );
};

export default Posts;
