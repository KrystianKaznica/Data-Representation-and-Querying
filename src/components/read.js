import Books from './books'; /*Imports Books from books component*/
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Read(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
        .then(
            (response)=>{
                setData(response.data.books);
            }
        )
        .catch(
            (error)=>{
                console.log('error');
            }
        );
    }, []);
     
    {/* Returns function with above data */}
    return(
        <div>
            <h2>Hello from my Read component.</h2><br></br>
            <h3>----------------------------------</h3>
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;