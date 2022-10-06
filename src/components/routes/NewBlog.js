
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Form from "../../Form"
export default function NewBlog() {
    //  state to hold our form
    const [form, setForm] = useState({
        name: '',
        title: 0,
        content: ''
    })
    const [errorMessage, setErrorMessage] = useState('')
    // submit event handler
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            // post form data to the backend API
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/blog`, form)
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
            <h1>New Blog:</h1>
            <p>{errorMessage}</p>
            <Form handleSubmit={handleSubmit} action='Create' form={form} setForm={setForm} errorMessage={errorMessage}/>
        </div>
    )
}