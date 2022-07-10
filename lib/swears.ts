export function createInsult() {

  const prefixArray = [
    'cum',    'snot',   'spit',   'jizz',  'piss',
    'puke',   'spunk',  'fart',   'shit',  'crap',
    'poop',   'poo',    'turd',   'butt',  'ass',
    'bum',    'dick',   'cock',   'twat',  'knob',
    'pecker', 'prick',  'pussy',  'tit',   'fuck',
    'wank',   'dumb',   'lame',
    'douche', 'jerk',  'dork',
    'creep',  'dip', 'geek',  'slut',
    'whore',  'bitch',  'lard',   'scum',  'slime',
    'dirt',   'skeeze', 'sleaze', 'dog',   'monkey',
    'rat',    'weasel', 'bird', 'lib',
    'right',  'soy',    'trump',  'stink', 'bastard',
    'donkey', 'moron',  'idiot',  'loser', 'harpy',
  ];

  const suffixArray = [
    'wad',     'bag',     'bucket', 'sack',    'ball',
    'splash',  'pot',     'pile',   'weasel',  'monkey',
    'dog',     'rat',     'bird',   'goblin',  'puffin',
    'licker',  'muncher', 'fucker', 'sucker',  'lord',
    'clown',   'slut',    'pirate', 'bro',     'nazi',
    'whore',   'boy',     'boi',    'burglar', 'bandit',
    'bitch',   'waffle',  'burger', 'cake',    'nugget',
    'rag',     'nozzle',  'stain',  'wagon',   'weed',
    'hat',     'canoe',   'boat',   'stick',   'socket',
    'trumpet', 'mitten',  'twat',   'dick',    'cunt',
    'ass',     'cock',    'balls',  'face',    'head',
    'nuts',    'brain',   'brains', 'knuckle', 'mouth',
    'nose',    'skull',   'tard',   'oid',     'ster',
    'azoid',   'let',     'fuck',   'shit',    'fart',
    'wit',     'lib',     'breath'
  ];

  const randomPrefix = prefixArray[Math.floor(Math.random() * prefixArray.length)];
  const randomSuffix = suffixArray[Math.floor(Math.random() * suffixArray.length)];

  const insult  = randomPrefix + randomSuffix;

  return { insult: insult };

}