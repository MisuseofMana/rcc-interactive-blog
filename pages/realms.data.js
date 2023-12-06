export const pages = [
	{
		semiotics: true,
		title: `Lost Colony`,
		artifacts: [
			{
				path: `bell`,
				title: `Chime`,
				description:`Created in the first realm as a signaling tool. Operators would use this as a dousing rod to search for semiotics before the discovery of attuning analog keys.`,
				description2:``,
				imageVertical: true,
			},
			{
				path: `wheel`,
				title: `Measuring Tool`,
				description:`In the old ways of the first operators, this tool was a survey wheel.`,
				description2:`By rolling it along the ground it would follow the track of the breath of the first realm.`,
				imageVertical: true,
			},
		],
	},
	{
		semiotics: true,
		title: `Lierd`,
		documents:[
			{ hint: true, copy:`Where Lierd begins, you'll find a home which no longer belongs to you`, filePath: `cabin` },
			{ copy:`Outside at the well you may wish to pay homage to those who have lost this home before you.`, filePath: `well` },
			{ copy:`We all leave Lierd, washed away by the ripples of the first curse.`, filePath: `sprawl` },
			{ hint: true, copy: `They mountains here may prevent passing, consult with them to continue on. `, filePath: `wilds` },
			{ copy:`The fate of those sunken into the pools is a petrifying curse.`, filePath: `curse` },
			{ hint: true, copy:`Where the water dwindles, the curse overflows. `, filePath: `flow` },
			{ copy:`Pathways will present themselves, you can trust them. `, filePath: `path` },
			{ hint: true, copy:`The fountain is the last gate out. Fall short, and you'll never leave Lierd.`, filePath: `fountain` },
		],
		artifacts: [
			{
				path: `curse`,
				title: `Malformed Operator`,
				description:`When the curse from Lierd infects living things, it twists them into their bleakest selves.`,
				description2:`The operator on the left is long vacant.`,
				imageVertical: false,
			},
			{
				path: `shell`,
				title: `Lierd Egg`,
				description:`The curse comes from an origin. It flows out from hardened shells. Investigation is ill advised.`,
				description2:`We know little of the origin, all who research these shells suffer some form of the curse.`,
				imageVertical: false,
			},
			{
				path: `moth`,
				title: `Lierd Moth`,
				description:`It is widely taken as conspiracy, though some think the moths of Lierd are the originators of the curse.`,
				description2:``,
				imageVertical: false,
			},
			{
				path: `font`,
				title: `Ruined Font`,
				description:`These fonts stood across the pilgrims path away from Lierd, They served as guides leading away from the first curse.`,
				description2:`Since then, they've crumbled in the winds of the barren realm.`,
				imageVertical: true,
			},
		],
	},
	{
		title: `Fenced City`,
		documents: [
			{ copy:`Towers emerge from the grid, all connected, all of the same tapestry.`, filePath: `corner` },
			{ copy:`We on the ground are forgotten.`, filePath: `wall` },
			{ copy:`Atop this realm are researchers observatories, studying the skies outside Lierd.`, filePath: `top` },
		],
		artifacts: [
			{
				path: `gate`,
				title: `Entrance to the Fenced City`,
				description:`The entrance to the city rotates around the outskirts by the instruction of the lords who remain.`,
				description2:`The cardinal direction of the gate changes every hour, on the hour.`,
				imageVertical: false,
			},
			{
				path: `archives`,
				title: `Fenced Library`,
				description:`In the contained capitol there are records of the history of the realms. Sadly, the capitol eschews Crickburrow's research.`,
				description2:`If Crickburrow could collaborate with the lords of the Fenced City, there would be limitless shared knowledge.`,
				imageVertical: false,
			},
			{
				path: `sculpting`,
				title: `Afflicted Gallery`,
				description:`A warning to those who would enter the capitol under affliction of the curse.`,
				description2:`This gallery showcases those who have been solidified.`,
				imageVertical: false,
			},
			{
				path: `statue`,
				title: `Petrified Operator`,
				description:`The Fenced City has a zero tolerance policy, any afflicted seeking refuge are turned away.`,
				description2:`Those who manage to sneak into the capitol are calcified by cursed growth.`,
				imageVertical: true,
			},
		],
	},
	{
		semiotics: true,
		title: `Willow Woods`,
		slug: `willow-woods`,
		subtitle:`Infested Forest`,
		narrative:`All woods, all forests, all groves. The trees have eyes.`,
		documents: [
			{ copy:`Beyond the capitol, past the rising rock is the pilgrims route.`, filePath: `vestal` },
			{ hint: true, copy:`No matter what you hear in the woods, ignore it. The sounds are lies.`, filePath: `rituals` },
			{ copy:`The growth will guide you away from the center of the woods.`, filePath: `moss` },
			{ hint: true, copy:`Where the trees grow tumors, there are few options to retreat beyond here.`, filePath: `gnarl` },
			{ hint: true, copy:`Watch the roots too, they will mutate when willow witches are nearby.`, filePath: `knot` },
			{ hint: true, copy:`Etchings in the crawling ground-wood are horrid enchantments. `, filePath: `etchings` },
			{ copy:`You'll find no other Operators in this realm. Trust nothing.`, filePath: `witch` },
		],
		iconNames: [`forest`, `sprout-outline`, `eye`],
		artifacts: [
			{
				path: `witchwood`,
				title: `Cursed Trees`,
				description:`Lierd spreads curses between realms quickly. The spread creeps across nature, claiming the leaves and vegetation.`,
				description2:``,
				imageVertical: true,
			},
			{
				path: `defense`,
				title: `Witch Ward`,
				description:`The malformed and curse infested have cultivated the curse. They've discovered it's whims.`,
				description2:`Be wary of cursed traps you may find in the Willow Woods.`,
				imageVertical: true,
			},
			{
				path: `seeds`,
				title: `Cursed Growth`,
				description:`Ancient vegetation, hardy and calcific. These pods grow through the cursed soil.`,
				description2:``,
				imageVertical: false,
			},    
			{
				path: `sealilly`,
				title: `Malformed Lilly`,
				description:`The depths of lakes and rivers do not fully protect life from the curse.`,
				description2:`Water diffuses the spread, but ultimately the curse gains purchase and twists indiscriminately.`,
				imageVertical: true,
			},
		],
		publishDate: `5/12/2021`,
		realmCode: `3745`
	},
	{
		semiotics: true,
		title: `Silent Shores`,
		slug: `silent-shores`,
		subtitle:`Temporary Waypoint`,
		narrative:`A place between realms, where Operators can find temporary refuge in the stream. The shores are beyond the willow woods, just skirt the edge of the treeline.`,
		documents: [
			{ copy: `A bastion for Operators. The realm is blanketed by wards. Witches dare not set foot beyond the trees.`, filePath: `wayside` },
			{ hint: true, copy: `Through the clearing in the woods is the shore, remain as long as you like under the protection of the tower.`, filePath: `shore` },
			{ copy: `The only danger here is the tower, your curiosity to approach will grow as it shimmers in the distance.`, filePath: `tower` },
			{ hint: true, copy: `At the tower's base are stone wards, do not disturb these as they keep the light about the realm.`, filePath: `stones` },
			{ copy: `If you find yourself gazing skyward, do your best to retreat to the dunes.`, filePath: `skyward` },
			{ hint: true, copy: `Break line of sight with the tower and your curiosity will sate itself in time.`, filePath: `rolling` },
			{ hint: true, copy: `In the event you do meddle with the tower the realm will destabilize, and the light will fade.`, filePath: `destination` },
			{ copy: `Darkness falls, the sounds here cease, the wards are deafened, and the witches seep from the trees.`, filePath: `nightbreak` },
			{ copy: `Trudge into the water as deep as you can manage. Hold your breath, or end up twisted.`, filePath: `grave` },
		],
		iconNames: [`moon-waxing-crescent`, `eye-circle`, `moon-waning-crescent` ],
		artifacts: [],
		publishDate: `4/12/2021`,
		realmCode: `620#`
	},
	{
		semiotics: true,
		title: `Aggregate Lagoon`,
		abbTitle: `Agg. Lagoon`,
		slug: `aggregate-lagoon`,
		subtitle:`Bountiful Archeology`,
		narrative:`A liminal realm missing the laws of the lords. The semiotics here are potent.`,
		documents: [
			{ copy:`Realms like these are rare works of art. The rivers of the Crickstream funnel here.`, filePath: `post` },
			{ copy:`The artifacts here are permanent and irretrievable. Respect them and their meanings.`, filePath: `gate` },
			{ copy:`Stay cautious about these still beings, even those you are certain will remain so.`, filePath: `gaze` },
			{ hint: true, copy:`Be observant of the gates and circles. They are chaotic thresholds.`, filePath: `wheel` },
			{ copy:`Some calcified souls hold mundane objects, clinging to their old ways.`, filePath: `priest` },
			{ copy:`Other statues communicate with each other through touch and mind.`, filePath: `touch` },
			{ copy:`Those who have been still for eons crumble away slowly.`, filePath: `rubble` },
			{ hint: true, copy:`Gather your semiotics, then leave through the refracting pillar.`, filePath: `pillar` },
		],
		iconNames: [`camera-iris`, `chart-bubble`, `heart`],
		artifacts: [],
		publishDate: `1/14/2022`,
		realmCode: `1897`
	},
	{
		semiotics: true,
		title: `Inhabited Realm`,
		documents: [
			{ hint: true, copy:`During visitation, the population is docile. They live as mere memories.`, filePath: `ghost` },
			{ copy:`Move beyond the caretakers, along the only road.`, filePath: `path` },
			{ copy:`Avoid the homes on the hill, stay out of the headlights.`, filePath: `overlook` },
			{ hint: true, copy:`Atop the hill, you're safe. Seek the semiotics from this vantage.`, filePath: `hill` },
			{ copy:`The warehouse will be empty at 1500, pace your steps to arrive on time.`, filePath: `above` },
			{ copy:`Beyond the lot is a derelict farmhouse, you will want to remain. Resist the urge.`, filePath: `farmhouse` },
			{ copy:`In kind, the barn is filled with curiosity. Again, resist.`, filePath: `barn` },
			{ copy:`The population will offer you transportation. Politely ignore their offers.`, filePath: `shortcut` },
			{ hint: true, copy:`Some of the population will observe you. Do not interact with these shades.`, filePath: `corner` },
			{ copy:`If you reach the dam you've traveled too far, quickly head back downstream.`, filePath: `dam` },
			{ hint: true, copy:`At the end of the stream is a lake. Swimming is prohibited.`, filePath: `fog` },
			{ copy:`Beyond the lake is the factory, your path home is inside. Talk to no-one.`, filePath: `factory` },
		],
		artifacts: [
			{
				path: `cabinet`,
				title: `Spindle Leg Cabinet`,
				description:`The beings in the Inhabited Realm seem human on the surface. Do not be fooled.`,
				description2:`They mimic the Operators, but fail to understand our semiotics.`,
				imageVertical: true,
			},
			{
				path: `drawers`,
				title: `Empty Drawers`,
				description:`More simulacrum from the population of the Inhabited Realm.`,
				description2:``,
				imageVertical: true,
			},
			{
				path: `cottage`,
				title: `Mocked Cottage`,
				description:`The beings in the Inhabited realm never die, but they do grow bored.`,
				description2:`They build structures from our past, and leave them abandoned.`,
				imageVertical: false,
			},
			{
				path: `artifact`,
				title: `Callous Carp`,
				description:`In the populated realm there are ways to survive for long lengths. The fish in the lake beyond the farmhouse are edible.`,
				description2:`They are not delicious.`,
				imageVertical: false,
			},
		],
	},
	{
		semiotics: false,
		title: `Councilors`,
		slug: `councilors`,
		subtitle:`Those Few Remaining`,
		narrative:`Those who have managed to transpose beyond the bounds of the contained capitol.`,
		documents: [
			{ copy:`A few of the first Operators formed their coven. We can never follow in their footsteps.`, filePath: `coven` },
			{ copy:`There are few names known among the first Operators. Operator 10 is no exception.`, filePath: `operator10` },
			{ copy:`If we could reach back, we would change everything. This is why they were lost, and we remain.`, filePath: `straightman` },
		],
		iconNames: [`account-group`, `crown-outline`, `account-group`],
		artifacts: [],
		publishDate: `4/21/2020`,
		realmCode: `87#4`
	},
	{
		semiotics: false,
		title: `Relic Garden`,
		documents: [
			{ copy:`Unusable fibers, long dried in the heat of the days lived.`, filePath: `rattle` },
			{ copy:`An unflecked bit of life, resistant to the creeping curses.`, filePath: `dragonfly` },
			{ copy:`A vibrant hue from the old realm. Wards off the witches.`, filePath: `droop` },
			{ copy:`Structural growth, wrapped around the pearls which feed the lords of the Capitol.`, filePath: `pod` },
			{ copy:`The hair on the cases of seeds can slow curses.`, filePath: `bean` },
			{ copy:`This growth on the wind returns to Lierd, follow it when you wish to return.`, filePath: `puff` },
		],
		artifacts: [
			{
				path: `pod`,
				title: `Old Growth`,
				description:`Fauna used to thrive in the relic gardens. Now the old growth is stubborn to cultivate due to the cursed soil.`,
				description2:``,
				imageVertical: false,
			},
    
			{
				path: `tangle`,
				title: `Skein`,
				description:`Operators who tended the Relic Garden used skein's like these to support the old growth.`,
				description2:``,
				imageVertical: false,
			},
			{
				path: `mushroom`,
				title: `Culprit Caps`,
				description:`Coveted in the Replacement Realm for alchemy, these fungi are a key ingredient to relieve the curse.`,
				description2:`These only grow under the shade of new growth in Lierd, as such only those who bear the affliction are able to forage for it.`,
				imageVertical: false,
			},
			{
				path: `tree`,
				title: `New Growth`,
				description:`Where the curse has left much of the old growth ravaged leading to the Capitol, there is new growth yet.`,
				description2:``,
				imageVertical: false,
			},
		],
	},
	{
		semiotics: true,
		title: `Replacements`,
		slug: `replacements`,
		subtitle:`Adv. Predictions`,
		narrative:`Few Operators wield a key capable of accessing this realm. Here, there are semiotics beyond the understanding of the mundane.`,
		documents: [
			{ copy:`Somewhere beyond the Fenced City are the lands of zealous achievers. Filled with equations and unfettered experiments.`, filePath: `labs` },
			{ hint: true, copy:`The lords have no need for growth beyond the capitol. We need what they waste.`, filePath: `carridge` },
			{ hint: true, copy:`The replacements, substitutions, and machinations in this realm are advanced but they are obvious in their meanings.`, filePath: `notice` },
			{ copy:`The technology here reaches towards the skies, sending signals through the realm.`, filePath: `towers` },
			{ hint: true, copy:`There are stretches of land by the sea filled with buildings that duplicate across the shore.`, filePath: `same` },
			{ copy:`The Replacement realm shifts by virtue of the technology scattered about.`, filePath: `signal` },
			{ copy:`Ground rises and swirls around the signal pillars. Don't get caught in the shifting soils.`, filePath: `relocate` },
			{ hint: true, copy:`There are terminals which often lead nowhere. Wait patiently.`, filePath: `terminal` },
			{ copy:`The signal pillars can be hijacked with the right equipment. Do not take the risk.`, filePath: `lagoon` },
		],
		iconNames: [`transmission-tower`, `parking`, `key`],
		artifacts: [
			{
				path: `perfumes`,
				title: `Starvation Tonics`,
				description:`Beyond the capitol, in the Replacement Realm there are alchemic cures to the affliction.`,
				description2:`These cures are likely to be your end without proper dosage and devout attention by the medically minded.`,
			},
		],
		publishDate: `2/26/2023`,
		realmCode: `5#25`
	},
	{
		semiotics: false,
		title: `Uplink`,
		clearanceNeeded: true,
		slug: `uplink`,
		abbTitle: `Redacted`,
		subtitle:`Trial Operators Denied`,
		narrative:`Please burn access device after reading.`,
		documents: [
			{ copy:`Unending roil.`, filePath: `roll` },
		],
		iconNames: [`alien-outline`, `radio-tower`, `boom-gate-alert`],
		artifacts: [],
		publishDate: `3/26/1993`,
		realmCode: `*43#`
	},
]