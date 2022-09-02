import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, resetPost } from "redux/actions/posts";
import Loading from "view/uiElements/loading/Loading";
import Post from "view/uiElements/post/Post";
import FormModal from "../formModal/formModal";

const PostsList = () => {
  const [show, setShow] = useState(false);

  const allPosts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  useEffect(() => {
    dispatch(resetPost());
    if (!allPosts.length) {
      dispatch(getAllPosts());
    }
  }, [dispatch]);

  return (
    <section className="spacer">
      <Container className="mb-4">
        <FormModal show={show} handleClose={handleClose} />
        <Row>
          <Col className="d-flex justify-content-between">
            <h3>Posts</h3>
            <Button variant="outline-primary" size="sm" onClick={handleShow}>
              Add new Post
            </Button>
          </Col>
        </Row>
      </Container>
      {!allPosts.length && <Loading />}
      {allPosts.length && (
        <Container>
          <Row>
            {allPosts.map(({ id, title, body }) => (
              <Col key={id} md={4} sm={6} className="mb-2">
                <Post id={id} title={title} body={body} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default PostsList;
