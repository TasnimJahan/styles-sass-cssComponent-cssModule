import React from 'react';
import './Header.scss'

const Header = () => {
    return (
        <div>
            <div className="firstBox">
                <h1>I am First box</h1>
            </div>
            <div className="secondBox">
                <h1>I am 2nd box</h1>
            </div>
            <div className="thirdBox">
                <h1>I am 3rd box</h1>
            </div>
            <div className="fourthBox">
                <h1>I am Fourth box</h1>
            </div>
        </div>
    );
};

export default Header;