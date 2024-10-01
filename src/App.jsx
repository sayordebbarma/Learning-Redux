import './App.css';
import AddPostForm from './react-redux-toolkit/features/post/AddPostForm';
import PostsList from './react-redux-toolkit/features/post/PostsList';
import ReduxReact from './redux-with-reactjs/components/ReduxReact';

function App() {
  return (
    // <ReduxReact />
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
}

export default App;
