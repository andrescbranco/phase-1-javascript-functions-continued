// code your solution here
function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (argument = 'go to the office') {
    return `This Monday, I will ${argument}.`
}

function wrapAdjective (flair = '*') {
    return function (string) {
        return`You are ${flair}${string}${flair}!`
    }
}

