export const AboutContent = () => {
    return (
        <div className="d-flex bg-light" id="about">
            <div className="container d-flex flex-column align-items-center justify-content-center">
                <h1 className="display-3 my-5">About me</h1>
                <div className="card shadow-lg rounded mb-5 anim">
                    <div className="card-body d-flex flex-column flex-md-row p-md-5 align-items-center">
                        <div className="col-12 col-md-3 m-5 m-md-0 text-center">
                            <img src="/img/profile.jpg" id="profile" alt="douglas" />
                        </div>
                        <div className="col-12 col-md-9">
                            <p className="font-weight-light">
                                Hello, my name is Douglas. I'm 28 years old and from Buenos Aires, Argentina.
                                I'm an engineering student and I have been programming since I was a teenager.
                                My first programming was Visual Basic at my high school. After those years, I
                                started to learn C/C++ at my university (National Technological University,
                                UTN FRBA from Buenos Aires, Argentina) and I learned Java on my own. A few
                                years ago I decided to work with Javascript and I loved it. Nowadays almost
                                everything can be build with Javascript. I decided to become a full time
                                Javascript Developer for that reason and I'm focusing my time with ReactJS.
                    </p>
                        </div>
                    </div>
                </div>

                <div className="card m-5 w-100 shadow-lg rounded anim">
                    <div className="card-body d-flex flex-column flex-md-row justify-content-around p-0 mb-sm-3">
                        <div>
                            <p className="lead text-center py-3">My development skills</p>
                            <div className="d-flex justify-content-center">
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">JavaScript</li>
                                        <li className="list-group-item">TypeScript</li>
                                        <li className="list-group-item">ReactJS</li>
                                        <li className="list-group-item">React Native</li>
                                        <li className="list-group-item">Next.js</li>
                                        <li className="list-group-item">NodeJs</li>
                                        <li className="list-group-item">npm</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Redux</li>
                                        <li className="list-group-item">Redux-Saga</li>
                                        <li className="list-group-item">Firebase</li>
                                        <li className="list-group-item">Express Js</li>
                                        <li className="list-group-item">MongoDB</li>
                                        <li className="list-group-item">Firebase</li>
                                        <li className="list-group-item">Git/Github</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">HTML</li>
                                        <li className="list-group-item">CSS</li>
                                        <li className="list-group-item">SASS/SCSS</li>
                                        <li className="list-group-item">Bootstrap</li>
                                        <li className="list-group-item">Ant Design</li>
                                        <li className="list-group-item">Responsive Design</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center mt-5 p-md-5">
                            <div className="flex-row mb-1">
                                <img src="/img/svg/js.png" className="svgicon" alt="javascript" />
                                <img src="/img/svg/ts.png" className="svgicon" alt="typescript" />
                                <img src="/img/svg/react.png" className="svgicon" alt="reactjs" />
                                <img src="/img/svg/html.png" className="svgicon" alt="html5" />
                                <img src="/img/svg/css.png" className="svgicon" alt="css3" />
                            </div>
                            <div className="flex-row">
                                <img src="/img/svg/bootstrap.png" className="svgicon" alt="bootstrap" />
                                <img src="/img/svg/npm.png" className="svgicon" alt="npm" />
                                <img src="/img/svg/node.png" className="svgicon" alt="nodejs" />
                                <img src="/img/svg/git.png" className="svgicon" alt="git" />
                                <img src="/img/svg/github.png" className="svgicon" alt="github" />
                            </div>
                            <div className="flex-row">
                                <img src="/img/svg/sass.png" className="svgicon" alt="sass" />
                                <img
                                    src="/img/svg/responsive.png"
                                    className="svgicon"
                                    alt="responsive design"
                                />
                                <img src="/img/svg/firebase.png" className="svgicon" alt="firebase" />
                                <img src="/img/svg/redux.png" className="svgicon" alt="redux" />
                                <img src="/img/svg/reduxSaga.png" className="svgicon2x" alt="redux-saga" />
                            </div>
                            <div className="flex-row">
                                <img src="/img/svg/next.js.png" className="svgicon3x" alt="next.js" />
                                <img src="/img/svg/mongoDB.png" className="svgicon3x" alt="mongodb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card m-5 w-100 shadow-lg rounded anim">
                    <div className="card-body p-md-5">
                        <p className="lead">My formation</p>
                        <p className="font-weight-light">
                            I'm an autodidact. Our field goes very fast and you have to be up to date all
                            the time. These are some of my resources as a developer.
                  </p>
                        <p>
                            FreeCodeCamp, TreeHouse, Scrimba, Udemy, SoloLearn, W3Schools, MDN Web Docs and
                            more.
                  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}