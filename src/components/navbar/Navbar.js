import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top shadow-lg p-2"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.623)' }}
        >
            <div className="container d-flex">
                <a className="navbar-brand" href="#">
                    Naim
            </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link href='/' >
                                <a className="nav-link">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/about' >
                                <a className="nav-link">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/contact' >
                                <a className="nav-link">
                                    Contact
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/blog' >
                                <a className="nav-link">
                                    Blog
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}