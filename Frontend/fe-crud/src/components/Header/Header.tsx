import { Link } from "react-router-dom"
import './header.sass'
export const Header = () => {
  return (
    <header>
      <h2 className="logo"><Link to={'/'}>CRUD</Link></h2>
      <nav className="navbar">
        <ul>
          <li className="nav-items"><Link to={'/update'}>Update</Link></li>
          <li className="nav-items"><Link to={'/delete'}>Delete</Link></li>
          <li className="nav-items"><Link to={'/userlist'}>Users List</Link></li>
        </ul>
      </nav>
    </header>
  )
}
