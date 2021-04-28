import React from 'react'
import {faYoutube ,faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
function MenuItems({menuItem}){
    return (
        <div className="projects">
            {
                menuItem.map((item) =>{
                    return <div className="project" key = {item.id}>
                        <div className = "image-data">
                            <img src = {item.image} alt=""/>
                            <ul className="hover-items">
                                <li>
                                    <a href = {item.link2} target="_blank" className="icon-holder">
                                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                        {item.title}
                    </h5>
                    <p>{item.description}</p>    
                </div>
                })
            }
        </div>
    )
}
export default MenuItems;
//<Link className="icon-holder">
//                                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
//                                    </Link> 