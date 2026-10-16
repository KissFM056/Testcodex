import type { Challenge, Item, Score } from './types';
import { challenges } from '../data/challenges.ts';
export function scoreOutfit(dress: Item, hair: Item, challenge: Challenge = challenges[0]): Score {
  const theme = dress.style === challenge.style ? 60 : 30;
  const harmony = dress.style === hair.style ? 40 : 15;
  return { total: theme + harmony, theme, harmony };
}
