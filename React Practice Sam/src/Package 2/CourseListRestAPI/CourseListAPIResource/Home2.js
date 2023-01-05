import React from 'react';
import { Outlet, Link } from "react-router-dom";
function Home2() {
    return (
        <div>
            <h1>Build a course list application with basic React concepts and Rest API</h1>
            <ul className="App-header">
                <li><Link to="about">Click to view Courses</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}
export default Home2;
