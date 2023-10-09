import BookItem from './bookItem'; /* Imports BookItem from bookItem component */

function Books(props){
    return props.myBooks.map(
        (book)=>{
            return <BookItem mybook={book}></BookItem>
        }
    );
}

export default Books;