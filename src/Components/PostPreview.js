import React from 'react'

export default function PostPreview(props) {
  return (
    <div className='post mx-auto' style={{width:"60%"}}>
        <div className="row">
            <div className="col-md-10">
                <div className="post-title">
                    <h2>{props.title}</h2>
                </div>
                <div className="post-subtitle">
                    <p>{props.body}</p>
                </div>
                <hr />
            </div>
            <div className="col-md-2">
                <button  className="btn btn-sm btn-danger" onClick={props.delete}>Delete</button>
            </div>
        </div>
    </div>
  )
}
