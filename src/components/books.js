import BookItem from './bookItem';

function Books(props){
    return props.myBooks.map(
        (book)=>{
            return <BookItem mybook={book}></BookItem>
        }
    );
}

export default Books;