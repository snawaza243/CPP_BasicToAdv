import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home2 from './Home2'; import About from './About';
import PostForm from './PostForm';
function Main() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path='/' element={< Home2 />}>
                        <Route exact path='/about' element={< About />}></Route>
                        <Route exact path='/about/postform' element={< PostForm />}></Route>
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main;