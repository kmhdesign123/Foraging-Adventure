const storyOptions = [
  {
    part: 1,
    text:`You want to make a mushroom stew for you and your friend today & need to go foraging for ingredients.`,
    options: [
      {
        text: `Take the mossy forest path.`,
        nextPart: 2
      },
      {
        text:'Take the path along the river today.',
        nextPart: 3
      }
    ]
  },

  {
    part: 2,
    text:`The forest path is bright & there is a cool breeze between the trees. You come up to a grove with a fairy circle of various mushrooms! These might be enough to make your whole stew!`,
    options: [
      {
        text:`Collect all of the mushrooms in the fairy cicle & head home to make stew!`,
        setPlayerState: {poisionousMushrooms: true},
        nextPart: 4
      },
      {
        text:`Collect all of the mushrooms in the fairy cicle & keep looking for more mushrooms!`,
        setPlayerState: {poisionousMushrooms: true},
        nextPart: 5,
      },
      {
        text:`Leave the fairy cicle mushrooms alone and keep looking.`,
        nextPart: 5
      }
    ]
  },
  {
    part:3,
    text:`The path along the river doesn't seem to have many mushrooms so far... but you vaugly remember seeing some the last time you went for a walk along the river.`,
    options:[
      {
        text:`Keep going, you are pretty sure that you saw some mushrooms down this way.`,
        nextPart: 6
      },
      {
        text:`Turn back & take the mossy forest path instead.`,
        nextPart: 2
      }
    ]
  },
  {
    part: 4,
    text:`You get home & start making mushroom stew for you and your friend. It's almost done! Your friend scoops a little bit onto a spoon to taste test it.`,
    options: [
      {
        text:`You also grab a spoon to taste test it with your friend.`,

        nextPart: 7
      },
      {
        text:`You keep stirring the stew proudly and wait to see how your friend likes it.`,
        nextPart: 8
      }
    ]
  },
  {
    part: 5,
    text:`You go deeper into the forest & come across a fallen log with mushrooms on the side of it & some other mushrooms growing on the ground next to it.`,
    options: [
      {
        text:`Pick the mushrooms and head back to start on that stew!`,
        nextPart: 9
      },
      {
        text:`You think you have enough mushrooms from the fairy circle, leave these for someone else or the next time you need mushrooms.`
        requiredPlayerState: (currentPlayerState) => currentPlayerState.poisionousMushrooms,
      }
    ]
  },
  {
    part: 6,
    text: `You have gone furthur down the river path & still haven't come across the spot you remember, but you KNOW you saw them last time.`,
    options: [
      {
        text:`Keep going because you just know that you'll find the mushrooms soon.`,
        nextPart: 10
      },
      {
        text:`Maybe I was wrong...Turn back and check the forest path.`,
        nextPart: 2
      }
    ]
  },
  {
    part: 7,
    text:`You both start to feel nauseous and think it may have been a mistake to not double check that your mushrooms were edible & not poisionous.`,
    options: [
      {
        text:`You both die from the mushroom stew... Click here to start the story over.`,
        nextPart: 1
      },
    ]
  },
  {
    part: 8,
    text:`Your friend starts to feel nauseous & asks you if you made sure the mushrooms were edible, your face drains of color as you realize you just poisoned your friend.`,
    options: [
      {
        text:`Your friend died from your mushroom stew... maybe click this to start over & make better choices next time.`,
        nextPart: 1
      }
    ]
  },
  {
    part: 9,
    text: `You started making the mushroom stew & your friend says that it smells delicious & goes to taste test it.`,
    options: [
      {
        text:`Taste test it with your friend.`,
        nextPart: 11
      },
      {
        text:`See how you friend likes it as you coninue stirring the stew.`,
        nextPart: 12
      }
    ]
  },
  {
    part:10,
    text: `You have been walking along the river path for a long time now but you finally see those mushrooms! Now that its dark and you are exausted & hungry you pick them and head back to make stew hoping your friend forgives you for the late meal.`,
    options: [
      {
        text:`I'm pretty hungry now I think I'll just have one mushroom as a snack for my trip back.`,
        nextPart: 13
      },
      {
        text: `I want to have enough mushrooms for the stew so I'll wait to eat.`,
        nextPart: 4
      }
    ]
  },
  {
    part: 11,
    text: `You and your friend enjoy the soup and hangout all night sharing stories, today was a good day!`,
    options: [
      {
        text: `Congrats on not poisoning yourself or your friend! Click here to restart the story.`,
        nextPart: 1
      }
    ]
  },
  {
    part: 12,
    text: `Your friend says that it tastes amazing & you both enjoy a great meal.`,
    options: [
      {
        text:`Congrats on making a delicious & not poisionous stew! Click here to restart the story.`,
        nextPart: 1
      }
    ]
  },
  {
    part: 13,
    text: `You eat the mushroom & as you start to digest it you feel queasy & feverish. You have just consumed a very poisonous mushroom!`,
    options: [
      {
        text:'Maybe you should be more carful next time about what kind of mushrooms you pick for stew... Want to try again?',
        nextPart: 1
      }
    ]
  }
]

export default storyOptions