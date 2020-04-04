import React from 'react'

const Actions = () => {

    const updateField = () => {

    }
    const moveLeft = (e, currentFigure, field) => {
        if (e.keyCode !== 37 || !currentFigure) {
            return null
        }
        let canBeShifted = true;
        currentFigure.map(item => {
            if (!(item[0] - 1 >= 0) || field[item[1]][item[0] - 1] === 'fill') {
                canBeShifted = false;
            }
        })
        if (canBeShifted) {
            this.setState({
                currentFigure: this.state.currentFigure.map(item => [item[0] - 1, item[1]])
            })
            updateField()
        }
    }
}

export default Actions;