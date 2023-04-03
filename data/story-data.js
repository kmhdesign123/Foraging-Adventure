const storyOptions = [
  {
    part: 1,
    text:`You want to make a mushroom stwe for you and your friend today & need to go foraging for ingredients`,
    options: [
      {
        text: `Take the mossy forest path`
        setPlayer: { mossyPath: true },
        nextPart: 2
      },
      {
        text:'Take the path along the river today',
        setPlayer: {riverPath: true},
        nextPart: 3
      }
    ]
  },

  {
    part: 2,
    text:`The forest path is bright & there is a cool breeze between the trees, you come upon a grove with a fairy circle of various mushrooms! These could be enough to make your whole stew today!`,
    options: [
      {
        text:`Collect all of the mushrooms making up the fairy cicle & head home to make stew!`,
        setPlayer: {fairyMushrooms: true},
        nextPart: 4
      },
      {
        text:`Leave the fairy cicle mushrooms alone and keep looking`,
        nextPart: 5
      }
    ]
  },
  {
    part:3,
    text:`The path along the river doesnt seem to have many mushrooms so far but you vaugly remember seeing some the last time you went for a walk along the river`,
    options:[
      {
        text:`Keep going youa are pretty sure that ypu saw some mushrooms down this way`,
        setPlayer: {riverCont: true},
        nextPart: 6
      },
      {
        text:`turn back & take the mossy forest path instead`,
        setPlayer: {
          riverPath: false,
          mossyPath: true
        },
        nextPart: 2
      }
    ]
  },
  {
    part: 4,
    text:`You get home & start making your mushroom stew with your friend & it's almost done! your friend scoops a little bit onto a spoon to taste test it.`,
    options: [
      {
        text:`You also get a spoon to taste test it with your friend`,
        setPlayer: {atePoisionousMushroomStew: true},
        nextPart: 7
      },
      {
        text:`You keep stirring the stew proudly and wait to see how your friend likes it`,
        setPlayer: {friendAtePoisionousMushroomStew: true},
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
        setPlayer: {treeMushrooms = true},
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
        setPlayer: {riverSecondCont = true},
        nextPart: 10
      },
      {
        text:`Maybe I was wrong...Turn back and check the forest path.`,
        setPlayer: {
          riverPath: false,
          mossyPath: true
        },
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
        setPlayer: {playerIsAlive: false},
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
        setPlayer: {friendIsDead = true},
        nextPart: 1
      }
    ]
  },
  {
    part: 9,
    text: `You started making the mushroom stew & your friend says that it smells delicious & goes to taste test it.`,
    options: [
      {
        text:`Taste test it with your friend`
        setPlayer: {
          ateDeliciousMushroomStew = true,
          playerIsAlive = true
        }
        nextPart: 11
      }
    ]
  },
]