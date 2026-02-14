import { useState } from "react";
import { usePosts } from "./hooks/usePost";
import { Pagination } from "./components/Pagination";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import RefEg from './components/RefEg';
import ProgressBar from "./components/ProgressBar";
function App() {
  const [userId, setUserId] = useState('');
  const { data: posts, isPending, error } = usePosts(userId);

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log('data', posts);
  return (
    <div>
      <ProgressBar/>
      <RefEg/>
      {/* <TodoForm/>
      <TodoList/> */}
      {/* <Pagination/> */}
      {/* <select value={userId} onChange={(e)=>{setUserId(e.target.value)}}>
        <option value=''>All</option>
        <option value={1}>User 1</option>
        <option value={2}> User 2</option>
        <option value={3}> User 3</option>
      </select>
      {posts && posts?.map((post, index) => (
        <div key={index} style={{ padding: 6, border: '2px solid grey', margin: 6 }}> {post.title}</div>
      ))} */}
    </div>
  );
}

export default App;
