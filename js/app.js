import storyOptions from "./story-data.js"

/*---------------------------- Variables (state) ----------------------------*/

let player = {}


/*------------------------ Cached Element References ------------------------*/

const storyEl = document.getElementById(`story-text`)
const optionBtnEl = document.getElementById(`option-btns`)

/*----------------------------- Event Listeners -----------------------------*/

// event listeners for button clicks & player state dependant actions here

/*-------------------------------- Functions --------------------------------*/

function startStory() {
player = {}
showStoryText(1)
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
    console.log(option)
    }
  })
}

function showOption(option) {
  return true
}

function selectOption(option) {

}

startStory()