
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"
import Form from "../../Form"
export default function EditBlog() {
    //  state to hold our form
    const [form, setForm] = useState({
        name: '',
        title: 0,
        content: ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    // submit event handler
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`)
                // console.log(response.data)
                setForm(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getBlog()
    },[id])
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            // post form data to the backend API
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/blog/${id}`, form)
            // navigate back to /bounties to see the new bounty
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
            <h1>Edit Blog:</h1>
            <p>{errorMessage}</p>
            <Form handleSubmit={handleSubmit} action='Submit' form={form} setForm={setForm} errorMessage={errorMessage}/>
            <Link to={`/blogs/${id}`}>Go Back</Link>
        </div>
    )
}