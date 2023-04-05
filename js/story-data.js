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
        setPlayer: {poisionousMushrooms: true},
        nextPart: 4
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
    text:`You get home & start making your mushroom stew with your friend & it's almost done! Your friend scoops a little bit onto a spoon to taste test it.`,
    options: [
      {
        text:`You also get a spoon to taste test it with your friend`,
        nextPart: 7
      },
      {
        text:`You keep stirring the stew proudly and wait to see how your friend likes it`,
        nextPart: 8
      }
    ]
  },
  {
    part: 5,
    text:`You get deeper into the forest & come across a fallen log with mushrooms on the side of it & some growing on the ground next to it.`,
    options: [
      {
        text:`Pick the mushrooms and head back to startd on that stew!`,
        nextPart: 9
      }
    ]
  },
  {
    part: 6,
    text: `You have gone down the river path & still havent come across the spot you remember, but you KNOW you saw them.`,
    options: [
      {
        text:`Keep going you know that you'll find the mushrooms soon`,
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
    text:`You both start to feel nauseous and think it may have been a mistake to not double check that your mushrooms were edible & not poisionous`,
    options: [
      {
        text:`you both die from the mushroom stew, click here to start the story over.`,
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
        text:`Taste test it with your friend`,
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
    text: `You have been walkign the river path for a long time now but you finally see those mushroom you remembers, and now that you are exausted and hungry you pick them & head back to make stew & hope your friend forgives you for a late meal`,
    options: [
      {
        text:`Im pretty hungry now I think I'll just have one mushroom as a snack for my trip back`,
        nextPart: 13
      },
      {
        text: `I dont want to not have enough mushrooms for the stew so I'll wait to eat.`,
        nextPart: 4
      }
    ]
  },
  {
    part: 11,
    text: `You and your friend enjoy the soup and hangout all night sharing the mushroom soup, today was a good day!`,
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
    text: `You eat the mushroom & as you start to digest it you feel queasy & feverish. You have consumed a very poisonous mushroom!`,
    options: [
      {
        text:'Maybe you should be more carful next time about what mushrooms you pick for stew... Want to try again?',
        nextPart: 1
      }
    ]
  }
]

export default storyOptions