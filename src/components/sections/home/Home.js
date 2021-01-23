import Link from 'next/link'

export const Home = () => {
    return (
        <div id="home">
            <div className="container d-flex flex-column align-items-center justify-content-center h-100">
                <div className="jumbotron w-100 shadow-lg rounded bg-white p-4 p-sm-5 anim">
                    <h1 className="display-4" id="hello">
                        Hello there!
                </h1>
                    <p className="lead">My name is Douglas and I'm a Full Stack Developer.</p>
                    <hr className="my-4" />
                    <p>Let me introduce myself</p>
                    <Link href="/about">
                        <a
                            className="btn btn-md text-white"
                            style={{ backgroundColor: '#007bff' }}
                            role="button"
                        >
                            More About Me
                </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}