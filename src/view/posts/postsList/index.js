import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "redux/actions/posts";

const PostsList = () => {
  const allPosts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();

  console.log(allPosts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <section className="spacer">
      {/* {!allPosts.length && <Spinner />} */}
      {allPosts.length && (
        <Container>
          <Row>
            {allPosts.map((post, idx) => (
              <Col md={4} sm={6}>
                <h3>{post.title}</h3>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default PostsList;
