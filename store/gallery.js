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
        { copy:'For longevity of the colony, they dug into the realm.', filePath: 'pipe' },
        { copy:'There was no law, no cadence. The chasms came quickly.', filePath: 'lake' },
        { copy:'Containing the breath of the realm was a fools errand.', filePath: 'fountain' },
        { copy:'They dreamed of colonization, dreamed of a grail to drink from. We knew little then.', filePath: 'well' },
        { copy:'The divide of the colony set in. They sought a way back through the stream.', filePath: 'divide' },
      ],
      iconNames: ['water-well', 'cards-diamond', 'glass-mug'],
      artifactPath: 'shakencolony'
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
          { copy:'Where the water dwindles, the curse overflows. ', filePath: 'flow' },
          { copy:'Pathways will present themselves, you can trust them. ', filePath: 'path' },
          { copy:'The fountain is the last gate out. Fall, and never leave Lierd.', filePath: 'fountain' },
      ],
      iconNames: ['alarm-light-outline', 'crown-outline', 'account-settings'],
      artifactPath: 'lierd'
  },
  {
      title: 'Fenced City',
      slug: 'fencedcity',
      subtitle:'The Contained Capitol',
      narrative:'Sprawling grids aligned. Populated by those who leave Lierd. We all arrive here one way or another.',
      imagesDirectory: 'fencedCity',
      titlePhoto: 'corner',
      photos: [
        { copy:'Towers emerge from the grid, all connected, all of the same tapestry.', filePath: 'corner' },
        { copy:'We on the ground are forgotten.', filePath: 'wall' },
        { copy:'Atop this realm are researchers observatories, studying the skies outside Lierd.', filePath: 'top' },
      ],
      iconNames: ['city-variant-outline', 'lock', 'fruit-grapes'],
      artifactPath: 'fencedcity'
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
        { copy:'Where the trees grow tumors, there are few options to retreat beyond here.', filePath: 'gnarl' },
        { copy:'Watch the roots too, they will mutate when willow witches are nearby.', filePath: 'knot' },
        { copy:`Etchings in the crawling ground-wood are horrid enchantments. `, filePath: 'etchings' },
        { copy:`You'll find no other Operators in this realm. Trust nothing.`, filePath: 'witch' },
      ],
      iconNames: ['tree-outline', 'sprout-outline', 'eye-circle'],
      artifactPath: 'willowwoods'
  },
  {
    title: 'Silent Shores',
    slug: 'silentshores',
    subtitle:'Temporary Waypoint',
    narrative:'A place between realms, where Operators can find temporary refuge in the stream. The shores are beyond the willow woods, just skirt the edge of the treeline.',
    imagesDirectory: 'silentShore',
    titlePhoto: 'tower',
    photos: [
      { copy:'A bastion for Operators. The realm is blanketed by wards. Witches dare not set foot beyond the trees.', filePath: 'wayside' },
      { copy:'Through the clearing in the woods is the shore, remain as long as you like under the protection of the tower.', filePath: 'shore' },
      { copy:`The only danger here is the tower, your curiosity to approach will grow as it shimmers in the distance.`, filePath: 'tower' },
      { copy:`At the tower's base are stone wards, do not disturb these as they keep the light about the realm.`, filePath: 'stones' },
      { copy:`If you find yourself gazing skyward, do your best to retreat to the dunes.`, filePath: 'skyward' },
      { copy:`Break line of sight with the tower and your curiosity will sate itself in time.`, filePath: 'rolling' },
      { copy:`In the event you do meddle with the tower the realm will destabilize, and the light will fade.`, filePath: 'destination' },
      { copy:`Darkness falls, the sounds here cease, the wards are deafened, and the witches seep from the trees.`, filePath: 'nightbreak' },
      { copy:`Trudge into the water as deep as you can manage. Hold your breath, or end up twisted.`, filePath: 'grave' },
    ],
    iconNames: ['candle', 'ferry', 'warehouse'],
    artifactPath: 'silentshores'
  },
  {
      title: 'Aggregate Lagoon',
      slug: 'aggregatelagoon',
      subtitle:'Bountiful Archeology',
      narrative:'A liminal realm missing the laws of the lords. The semiotics here are potent.',
      imagesDirectory: 'aggregateLagoon',
      titlePhoto: 'priest',
      photos: [
        { copy:`Realms like these are rare works of art. The rivers of the Crickstream funnel here.`, filePath: 'post' },
        { copy:`The artifacts here are permanent and irretrievable. Respect them and their meanings.`, filePath: 'gate' },
        { copy:`Meeting another Operator in this realm is unlikely, but delving into the Lagoon together is recommended.`, filePath: 'drive' },
        { copy:`Some artifacts here are yet to be interpreted. Do your best to form your own understanding of them.`, filePath: 'curl' },
        { copy:`The petrified denizens of the Lagoon are stoic but are known to reanimate and travel.`, filePath: 'cryptid' },
        { copy:`Stay cautious about these still beings, even those you are certain will remain so.`, filePath: 'gaze' },
        { copy:`Be observant of the gates and circles. They are chaotic thresholds.`, filePath: 'wheel' },
        { copy:`Some calcified souls hold mundane objects, clinging to their old ways.`, filePath: 'priest' },
        { copy:`Other statues communicate with each other through touch and mind.`, filePath: 'touch' },
        { copy:`Those who have been still for eons crumble away slowly.`, filePath: 'rubble' },
        { copy:`Gather your semiotics, then leave through the refacting pillar.`, filePath: 'pillar' },
      ],
      iconNames: ['brush', 'chart-bubble', 'heart'],
      artifactPath: 'aggregatelagoon'
  },
  {
      title: 'Inhabited Realm',
      slug: 'inhabitedrealm',
      subtitle:'Population 202',
      narrative:'Visiting hours between 1300 and 1700. MANDATORY: Leave before the last hour ends.',
      imagesDirectory: 'inhabited',
      titlePhoto: 'ghost',
      photos: [
        { copy:'During visitation, the population is docile. They live as mere memories.', filePath: 'ghost' },
        { copy:'Move beyond the caretakers, along the only road.', filePath: 'path' },
        { copy:'Avoid the homes on the hill, stay out of the headlights.', filePath: 'overlook' },
        { copy:`Atop the hill, you're safe. Seek the semiotics from this vantage.`, filePath: 'hill' },
        { copy:'The warehouse will be empty at 1500, pace your steps to arrive on time.', filePath: 'above' },
        { copy:'Beyond the lot is a derelict farmhouse, you will want to remain. Resist the urge.', filePath: 'farmhouse' },
        { copy:'In kind, the barn is filled with curiosity. Again, resist.', filePath: 'barn' },
        { copy:'The population will offer you transportation. Politely ignore their offers.', filePath: 'shortcut' },
        { copy:'Some of the population will observe you. Do not interact with these shades.', filePath: 'corner' },
        { copy:`If you reach the dam, you've traveled too far. Hurry back downstream.`, filePath: 'dam' },
        { copy:'At the end of the stream is a lake. Swimming is prohibited.', filePath: 'fog' },
        { copy:'Beyond the lake is the factory, your path home is inside. Talk to no-one.', filePath: 'factory' },
      ],
      iconNames: ['candle', 'ferry', 'warehouse'],
      artifactPath: 'inhabited'
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
        { copy:'If we could reach back, we would change everything. This is why they were lost, and we remain.', filePath: 'straightman' },
      ],
      iconNames: ['account-group', 'crown-outline', 'account-group'],
      artifactPath: 'council'
  },
  {
      title: 'Relic Garden',
      slug: 'relicgarden',
      subtitle:'Ruined Growth',
      narrative:'Documentation, record keeping. The woods before the witches. Consider the records here precious beyond all wealth.',
      imagesDirectory: 'oldBurrow',
      titlePhoto: 'pod',
      photos: [
        { copy:'Unusable fibers, long dried in the heat of the days lived.', filePath: 'rattle' },
        { copy:'An unflecked bit of life, resistant to the creeping curses.', filePath: 'dragonfly' },
        { copy:'A vibrant hue from the old realm. Wards off the witches.', filePath: 'droop' },
        { copy:'Structural growth, wrapped around the pearls which feed the lords of the Capitol.', filePath: 'pod' },
        { copy:'The hair on the cases of seeds can slow curses.', filePath: 'bean' },
        { copy:'This growth on the wind returns to Lierd, follow it when you wish to return.', filePath: 'puff' },
      ],
      iconNames: ['diamond-stone', 'leaf-off', 'chess-rook'],
      artifactPath: 'relic'
  },
  {
      title: 'Replacements',
      slug: 'replacements',
      subtitle:'Adv. Predictions',
      narrative:'Few Operators wield a key capable of accessing this realm. Here, there are semiotics beyond the understanding of the mundane.',
      imagesDirectory: 'trueGrid',
      titlePhoto: 'carridge',
      photos: [
        { copy:'Somewhere beyond the Fenced City are the lands of zealous achievers. Filled with equations and unfettered experiments.', filePath: 'labs' },
        { copy:'The lords have no need for growth beyond the capitol. We need what they waste.', filePath: 'carridge' },
        { copy:"The replacements, substitutions, and machinations in this realm are advanced but they are obvious in their meanings.", filePath: 'notice' },
        { copy:"The technology here reaches towards the skies, sending signals through the realm.", filePath: 'towers' },
        { copy:"There are stretches of land by the sea filled with buildings that duplicate across the shore.", filePath: 'same' },
        { copy:`The Replacement realm shifts by virtue of the technology scattered about.`, filePath: 'signal' },
        { copy:`Ground rises and swirls around the signal pillars. Don't get caught in the shifting soils.`, filePath: 'relocate' },
    ],
      iconNames: ['alert-octagon', 'parking', 'key'],
      artifactPath: 'predictions'
  },
  ]
})