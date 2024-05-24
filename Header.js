import React from 'react';
import './index.css';
const Header = ({handleClick}) => {

    // handle URL change when button clicked
  return (
    <div className = "buttons">
        <button onClick = {() => handleClick(1)}>Users</button>
        <button onClick = {() => handleClick(2)}>Post</button>
        <button onClick = {() => handleClick(3)}>Comments</button>
    </div>
  )
}

export default Header;