import { test } from 'node:test';
import assert from 'node:assert/strict';
import { avatars, dresses, hairstyles } from '../src/data/wardrobe.ts';
import { challenges } from '../src/data/challenges.ts';
import { scoreOutfit } from '../src/game/scoring.ts';
test('romantic coordinated outfit wins the spring challenge', () => {
  assert.deepEqual(scoreOutfit(dresses[0], hairstyles[0]), { total: 100, theme: 60, harmony: 40 });
});
test('theme and harmony contribute independently', () => {
  assert.equal(scoreOutfit(dresses[0], hairstyles[1]).total, 75);
  assert.equal(scoreOutfit(dresses[1], hairstyles[1]).total, 70);
  assert.equal(scoreOutfit(dresses[1], hairstyles[2]).total, 45);
});
test('all 27 initial combinations produce valid scores', () => {
  let count = 0;
  for (const avatar of avatars) for (const dress of dresses) for (const hair of hairstyles) {
    assert.ok(avatar.id);
    const score = scoreOutfit(dress, hair);
    assert.ok(score.total >= 0 && score.total <= 100);
    assert.equal(score.total, score.theme + score.harmony);
    count++;
  }
  assert.equal(count, 27);
});
test('each challenge rewards its own style across all combinations', () => {
  for (const challenge of challenges) {
    for (const dress of dresses) for (const hair of hairstyles) {
      const score = scoreOutfit(dress, hair, challenge);
      assert.equal(score.theme, dress.style === challenge.style ? 60 : 30);
      assert.equal(score.harmony, dress.style === hair.style ? 40 : 15);
      assert.equal(score.total === 100, dress.style === challenge.style && hair.style === challenge.style);
    }
  }
});
