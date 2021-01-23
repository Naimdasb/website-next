export const ContactContent = () => {
    return (
        <div className="d-flex" id="contact">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-md-between justify-content-around">
                <div className="card d-flex col-md-5 shadow-lg rounded anim">
                    <div className="card-body">
                        <p className="lead">My Linkedin and Github Profiles</p>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/douglas-valente-6002481b4/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-2x fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/Naimdasb" target="_blank" rel="noreferrer">
                                <i className="fab fa-2x fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}