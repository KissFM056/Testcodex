import type { Avatar, Item } from '../game/types';

export function AvatarPreview({ avatar, dress, hair }: { avatar: Avatar; dress: Item; hair: Item }) {
  return (
            <svg key={avatar.id + dress.id + hair.id} className="avatar" viewBox="0 0 300 460" role="img" aria-label={`${avatar.name} con ${dress.name} y ${hair.name}`}>
              <ellipse cx="150" cy="440" rx="76" ry="10" fill="#49382d" opacity=".1"/>
              <path d="M129 335 L126 423 Q132 435 141 424 L149 335 M153 335 L159 424 Q169 435 175 423 L173 335" fill={avatar.skin}/>
              <path d="M124 420 Q132 426 142 420 L143 436 L119 436 Z M158 420 Q169 426 176 420 L182 436 L158 436 Z" fill="#463837"/>
              {hair.id === 'waves' && <path d="M103 81 Q78 135 96 204 L205 204 Q221 135 194 81 Z" fill={hair.color}/>}
              {hair.id === 'bob' && <path d="M101 84 Q80 121 98 168 L202 168 Q218 120 197 84Z" fill={hair.color}/>}
              {hair.id === 'bun' && <circle cx="150" cy="57" r="27" fill={hair.color}/>}
              <path d="M116 164 Q100 162 94 188 L74 262 Q75 274 84 269 L113 200 M183 164 Q201 162 207 188 L227 262 Q226 274 217 269 L188 200" fill={avatar.skin}/>
              <path d="M139 133 L137 164 Q150 177 164 164 L161 133" fill={avatar.skin}/>
              <ellipse cx="150" cy="108" rx="43" ry="48" fill={avatar.skin}/>
              <path d="M107 104 Q93 57 144 57 Q199 53 195 109 Q172 88 164 77 Q141 105 107 104" fill={hair.color}/>
              <path d="M123 111 Q128 108 133 111 M167 111 Q172 108 177 111" stroke="#49332d" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <path d="M141 131 Q150 138 159 131" stroke="#9b514b" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M116 160 L137 166 Q150 181 164 166 L184 160 L176 225 Q194 264 210 355 Q151 377 90 355 Q107 264 124 225Z" fill={dress.color}/>
              <path d="M124 225 Q150 233 176 225" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="5"/>
              <path d="M135 244 L120 348 M151 246 L151 356 M168 244 L186 348" stroke="#fff" strokeOpacity=".18" strokeWidth="3" fill="none"/>
              {dress.id === 'rose' && <g fill="#fbe0d8">{[120,145,171,190].map((x,i)=><g key={x} transform={`translate(${x},${300+i%2*29})`}><circle r="6"/><circle r="2" fill="#b85f7b"/></g>)}</g>}
              {dress.id === 'sun' && <path d="M118 187 L182 187 M106 311 L198 311 M101 328 L203 328" stroke="#f5d690" strokeWidth="3"/>}
            </svg>
  );
}
