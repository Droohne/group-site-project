import { NavLink } from "react-router-dom"
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Новости</NavLink>
      <NavLink to="/group" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Список группы</NavLink>
      <NavLink to="/teachers" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Преподаватели</NavLink>
      <NavLink to="/schedule" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Расписание</NavLink>
      <NavLink to="/contacts" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Контакты</NavLink>
      <NavLink to="/institute" className="nav-link">Об Институте</NavLink>
      <NavLink to="/university" className="nav-link">Об Университете</NavLink>
    </nav>
  )
}
