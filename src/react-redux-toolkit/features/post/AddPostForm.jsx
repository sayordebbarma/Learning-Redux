import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState('');

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);
  const onUserChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && description) {
      dispatch(postAdded(title, description, userId));

      setTitle('');
      setDescription('');
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSavePost = Boolean(title) && Boolean(description) && Boolean(userId)

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postUser">Post Owner</label>
        <select name="postUser" id="postUser" value={userId} onChange={onUserChanged}>
            <option value="" >select user</option>
            {userOptions}
        </select>
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
        <button type='button' onClick={onSavePostClicked} disabled={!canSavePost}>
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
