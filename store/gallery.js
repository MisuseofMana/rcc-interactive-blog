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
          { copy:'Some Snippet', filePath: 'basin' },
          { copy:'Some Snippet', filePath: 'wilds' },
          { copy:'Some Snippet', filePath: 'fountain' },
      ],
      iconNames: ['alarm-light-outline', 'crown-outline', 'account-settings'],
  },
  {
      title: 'Fenced City',
      slug: 'fencedcity',
      subtitle:'The Contained Capitol',
      narrative:'Sprawling grids aligned. None may leave. None may enter. We are all left here.',
      imagesDirectory: 'fencedCity',
      titlePhoto: '2',
      photoSnippet:[
          'Snippet Number 1',
          'Another Snippet',
          'A Third Snippet'
      ],
      iconNames: ['city-variant-outline', 'lock', 'fruit-grapes'],
  },
  {
      title: 'Willow Woods',
      slug: 'willowwoods',
      subtitle:'Witch Infested Forest',
      narrative:'All woods, all forests, all groves. The trees have eyes.',
      imagesDirectory: 'willowWoods',
      titlePhoto: '1',
      photoSnippet:[
          'Snippet Number 1',
          'Another Snippet',
          'A Third Snippet'
      ],
      iconNames: ['tree-outline', 'sprout-outline', 'eye-circle'],
  },
  {
      title: 'Councillors',
      slug: 'councillors',
      subtitle:'Those Few Remaining',
      narrative:'Those who have managed to transpose beyond the bounds of the contained capitol.',
      imagesDirectory: 'councillors',
      titlePhoto: '1',
      photoSnippet:[
          'Snippet Number 1',
          'Another Snippet',
          'A Third Snippet'
      ],
      iconNames: ['account-group', 'crown-outline', 'account-group'],
  },
  {
      title: 'Relic Garden',
      slug: 'relicgarden',
      subtitle:'Ruined Growth',
      narrative:'Documentation, record keeping. The woods before the witches. Consider all images within a commodity far beyond wealth.',
      imagesDirectory: 'oldBurrow',
      titlePhoto: '4',
      photoSnippet:[
          'Snippet Number 1',
          'Another Snippet',
          'A Third Snippet'
      ],
      iconNames: ['diamond-stone', 'leaf-off', 'chess-rook'],
  },
  {
      title: 'Replacements',
      slug: 'replacements',
      subtitle:'Advanced Predictions',
      narrative:'',
      imagesDirectory: 'trueGrid',
      titlePhoto: '3',
      photoSnippet:[
          'Snippet Number 1',
          'Another Snippet',
          'A Third Snippet'
      ],
      iconNames: ['alert-octagon', 'parking', 'key'],
  },
  ]
})