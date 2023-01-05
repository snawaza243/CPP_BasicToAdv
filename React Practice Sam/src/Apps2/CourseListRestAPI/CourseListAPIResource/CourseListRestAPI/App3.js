import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home2 from './Home2';
import About from './About';
import PostForm from './PostForm';
class App3 extends Component {
    render() {
        return (
            <div className="App">
                <Routes>
                    <Route exact path='/' element={< Home2 />}>
                        <Route exact path='/about' element={< About />}></Route>
                        <Route exact path='/about/postform' element={< PostForm />}></Route>
                    </Route>
                </Routes>
            </div>
        );
    }
}
export default App3;