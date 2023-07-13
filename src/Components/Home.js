import React, {useState} from 'react';
import {Link } from "react-router-dom";
import PostPreview from './PostPreview';

export default function Home(props) {
    const [name, setName] = useState("Hannan");
    const [oldPost, setOldPost] = useState(0);
    
  return (
    <div className="home-section">
        <div className="container mt-5 mb-3">
            <button className="btn btn-primary" onClick={ () => setName("Hannan Faisal")}>Change {name}</button>
            <div className="row">
                <div className="col-md-2">

                <ul class="list-group">
  <li class="list-group-item " aria-current="true"> <Link to="/posts">Blog</Link></li>
  <li class="list-group-item"> <Link to="">Page 1</Link></li>
  <li class="list-group-item">Page 2</li>
  <li class="list-group-item">Page 3</li>
</ul>

                </div>
                <div className="col-md-10">
                    {props.children}
                </div>
                <PostPreview/>
                <div className="col-md-10">
                    <button onClick={()=>setOldPost(!oldPost)}>Older Post</button>
                    {(oldPost ? (  <div className="content mx-auto" style={{width:"50%"}}>
                        <h2>Man must explore, and this is exploration at its greatest</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis aliquid debitis provident fuga magnam dolorum quia placeat sint incidunt, obcaecati possimus esse qui repellendus consequuntur quos suscipit rem exercitationem.</p>
                    </div>) : "") }
                </div>
            </div>
            

        </div>
    </div>
  )
}
