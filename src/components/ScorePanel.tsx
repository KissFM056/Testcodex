import type { Challenge, Score } from '../game/types';
export function ScorePanel({ result, challenge }: { result: Score | null; challenge: Challenge }) {
  return <div className="result" aria-live="polite" aria-atomic="true">
    {result ? <div className="score">
      <strong>✧ {result.total}/100</strong>
      <span>Tema: {result.theme}/60 · Armonía: {result.harmony}/40</span>
      <small>{result.total === 100 ? '¡Un conjunto de ensueño!' : challenge.advice}</small>
    </div> : <p className="hint">Cada combinación cuenta una historia. ¿Cuál es la tuya?</p>}
  </div>;
}
