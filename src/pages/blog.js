import { Layout } from '../components/layout/Layout'

const Blog = () => {
    return (
        <Layout>
            <h1 className='text-center py-5'>Blog</h1>
            <div className='card border-0'>
                <h2 className='display-4'>How to start a next.js project in simple steps</h2>
                <p className='lead pt-5'>
                    1) npm init --y
                        </p>
                <p className='lead'>
                    2) npm i next react react-dom
                </p>
                <p className='lead pb-3'>
                    3) Edit your package.json
                </p>
                <img src='./first.png' width="50%" />
                <p className='lead py-3'>
                    4) Create .gitignore and add the node_modules and .next lines
                </p>
                <img src='./second.png' width='50%' />
                <p className='lead py-3'>
                    5) Create a src/pages folder with an index.js and _app.js files.
                </p>
                <img src='./index.png' width='50%' className='pb-5' />
                <img src='./app.png' width='50%' className='pb-4' />
                <p className='lead'>
                    6) npm run dev
                </p>
                <p className='lead'>
                    7) That's all! You can procced with git init and add your first commit.
                </p>
            </div>
        </Layout>
    )
}

export default Blog