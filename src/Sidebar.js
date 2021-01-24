import React from 'react';
import mecropped from './mecropped.jpg';
import './Sidebar.css';

function Sidebar() {
    return (
        <nav>
            <div id="image-cropping">
              <a href="/">
                  <img id="myimg" src={mecropped} alt="my face"/>
              </a>
            </div>
            <a className="item"  href="/sylotikeyboard">Syloti Nagri iOS Keyboard</a>
            <a className="item">Projects</a>
        </nav>
    )
}

export default Sidebar;