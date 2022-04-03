import './App.scss';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="banner">
                <img src="https://zasoby.ekologia.pl/artykulyNew/22788/xxl/shutterstock-1157641351_800x600.jpg" alt="banner" />
            </div>
            <div className="content">
            <h1>C00mbucha blog</h1>
            <ul className="options">
                <li>Szukaj tytulu wpisu</li>
                <li>Wyswietl z tagami</li>
                <li>Sortuj</li>
                <li>Wyswietl wszystkie posty</li>
            </ul>
            </div>
        </div>
     );
}
 
export default Navbar;