import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postSlice';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.description.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h1>Today's Posts</h1>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
