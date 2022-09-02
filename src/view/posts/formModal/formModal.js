import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addPost, editPost } from "../../../redux/actions/posts";

const FormModal = ({ show, handleClose, post }) => {
  const allPosts = useSelector((state) => state.posts.allPosts);
  const dispatch = useDispatch();

  const notifyUpdate = () => toast("Post Updated!");
  const notifyAdd = () => toast("Post Added!");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (post?.id) {
      dispatch(editPost({ ...data, id: post.id, userId: post.userId }));
      notifyUpdate();
    } else {
      // generate new unique id
      const newPostId = Math.max(...allPosts.map((post) => post.id)) + 1;
      dispatch(
        addPost({
          ...data,
          id: newPostId,
          userId: Math.trunc(allPosts.length / 10) + 1,
        })
      );
      notifyAdd();
    }
    reset();
    handleClose();
  };

  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{post?.id ? "Edit Post" : "Add Post"} </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={post?.id ? post.title : ""}
                placeholder="title"
                {...register("title", {
                  required: true,
                  minLength: 3,
                  maxLength: 80,
                })}
              />
              {errors?.title?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.title?.type === "minLength" && (
                <p>title cannot less than 3 characters</p>
              )}
              {errors?.title?.type === "maxLength" && (
                <p>title cannot exceed 80 characters</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicbody">
              <Form.Label>body</Form.Label>
              <Form.Control
                as="textarea"
                defaultValue={post?.id ? post.body : ""}
                placeholder="body"
                {...register("body", {
                  required: true,
                  minLength: 5,
                })}
              />
              {errors?.body?.type === "required" && (
                <p>This field is required</p>
              )}
              {errors?.body?.type === "minLength" && (
                <p>title cannot less than 5 characters</p>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default FormModal;
