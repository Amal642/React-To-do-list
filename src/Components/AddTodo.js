import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description is not defined");
        }
        else{
            props.AddTodo(title,desc);
            settitle("");
            setdesc("");
        }
       
    }

    return (
        <div className='container my-4'>
            <h3>Add a To-Do</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input  className="form-control" id="title" value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder="Enter todo title" />

                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" value={desc} rows="3" onChange={(e)=>{setdesc(e.target.value)}} placeholder='Enter Description'></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo

