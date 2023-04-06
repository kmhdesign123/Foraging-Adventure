import storyOptions from "./story-data.js"

/*---------------------------- Variables (state) ----------------------------*/

let playerState = {}

/*------------------------ Cached Element References ------------------------*/

const storyEl = document.getElementById(`story-text`)
const optionBtnEl = document.getElementById(`option-btns`)

/*-------------------------------- Functions --------------------------------*/

function startStory() {
playerState = {}
showStoryElements(1)
}


function showStoryElements(storyOptionIndex) {
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
    button.addEventListener(`mouseover`, animation)
    optionBtnEl.appendChild(button)
    function animation(){
      button.classList.remove(`animate__animated`, `animate__pulse`)
      button.offsetHeight
      button.classList.add(`animate__animated`, `animate__pulse`) 
      }
    }
  })
}

function selectOption(option) {
const nextStoryOptionId = option.nextPart
playerState = Object.assign(playerState, option.setPlayerState)
showStoryElements(nextStoryOptionId)
}

function showOption(option) {
  return option.requiredPlayerState == null || option.requiredPlayerState(playerState)
}

startStory()