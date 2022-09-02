import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = ({ id, title, body }) => {
  return (
    <div className="border rounded h-100 p-2">
      <Link to={`/post/${id}`}>
        <Badge className="px-3" pill bg="warning" text="dark">
          {id}
        </Badge>{" "}
        <h3>{title}</h3>
        <p>{body}</p>
      </Link>
    </div>
  );
};

export default Post;
