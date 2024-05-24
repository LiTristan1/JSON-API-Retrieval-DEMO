import React from 'react'
import './index.css';
import Cell from './Cell';
const ListItem = ({item}) => {
  return (
    <tr>
        {Object.entries(item).map(([key,value]) => {
            return(
                <Cell key = {key} cellData = {JSON.stringify(value)}></Cell>
            )
        })}
    </tr>
  )
}

export default ListItem