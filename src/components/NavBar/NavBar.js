import './NavBar.scss';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div>
                <ul>
                    <Link to="/"><li><img src="/assets/logo.png" alt="Logo"/>Dashboard</li></Link>
                    <Link to="/"><li><img src="/assets/home1.png" alt="Home"/>Home</li></Link>
                    <Link to="/todolist"><li><img src="/assets/to-do-list.png" alt="List"/>To Do List</li></Link>
                    <Link><li><img src="/assets/wallet.png" alt="Finanzas"/>Finanzas</li></Link>
                    <Link><li><img src="/assets/date.png" alt="Calendario"/>Calendario</li></Link>
                    <Link><li><img src="/assets/worldwide.png" alt="Viajes"/>Viajes</li></Link>
                    <Link><li><img src="/assets/headphones.png" alt="Musica"/>Musica</li></Link>
                    <Link><li><img src="/assets/weather.png" alt="Clima"/>Clima</li></Link>
                </ul>
            </div>
            <div>

            </div>
        </>
    );
}

export default NavBar;