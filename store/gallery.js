export const state = () => ({
   pages: [
    {
      title: 'Shaken Colony',
      slug: 'shakencolony',
      subtitle:'Foundation Realm',
      narrative:'The original operators tried terraforming the realms. Now we know better. Now we know the fools we were.',
      imagesDirectory: 'shakenColony',
      titlePhoto: 'triangle',
      photos: [
        { copy:'Operator 3 surveys the first realm.', filePath: 'site' },
        { copy:'What little the first realm offered, the original of us claimed.', filePath: 'mound' },
        { copy:'They found success in structure, though the land stayed stubborn.', filePath: 'expanse' },
        { copy:'Infrastructure took slowly, through toil and technology.', filePath: 'line' },
        { copy:'That which once remained in place shook apart in time.', filePath: 'triangle' },
        { copy:'For longevity of the conlony, they dug into the realm.', filePath: 'pipe' },
        { copy:'There was no law, no cadence. The chasms came quickly.', filePath: 'lake' },
        { copy:'Containing the breath of the realm was a fools errand.', filePath: 'fountain' },
        { copy:'They dreamed of colonization, dreamed of a grail to drink from. We knew little then.', filePath: 'well' },
        { copy:'The divide of the colony set in. They sought a way back through the stream.', filePath: 'divide' },
      ],
      iconNames: ['water-well', 'cards-diamond', 'glass-mug'],
      artifactPath: 'stage'
    },
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
          { copy:'The fate of those sunken into the pools is a petrifying curse.', filePath: 'curse' },
          { copy:'They follow the stream, into the river, into the falls. ', filePath: 'wilds' },
          { copy:'The fountain is the last gate out. Fall, and never leave Lierd.', filePath: 'fountain' },
      ],
      iconNames: ['alarm-light-outline', 'crown-outline', 'account-settings'],
      artifactPath: 'sphere'
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
      artifactPath: 'curve'
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
        { copy:'No matter what you hear in the woods, ignore it. The sounds are lies.', filePath: 'rituals' },
        { copy:'The growth will guide you away from the center of the woods.', filePath: 'moss' },
        { copy:'You\'ll find no other Operators in this realm. Trust nothing.', filePath: 'witch' },
        { copy:'While in the woods ignore the lights and songs you hear.', filePath: 'beyond' },
      ],
      iconNames: ['tree-outline', 'sprout-outline', 'eye-circle'],
      artifactPath: 'antenna'
  },
  {
      title: 'Councillors',
      slug: 'councillors',
      subtitle:'Those Few Remaining',
      narrative:'Those who have managed to transpose beyond the bounds of the contained capitol.',
      imagesDirectory: 'councillors',
      titlePhoto: 'coven',
      photos: [
        { copy:'A few of the first Operators formed their coven. We can never follow in their footsteps.', filePath: 'coven' },
        { copy:'There are few names known among the first Operators. Operator 10 is no exception.', filePath: 'operator10' },
        { copy:'If we could reach back, we would change everything. This is why they remain lost, and we remain now.', filePath: 'straightman' },
      ],
      iconNames: ['account-group', 'crown-outline', 'account-group'],
      artifactPath: 'melt'
  },

  {
      title: 'Relic Garden',
      slug: 'relicgarden',
      subtitle:'Ruined Growth',
      narrative:'Documentation, record keeping. The woods before the witches. Consider all records here a precious beyond all wealth.',
      imagesDirectory: 'oldBurrow',
      titlePhoto: 'pod',
      photos: [
          { copy:'Unusable fibers, long dried in the heat of the days lived.', filePath: 'rattle' },
        { copy:'Structural growth, wrapped around the pearls which feed the lords.', filePath: 'pod' },
        { copy:'The hair on the cases of seeds can slow curses.', filePath: 'bean' },
        { copy:'This growth on the wind returns to Lierd, follow it when you wish to visit the Capitol.', filePath: 'puff' },
      ],
      iconNames: ['diamond-stone', 'leaf-off', 'chess-rook'],
      artifactPath: 'section'
  },
  {
      title: 'Replacements',
      slug: 'replacements',
      subtitle:'Adv. Predictions',
      narrative:'',
      imagesDirectory: 'trueGrid',
      titlePhoto: 'carridge',
      photos: [
        { copy:'Beyond the Fenced City are the lands of zealous achievers. Filled with equations and unfetterd experiments.', filePath: 'labs' },
        { copy:'The lords have no need for growth beyond the capitol. We need what they waste.', filePath: 'carridge' },
        { copy:"The lords will not leave the Capitol, no matter the antagonist.", filePath: 'labs2' },
    ],
      iconNames: ['alert-octagon', 'parking', 'key'],
      artifactPath: 'formula'
  },
  ]
})