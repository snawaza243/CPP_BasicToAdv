import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <div className='top'>
                    <div className='topCenter'>
                        <ul className='topList'>
                            <li className='topListItem'><Link to="./" >Home</Link></li>
                            <li className='topListItem'><Link to="./aboutUs" >About</Link></li>
                            <li className='topListItem'><Link to="./contact" >Contact</Link></li>
                            <li className='topListItem'><Link to="./error" >NotPage</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>

            <Outlet />
        </>
    );
};
export default Layout;


