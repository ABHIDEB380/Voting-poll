import '../style/Header.css'
import { Outlet, Link } from "react-router-dom";
export default function Header() {
    return(
    <>
    <div className='main'>
        <ul className='main-item'>
            <li className="header-item">
            <Link to="/poll">HOME</Link>
            </li>
            <li className="header-item">
            <Link to="/result">RANK</Link>
            </li>
            <li className="header-item">
            CONTACT
            </li>
        </ul>
        <Outlet/>
        <div className='profile'>Gagan</div>
    </div>

    </>
    )
}