import storyOptions from "./story-data.js"

let playerState = {}

const storyEl = document.getElementById(`story-text`)
const optionBtnEl = document.getElementById(`option-btns`)
const optionImgEl = document.getElementById(`option-imgs`)
const audioBtnEl = document.getElementById(`audio-play`)
const backgroundAudio = new Audio(`../audio/background-sound.mp3`)

function startStory() {
playerState = {}
showStoryElements(1)
}

audioBtnEl.addEventListener('click', function(evt){
  backgroundAudio.volume = .1
  backgroundAudio.play()
})

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
  while (optionImgEl.firstChild) {
    optionImgEl.removeChild(optionImgEl.firstChild)
    }
  storyOption.img.forEach(link => {
      const image = document.createElement(`img`)
      image.classList.add(`img`)
      image.src = link.location
      optionImgEl.appendChild(image)
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