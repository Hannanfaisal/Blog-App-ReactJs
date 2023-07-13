import React from "react";
import axios from "axios";

export default function Create(props) {
    const submitHandler = (event) =>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        const author = event.target.author.value;

        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title,
            body,
            author
        }).
        then((response)=>{
            event.target.reset();
        }).
        catch((error)=>{

        })

    }
  return (
    <div>
        <div className="container">
           <div className="row p-5">
            <h1 className="text-center mb-5">Create Your Posts</h1>
            <div className="col-md-6 mx-auto">
                <p>Create a post...</p>
                <form onSubmit={submitHandler}>
                    <div className="form-group mb-2">
                        <input className="form-control" type="text" name="title" id="title" required placeholder="Title"/>
                    </div>
                    <div className="form-group mb-2">
                        <input className="form-control" type="text" name="body" id="body" required placeholder="Body"/>
                    </div>
                    <div className="form-group mb-2">
                        <input className="form-control" type="text" name="author" id="author" required placeholder="Author"/>
                    </div>
                    <div className="form-group mb-2">
                        <button className="btn btn-secondary">SEND</button>
                    </div>

                </form>
            </div>
            </div> 
        </div>
    </div>
  )
}
