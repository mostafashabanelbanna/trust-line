import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPost, deletePost } from "redux/actions/posts";
import { useParams, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loading from "view/uiElements/loading/Loading";
import FormModal from "../formModal/formModal";

const PostDetails = () => {
  const [show, setShow] = useState(false);

  const { postId } = useParams();
  const navigate = useNavigate();
  const post = useSelector((state) => state.posts.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch]);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  const notifyDelete = () => toast("Post Deleted!");

  const handleDelete = () => {
    dispatch(deletePost(post?.id, navigate));
    notifyDelete();
  };

  return (
    <section className="spacer">
      <ToastContainer />
      {!post?.id && <Loading />}
      {post?.id && (
        <>
          <FormModal show={show} post={post} handleClose={handleClose} />
          <Container className="py-5 my-5">
            <Row>
              <Col className="mb-2">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button
                  onClick={handleShow}
                  className="px-5"
                  size="sm"
                  variant="outline-primary"
                >
                  Edit
                </Button>
                <Button
                  onClick={handleDelete}
                  className="px-5 mx-2"
                  size="sm"
                  variant="outline-danger"
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </section>
  );
};

export default PostDetails;
