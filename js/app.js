import storyOptions from "./story-data.js"

/*---------------------------- Variables (state) ----------------------------*/

let playerState = {}

/*------------------------ Cached Element References ------------------------*/

const storyEl = document.getElementById(`story-text`)
const optionBtnEl = document.getElementById(`option-btns`)

/*-------------------------------- Functions --------------------------------*/

function startStory() {
playerState = {}
showStoryText(1)
}
optionBtnEl.addEventListener(`click`, animation)

function animation(){
optionBtnEl.classList.remove(`animate__animated`, `animate__bounce`)
optionBtnEl.offsetHeight
optionBtnEl.classList.add(`animate__animated`, `animate__bounce`)
}

function showStoryText(storyOptionIndex) {
  const storyOption = storyOptions.find(storyOption => storyOption.part === storyOptionIndex)
  storyEl.innerText = storyOption.text
  while (optionBtnEl.firstChild) {
  optionBtnEl.removeChild(optionBtnEl.firstChild)
  }
  storyOption.options.forEach(option => {
    if (showOption(option)) {
    const button = document.createElement(`button`)
    button.innerText = option.text
    button.classList.add('btn')
    button.addEventListener(`click`, () => selectOption(option))
    optionBtnEl.appendChild(button)
    }
  })
}


function selectOption(option) {
const nextStoryOptionId = option.nextPart
playerState = Object.assign(playerState, option.setPlayerState)
showStoryText(nextStoryOptionId)
}

function showOption(option) {
  return option.requiredPlayerState == null || option.requiredPlayerState(playerState)
}

startStory()