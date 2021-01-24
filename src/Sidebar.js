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
            <a className="item">Character pickers</a>
            <a className="item">Syloti Nagri iOS Keyboard</a>
            <a className="item">Sylheti dictionary</a>
            <a className="item">Other projects</a>
        </nav>
    )
}

export default Sidebar;