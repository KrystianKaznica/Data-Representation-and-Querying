import logo from './logo.svg';
import './App.css'; /* Imports main App.css styling.*/
import Header from './components/header'; /* Imports Header from components folder in src.*/
import Content from './content/content'; /* Imports Content from content folder in src.*/
import Footer from './components/footer'; /* Imports Footer from Components folder in src.*/
import Read from './components/read'; /* Imports Read from Components folder in src.*/
import Create from './components/create'; /* Imports Create from Components folder in src.*/
import 'bootstrap/dist/css/bootstrap.min.css'; /* Imports Bootstrap from react-bootstrap.netlify.app.*/
import Container from 'react-bootstrap/Container'; /* Imports Container for use with bootstrap.*/
import Nav from 'react-bootstrap/Nav'; /* Imports Nav so that bootstrap can display Navigation.*/
import Navbar from 'react-bootstrap/Navbar'; /* Imports Navbar, bootstrap can display Navigation Bar.*/

import { BrowserRouter, Routes, Route } from "react-router-dom"; /* Imports Router with Routes for page exchange in Navbar.*/




function App() {
  return (
    <BrowserRouter>
    <div className="App">

     {/** Created a Navbar */}
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
         <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
         </Nav>
      </Container>
    </Navbar>
    
    {/*Created Routes*/}
    <Routes>
      <Route path='/' element={<Content></Content>}></Route>
      <Route path='/read' element={<><Header/><Read/></>}/>
      <Route path='/create' element={<><Footer/><Create/></>}></Route>
    </Routes>
    
    
    </div>
    </BrowserRouter>
  );
}

export default App;
