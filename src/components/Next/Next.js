import React from 'react'
import Cell from '../Cell/Cell'
import './Next.css'

function Next(props) {
    console.log("PROPS", props)
    const { figure } = props

    return <div className="next">
        {[...Array(4)].map((x, i) =>
            <div className="row" key={i}>
                {[...Array(4)].map((x, j) => {
                    let active = false;
                    if (figure.length) {
                        figure.map((item) => 
                            (item[0] === (j + props.shift) && item[1] === i) ? active = true : null
                            )
                    } 
                    return <Cell key={j} cell={active ? 'active' : ''}/>
                })}
            </div>
        )}
    </div>
}

export default Next
