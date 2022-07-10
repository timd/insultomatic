import { copyFileSync } from 'fs';
import prefixes from './pre_swears-2.json';
import suffixes from './suff_swears-2.json';

export function createInsult() {
  
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  const insult  = randomPrefix.pre + randomSuffix.suff;

  return { insult: insult };

}