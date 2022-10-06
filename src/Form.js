
export default function Form(props) {
    return (
        <div>
            <form onSubmit={(e) => {props.handleSubmit(e)}}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input 
                        type='text'
                        id='name'
                        value={props.form.name}
                        placeholder='bounty name...'
                        onChange={e => props.setForm({...props.form, name: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='title'>Title:</label>
                    <input 
                        type='number'
                        id='title'
                        value={props.form.title}
                        placeholder='enter their crime...'
                        onChange={e => props.setForm({...props.form, title: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor='content'>Content:</label>
                    <input 
                        type='text'
                        id='content'
                        value={props.form.content}
                        placeholder='enter content...'
                        onChange={e => props.setForm({...props.form, content: e.target.value})}
                    />
                </div>
                <button type='submit'>{props.action}</button>
            </form>
        </div>
    )
}