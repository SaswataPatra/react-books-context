import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBookContext from "./hooks/use-books-context";
function App() {
  const {fetchbooks} = useBookContext();

  useEffect(() => {
    fetchbooks();
  }, [fetchbooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}
export default App;
