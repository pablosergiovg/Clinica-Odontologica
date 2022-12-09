import Home from '../Routes/Home'
import Detail from '../Routes/Detail'
import Contact from '../Routes/Contact'
import Favs from '../Routes/Favs'
import ErrorComponent from '../Routes/ErrorComponent'

export const routes = [
    { id: 1, path: "/", Element: Home, title: "Home" },
    { id: 2, path: "/dentist/:id", Element: Detail, title: "Detail" },
    { id: 3, path: "/contact", Element: Contact, title: "Contact" },
    { id: 4, path: "/favs", Element: Favs, title: "Favs" },
    { id: 5, path: "*", Element: ErrorComponent, title: "Error" },
]