import Books from './books'; /*Imports Books from books component*/
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function Read(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/api/books')
        .then(
            (response)=>{
                setData(response.data.myBooks);
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