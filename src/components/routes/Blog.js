import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Bounty() {
    const [blog, setBlog] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
                // console.log(response.data)
                setBlog(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getBlog()
    },[id])

    const handleDelete = async () => {
        try {
            // axios to the backend to delete this bounty
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
            // after deletion, navigate back to /bounties
            navigate('/blogs')
        } catch(err) {
            console.warn(err)
            if (err.response) {
                setErrorMessage(err.response.data.message)
            }
        }
    }
    return (
        <div>
            <h1>Blog Details</h1>
            <p>{errorMessage}</p>
            <div>
                <Link to={`/blogs/${id}/edit`}><button>Edit this Blog</button></Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
            <div>
                <h2>{blog.name}</h2>
                <p>Title: {blog.title}</p>
                <p>Content: {blog.content}</p>
            </div>
            
        </div>
    )
}