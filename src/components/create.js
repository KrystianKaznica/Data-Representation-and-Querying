import { useState } from "react";

{/** Created a function to create content for App */}
function Create(){

     {/** Created constants for editing Title, Cover and Author of Books */}
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    
    {/** handleSubmit submits the data on the form */}
    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title: "+title+
        " Cover: "+cover+
        " Author: "+author);
    };

    return(
        <div>
            <h3>Hello from Create.</h3>
            
            {/** Created a form to submit another book with manual input details */}
            <form onSubmit={handleSubmit}>
            {/** Created a div where label and input are put together to display a section on the form */}
            <div className="form-group">
                <label>Add Book Title: </label>
                <input type="text" className="form-control" 
                value={title} 
                onChange={(e) => { setTitle(e.target.value) }}/>
            </div>
            
            <div>    
                <label>Add Book Cover: </label>
                <input type="text" className="form-control" 
                value={cover} 
                onChange={(e) => { setCover(e.target.value) }}/>
            </div>
            
            <div>
                <label>Add Book Author: </label>
                <input type="text" className="form-control" 
                value={author} 
                onChange={(e) => { setAuthor(e.target.value) }}/>
            </div>
            <br></br>
            <div>
                <input
                type='submit'
                value='Create Book'>    
                </input>
            </div>
            
            </form>
        </div>
    );

    
}

export default Create;