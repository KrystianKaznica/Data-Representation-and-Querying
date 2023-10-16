import Card from 'react-bootstrap/Card'; /* Imports Card from Bootstrap*/

function BookItem(props){

    return(
        <div>
        
        {/* Creates Card to display book items by text array*/}
        <Card style={{width: '300px', padding: '10px', position: 'relative', marginLeft: '45%', marginTop: '20px'}}>
        <Card.Title>{props.mybook.title}</Card.Title>
            <Card.Img src={props.mybook.thumbnailUrl} />
                <Card.Body>
                        <Card.Text>ISBN: {props.mybook.isbn}</Card.Text>
                        <Card.Text>STATUS: {props.mybook.status}</Card.Text>
                        <Card.Text>AUTHORS: {props.mybook.authors}</Card.Text>
                </Card.Body>
        </Card>

        </div>
    );
}

export default BookItem;