import React from 'react'
import Next from '../Next/Next'
import './index.css'

const ResultArea = (props) => {
    const { gameOver, score, nextFigure, fieldWidth } = props
    return (
        <div className="aside">
            <div className="status">{gameOver ? 'Game over' : ''}</div>
            <div className="score">{score}</div>
            <Next figure={nextFigure} shift={fieldWidth / 3 - 2} />
        </div>
    )
}

export default ResultArea;