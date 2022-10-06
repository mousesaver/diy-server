import { Link } from "react-router-dom"


export default function NavBar() {
    return (
        <nav>
            <ul style={{listStyleType: 'none'}}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/blogs'>All Blogs</Link>
                </li>
                <li>
                    <Link to='/blogs/new'>Write A Blog</Link>
                </li>
            </ul>
        </nav>
    )
}