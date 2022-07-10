import { copyFileSync } from 'fs';
import prefixes from './pre_insults.json';
import suffixes from './suff_insults.json';

export function createInsult() {
  
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  const insult  = randomPrefix.pre + randomSuffix.suff;

  return { insult: insult };

}