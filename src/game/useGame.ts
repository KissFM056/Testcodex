import { useState } from 'react';
import { avatars, dresses, hairstyles } from '../data/wardrobe';
import { challenges } from '../data/challenges';
import { scoreOutfit } from './scoring';
import type { Avatar, Challenge, Item, Score } from './types';

export function useGame() {
  const [avatar, setAvatar] = useState(avatars[0]);
  const [dress, setDress] = useState(dresses[0]);
  const [hair, setHair] = useState(hairstyles[0]);
  const [challenge, setChallenge] = useState(challenges[0]);
  const [result, setResult] = useState<Score | null>(null);
  function selectAvatar(value: Avatar) { setAvatar(value); setResult(null); }
  function selectDress(value: Item) { setDress(value); setResult(null); }
  function selectHair(value: Item) { setHair(value); setResult(null); }
  function selectChallenge(value: Challenge) { setChallenge(value); setResult(null); }
  function reset() {
    setAvatar(avatars[0]); setDress(dresses[0]); setHair(hairstyles[0]);
    setChallenge(challenges[0]); setResult(null);
  }
  return { avatar, dress, hair, challenge, result, selectAvatar, selectDress, selectHair, selectChallenge,
    evaluate: () => setResult(scoreOutfit(dress, hair, challenge)), reset };
}
