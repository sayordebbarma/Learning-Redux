import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdded } from './postSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);

  const onSavePostClicked = () => {
    if (title && description) {
      dispatch(
        postAdded(title, description)
      );

      setTitle('');
      setDescription('');
    }
  };

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor='postTitle'>Post Title</label>
        <input
          type='text'
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor='postContent'>Post Content</label>
        <input
          type='text'
          id='postContent'
          name='post'
          value={description}
          onChange={onDescriptionChanged}
        />
        <button type='button' onClick={onSavePostClicked}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
