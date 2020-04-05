import React from 'react'
import Cell from '../Cell/Cell'

class Row extends React.Component{
  
   constructor(props){
      super(props);

      }  
  render()
   {
    return (
        <div className="row">
            {this.props.row.map((cell, i) =>
                <Cell key={i} cell={cell}/>
            )}
        </div>
    )
}
}

export default Row
