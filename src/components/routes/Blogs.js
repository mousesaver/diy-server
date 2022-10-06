import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    const [blogs, setBlogs] = useState([])
    const [errormessage, setErrormessage] = useState('')

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog`)
                setBlogs(response.data)

            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrormessage(err.response.data.message)
                }
            }
        }
        getBlogs()
    }, [])
    const blogLink = blogs.map((blog) => {
        return (
            <div key={`blog${blog._id}`}>
                <Link to={`/blogs/${blog._id}`}>{blog.name}</Link>
            </div>
        )
    })
    return (
        <div>
            <h1>All Blogs</h1>

            {blogLink}
            {errormessage}
        </div>
    )
}