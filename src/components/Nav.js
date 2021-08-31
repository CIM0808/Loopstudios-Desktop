import logo from '../assets/images/logo.svg'


const Nav = () => {
    return (   

            <nav className="navbar navbar-expand-lg navbar-dark">

                <a className="navbar-brand" href="/#">
                    <img src={logo} alt="/#" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className='navbar-nav ms-auto'>

                        <li className="nav-item mx-2">
                        <a className="nav-link active" aria-current="page" href="/#">About</a>
                        </li>

                        <li className="nav-item mx-2">
                        <a className="nav-link active" href="/#">Careers</a>
                        </li>

                        <li className="nav-item mx-2">
                        <a className="nav-link active" href="/#">Events</a>
                        </li>

                        <li className="nav-item mx-2">
                        <a className="nav-link active" href="/#">Products</a>
                        </li>

                        <li className="nav-item mx-2">
                        <a className="nav-link active" href="/#">Support</a>
                        </li>

                    </ul>

                </div> 

            </nav>
    )
}

export default Nav
