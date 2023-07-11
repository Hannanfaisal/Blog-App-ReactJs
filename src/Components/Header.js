import React from 'react'

export default function Header(props) {
  return (
    <header className="header" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80")'}}>
        <div className="container" >
            <div className="row">
                <div className="col-md-6">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </div>
    </header>
  )
}
