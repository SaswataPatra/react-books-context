import { useContext } from "react";
import BooksContext from "../context/Books";

function useBookContext(){
    return useContext(BooksContext);
}

export default useBookContext;