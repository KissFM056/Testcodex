import { useState } from 'react';
import { avatars, dresses, hairstyles } from './data/wardrobe';
import { challenges } from './data/challenges';
import { AvatarPreview } from './components/AvatarPreview';
import { ScorePanel } from './components/ScorePanel';
import { useGame } from './game/useGame';

export default function App() {
  const { avatar, dress, hair, challenge, result, selectAvatar, selectDress, selectHair, selectChallenge, evaluate, reset } = useGame();
  const [tab, setTab] = useState<'dress' | 'hair'>('dress');
  const items = tab === 'dress' ? dresses : hairstyles;
  return <div className="app">
    <header><a className="brand" href="./">dress up <em>faire.</em><span>ESTUDIO DE ESTILO</span></a><span className="edition">LA COLECCIÓN · 01</span></header>
    <main>
      <section className="intro"><span className="eyebrow">UN PEQUEÑO MUNDO DE POSIBILIDADES</span><h1>Tu imaginación.<br/><em>Tu pasarela.</em></h1><p>Elige tu musa, encuentra la combinación perfecta<br className="desktop"/> y dale vida a tu estilo.</p></section>
      <div className="studio">
        <section className="stage" aria-label="Vista previa del conjunto">
          <div className="stage-top"><span>EL VESTIDOR</span><span>✧</span></div>
          <div className="arch"><div className="sparkle one">✧</div><div className="sparkle two">✦</div>
            <AvatarPreview avatar={avatar} dress={dress} hair={hair} />
          </div>
          <div className="stage-bottom"><span>{avatar.name}<small>Tu musa de hoy</small></span><span className="pill">LOOK 01</span></div>
        </section>
        <section className="wardrobe" aria-label="Personaliza tu look">
          <div className="step"><span>01</span><h2>Elige tu musa</h2></div>
          <div className="muses">{avatars.map(a=><button key={a.id} className={`muse ${a.id===avatar.id?'selected':''}`} onClick={()=>selectAvatar(a)} aria-pressed={a.id===avatar.id}><span className="portrait" style={{background:a.skin}}><span>☺</span></span><strong>{a.name}</strong></button>)}</div>
          <div className="step second"><span>02</span><h2>Hazlo tuyo</h2></div>
          <div className="tabs" role="group" aria-label="Categoría"> <button aria-pressed={tab==='dress'} className={tab==='dress'?'active':''} onClick={()=>setTab('dress')}>Vestidos</button><button aria-pressed={tab==='hair'} className={tab==='hair'?'active':''} onClick={()=>setTab('hair')}>Peinados</button></div>
          <div className="items">{items.map((item,i)=><button key={item.id} className={`item ${(tab==='dress'?dress.id:hair.id)===item.id?'selected':''}`} aria-pressed={(tab==='dress'?dress.id:hair.id)===item.id} onClick={()=>tab==='dress'?selectDress(item):selectHair(item)}><span className="item-art" style={{color:item.color}}>{tab==='dress'?<svg viewBox="0 0 80 90" aria-hidden="true"><path d="M27 12 L35 18 L45 18 L53 12 L58 31 L51 40 L65 79 Q40 88 15 79 L29 40 L22 31Z" fill="currentColor"/><path d="M29 40 L51 40" stroke="#fff" strokeOpacity=".6" strokeWidth="2"/></svg>:<svg viewBox="0 0 80 90" aria-hidden="true"><ellipse cx="40" cy="45" rx="22" ry="27" fill="#eac2a3"/>{i===1&&<circle cx="40" cy="15" r="12" fill="currentColor"/>}<path d={i===0?'M17 44 Q10 5 40 10 Q72 4 64 48 L70 78 L53 76 L56 34 L43 25 Q29 43 17 44Z':i===1?'M18 43 Q10 11 40 12 Q70 11 62 43 L45 25Z':'M17 70 Q8 9 40 12 Q74 8 64 70 L54 70 L55 33 L44 25 Q30 42 25 40 L26 70Z'} fill="currentColor"/></svg>}</span><span>{item.name}</span></button>)}</div>
          <div className="challenge"><span className="flower">✿</span><div><span className="eyebrow">EL RETO DE HOY</span><label className="challenge-label" htmlFor="challenge">Elige un reto</label><select id="challenge" value={challenge.id} onChange={event=>selectChallenge(challenges.find(c=>c.id===event.target.value)!)}>{challenges.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select><p>{challenge.description}</p></div></div>
          <button className="evaluate" onClick={evaluate}>Evaluar mi look <span>↗</span></button>
          <ScorePanel result={result} challenge={challenge} />
          <button className="reset" onClick={reset}>Empezar de nuevo</button>
        </section>
      </div>
    </main><footer><span>HECHO PARA IMAGINAR</span><span>Sin reglas para crear. Mil formas de brillar. ✧</span></footer>
  </div>;
}
