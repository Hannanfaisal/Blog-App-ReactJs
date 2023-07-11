import React from 'react'

export default function Footer() {
  return (
        <footer className='bg-dark'>
            <div className="container">
                <div className="row p-4">
                    <div className="col-md-4 p-4 text-center">
                        <h2>Daily Blog</h2>
                        <p>A daily blog informative website for everyone.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3>Quick Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="">Home</a></li>
                            <li><a href="">Posts</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                       <h3>Contact Us</h3>
                       <ul className="list-unstyled">
                        <li>Phone: +92-3459596778</li>
                        <li>Email: info@gmail.com</li>
                        <li>Location: Lahore, Pakistan</li>
                       </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="text-center">Copyright &copy; Daily Blog Website 2023</p>
                    </div>
                </div>
            </div>
        </footer>
  )
}
