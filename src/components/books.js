import BookItem from './bookItem'; /* Imports BookItem from bookItem component */

{/* Created a function to display a book item, 1 book per card */}
function Books(props){
    {/* Mapping the prop to Books.js and recalling prop per book */}
    return props.myBooks.map(
        (book)=>{
            return <BookItem mybook={book}></BookItem>
        }
    );
}

export default Books;