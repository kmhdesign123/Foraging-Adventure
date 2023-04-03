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
    text:`the path along the river doesnt seem to have many mushrooms so far but you vaugly remember seeing some the last time you went for a walk along the river`,
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
    
  }
]