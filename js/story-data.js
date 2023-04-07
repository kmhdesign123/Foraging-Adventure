const storyOptions = [
  {
    part: 1,
    text:`You want to make a mushroom stew for you and your friend today & need to go foraging for ingredients.`,
    img: [
      {
        location:`./img/forest-path.jpg`
      },
      {
        location:`./img/river-path.jpg`
      }
    ],
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
    img: [
      {
        location:`./img/fairy-circle.jpg`
      }
    ],
    options: [
      {
        text:`Collect all the mushrooms in the fairy circle & head home!`,
        setPlayerState: {poisionousMushrooms: true},
        nextPart: 4
      },
      {
        text:`Collect all the mushrooms in the fairy circle & keep looking!`,
        setPlayerState: {poisionousMushrooms: true},
        nextPart: 5,
      },
      {
        text:`Leave the fairy circle mushrooms alone & keep looking.`,
        setPlayerState: {edibleMushrooms: true},
        nextPart: 5
      }
    ]
  },
  {
    part:3,
    text:`The path along the river doesn't seem to have many mushrooms so far, but you vaguely remember seeing some the last time you went for a walk along the river.`,
    img: [
      {
        location:`./img/river-path.jpg`
      }
    ],
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
    text:`You get home & start making mushroom stew for you and your friend. Your friend scoops a little bit onto a spoon to taste-test it.`,
    img: [
      {
        location:`./img/cottage.jpg`
      }
    ],
    options: [
      {
        text:`You also grab a spoon to taste-test it with your friend.`,
        requiredPlayerState: (currentPlayerState) => currentPlayerState.poisionousMushrooms,
        nextPart: 7
      },
      {
        text:`You keep stirring the stew proudly and wait to see how your friend likes it.`,
        requiredPlayerState: (currentPlayerState) => currentPlayerState.poisionousMushrooms,
        nextPart: 8
      },
      {
        text:`You keep stirring the stew proudly and wait to see how your friend likes it.`,
        requiredPlayerState: (currentPlayerState) => !currentPlayerState.poisionousMushrooms,
        nextPart: 10
      }
    ]
  },
  {
    part: 5,
    text:`You go deeper into the forest & come across a fallen log with mushrooms on the side of it & some other mushrooms growing on the ground next to it.`,
    img: [
      {
        location:`./img/forest-mushrooms.jpg`
      }
    ],
    options: [
      {
        text:`Pick the mushrooms and head back to start on that stew!`,
        setPlayerState: {edibleMushrooms: true},
        nextPart: 4
      },
      {
        text:`Leave these for the next time you need mushrooms. You head back to start on that stew!`,
        requiredPlayerState: (currentPlayerState) => currentPlayerState.poisionousMushrooms,
        nextPart: 4
      }
    ]
  },
  {
    part: 6,
    text: `You have gone further down the river path & still haven't come across the spot you remember, but you KNOW you saw them last time.`,
    img: [
      {
        location:`./img/river-path.jpg`
      }
    ],
    options: [
      {
        text:`Keep going because you just know that you'll find the mushrooms soon.`,
        nextPart: 9
      },
      {
        text:`Maybe I was wrong...Turn back and check the forest path.`,
        nextPart: 2
      }
    ]
  },
  {
    part: 7,
    text:`You both start to feel nauseous and think it may have been a mistake not double checking that your mushrooms were edible.`,
    img: [
      {
        location:`./img/you-died.jpg`
      }
    ],
    options: [
      {
        text:`You both die from the mushroom stew. Click here to start the story over.`,
        nextPart: 1
      },
    ]
  },
  {
    part: 8,
    text:`Your friend starts to feel nauseous & asks you if you made sure the mushrooms were edible. Your face drains of color as you realize you just poisoned your friend.`,
    img: [
      {
        location:`./img/you-died.jpg`
      }
    ],
    options: [
      {
        text:`Your friend died from your mushroom stew. Maybe click this to start over & make better choices next time.`,
        nextPart: 1
      }
    ]
  },
  {
    part:9,
    text: `You have been walking along the river path for a long time now. You finally see those mushrooms! Now that it's dark and you are exhausted & hungry you pick them and head back to make stew hoping your friend forgives you for the late meal.`,
    img: [
      {
        location:`./img/river-mushroom.jpg`
      }
    ],
    options: [
      {
        text:`You are pretty hungry now. You'll  have one mushroom as a snack for your trip back.`,
        nextPart: 11
      },
      {
        text: `You want to have enough mushrooms for the stew so you'll wait to eat.`,
        setPlayerState: {poisionousMushrooms: true},
        nextPart: 4
      }
    ]
  },
  {
    part: 10,
    text: `You and your friend enjoy the soup and hangout all night sharing stories.`,
    img: [
      {
        location:`./img/cottage.jpg`
      }
    ],
    options: [
      {
        text: `Congrats on not poisoning yourself or your friend! Click here to restart the story.`,
        nextPart: 1
      }
    ]
  },
  {
    part: 11,
    text: `You eat the mushroom & as you start to digest you feel queasy & feverish. You have just consumed a very poisonous mushroom!`,
    img:[
      {
        location:`./img/you-died.jpg`
      }
    ],
    options: [
      {
        text:'Maybe you should be more careful about what kind of mushrooms you pick. Want to try again?',
        nextPart: 1
      }
    ]
  }
]

export default storyOptions