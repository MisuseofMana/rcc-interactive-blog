export const state = () => ({
   pages: [
    {
      title: 'Lierd',
      slug: 'lierd',
      subtitle:'Birthplace of Curses',
      narrative:'If not for Lierd, there would be no curses, and no place for curses to be absolved.',
      imagesDirectory: 'lierd',
      titlePhoto: 'cabin',
      photos:[
          { copy:"Where Lierd begins, you'll find a home which no longer belongs to you.", filePath: 'cabin' },
          { copy:'Outside at the well you may wish to pay homage to those who have lost this home before you.', filePath: 'well' },
          { copy:"We all leave Lierd, washed away by the ripples of the first curse.", filePath: 'sprawl' },
          { copy:'Those who remain are caught in the basin pools.', filePath: 'basin' },
          { copy:'They follow the stream, into the river, into the falls. ', filePath: 'wilds' },
          { copy:'The fountain is the last gate out. Fall, and never leave Lierd.', filePath: 'fountain' },
      ],
      iconNames: ['alarm-light-outline', 'crown-outline', 'account-settings'],
  },
  {
      title: 'Fenced City',
      slug: 'fencedcity',
      subtitle:'The Contained Capitol',
      narrative:'Sprawling grids aligned. Populated by those who leave Lierd. We all start here.',
      imagesDirectory: 'fencedCity',
      titlePhoto: 'corner',
      photos: [
        { copy:'Towers emerge from the grid, all connected, all of the same tapestry.', filePath: 'corner' },
        { copy:'We on the ground are forgotten.', filePath: 'wall' },
        { copy:'Atop this realm are researchers observatories, studying the skys outside Lierd.', filePath: 'top' },
      ],
      iconNames: ['city-variant-outline', 'lock', 'fruit-grapes'],
  },
  {
      title: 'Willow Woods',
      slug: 'willowwoods',
      subtitle:'Infested Forest',
      narrative:'All woods, all forests, all groves. The trees have eyes.',
      imagesDirectory: 'willowWoods',
      titlePhoto: 'vestal',
      photos: [
        { copy:'Beyond the capitol, past the rising rock is the pilgrims route.', filePath: 'vestal' },
        { copy:'No matter what you hear, do not look, the songs will lie to you.', filePath: 'rituals' },
        { copy:'The growth will guide you away from the center of the woods.', filePath: 'moss' },
        { copy:'While in the woods ignore the lights and songs you hear.', filePath: 'beyond' },
      ],
      iconNames: ['tree-outline', 'sprout-outline', 'eye-circle'],
  },
  {
      title: 'Councillors',
      slug: 'councillors',
      subtitle:'Those Few Remaining',
      narrative:'Those who have managed to transpose beyond the bounds of the contained capitol.',
      imagesDirectory: 'councillors',
      titlePhoto: 'oracle',
      photos: [
        { copy:'The realms beyond acknowledge many lords. The oracle knows all who pass beyond the capitol.', filePath: 'oracle' },
      ],
      iconNames: ['account-group', 'crown-outline', 'account-group'],
  },
  {
      title: 'Relic Garden',
      slug: 'relicgarden',
      subtitle:'Ruined Growth',
      narrative:'Documentation, record keeping. The woods before the witches. Consider all images within a commodity far beyond wealth.',
      imagesDirectory: 'oldBurrow',
      titlePhoto: 'pod',
      photos: [
          { copy:'Unusable fibers, long dried in the heat of the days now lived.', filePath: 'rattle' },
        { copy:'Structural growth, wrapped around the pearls which feed the lords.', filePath: 'pod' },
        { copy:'The hair on the cases of seeds can slow curses.', filePath: 'bean' },
        { copy:'This growth on the wind returns to Lierd, follow it when you wish to visit the Capitol.', filePath: 'puff' },
      ],
      iconNames: ['diamond-stone', 'leaf-off', 'chess-rook'],
  },
  {
      title: 'Replacements',
      slug: 'replacements',
      subtitle:'Adv. Predictions',
      narrative:'',
      imagesDirectory: 'trueGrid',
      titlePhoto: 'carridge',
      photos: [
        { copy:'Beyond the lords are the lands of men. Filled with equations and unfetterd experiments.', filePath: 'labs' },
        { copy:'The lords have no need for growth beyond the capitol. Men need more.', filePath: 'carridge' },
        { copy:"The lords will not leave the Capitol, no matter the antagonist.", filePath: 'labs2' },
    ],
      iconNames: ['alert-octagon', 'parking', 'key'],
  },
  ]
})