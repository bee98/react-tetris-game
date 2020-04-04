

// const finish = (gameOver, addGameOver) => {
//     window.clearInterval(this.state.interval)
//     addGameOver(gameOver);
// }

// const updateField = (field, rotate, stepCounter, currentFigure, addField, addRotate, addStepCouter) => {
//     let activeField = field.map(row => {
//         return row.map(cell => cell === 'active' ? '' : cell)
//     })
//     currentFigure.map(item => {
//         if (activeField[item[1]][item[0]] !== 'fill') {
//             activeField[item[1]][item[0]] = 'active'
//         } else {
//             finish()
//         }
//     })
//     addField(field)
//     addRotate(rotate)
//     addStepCouter(stepCounter)
// }


export const moveLeft = (e, currentFigure, field, addCurrentFigure, updateField) => {
    if (e.keyCode !== 37 || !currentFigure) {
        return null
    }
    let canBeShifted = true;
    currentFigure.map(item => {
        if (!(item[0] - 1 >= 0) || field[item[1]][item[0] - 1] === 'fill') {
            canBeShifted = false;
        }
        return canBeShifted
    })
    if (canBeShifted) {
        addCurrentFigure("left")
        updateField()
    }
}

export const moveRight = (e, fieldWidth, currentFigure, field, addCurrentFigure, updateField) => {
    if (e.keyCode !== 39 || !currentFigure) {
        return null
    }
    let canBeShifted = true;
    currentFigure.map(item => {
        if (!(item[0] + 1 < fieldWidth) || field[item[1]][item[0] + 1] === 'fill') {
            canBeShifted = false;
        }
        return canBeShifted
    })
    if (canBeShifted) {
        addCurrentFigure("right")
        updateField()
    }
}

export const rotate = (e, currentFigure, addRotate) => {
    if (e.keyCode !== 38 || !currentFigure) {
        return null
    }
    addRotate()
}

export const moveDown = (e, currentFigure, addSpeed, interval ,loop) => {
    if (e.keyCode !== 40 || !currentFigure) {
        return null
    }
    addSpeed()
    window.clearInterval(interval)
    loop()
}
