import React from 'react'
import ListItem from './ListItem';
import './index.css'
const Content = ({items}) => {
  
  return (
    
    <div className = 'table-container'>
        <table>
            <tbody>
                {items.map((item) => (
                    <ListItem key = {item.id} item = {item}></ListItem>
                    
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Content;