import{ReactComponent as GithubIncon} from'assets/img/github.svg';
import './styles.css';

function NavBar(){

    return(
        <header>
            <nav className="container">
                <div className="crud-nav-content">
                    <h1>PaginaDeCRUD</h1>
                    <a href="https://github.com/Felipe-Silva93">
                        <div className="crud-contact-container">
                            <GithubIncon/>
                            <p className="crud-contact-link">/PaginaDeCRUD-Felipe</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
   
}

export default NavBar;