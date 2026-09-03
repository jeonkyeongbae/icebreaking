'use client';
import { RotateCcw } from 'lucide-react';
import { CSSProperties, useState } from 'react';

const lowerTeeth = [
  { left: 10, bottom: 17, rotate: -22, scale: .82 }, { left: 24, bottom: 7, rotate: -12, scale: .96 },
  { left: 39, bottom: 1, rotate: -3, scale: 1.08 }, { left: 55, bottom: 1, rotate: 3, scale: 1.08 },
  { left: 70, bottom: 7, rotate: 12, scale: .96 }, { left: 84, bottom: 17, rotate: 22, scale: .82 },
];
const upperTeeth = [
  { left: 14, top: 6, rotate: -22, scale: .72 }, { left: 29, top: 1, rotate: -10, scale: .8 },
  { left: 44, top: -2, rotate: -2, scale: .88 }, { left: 58, top: -2, rotate: 2, scale: .88 },
  { left: 73, top: 1, rotate: 10, scale: .8 }, { left: 86, top: 6, rotate: 22, scale: .72 },
];

function DecorativeTooth({ style }: { style: CSSProperties }) { return <span aria-hidden="true" className="croc-tooth croc-upper-tooth" style={style}/>; }
function LowerTooth({ index, pressed, onBite, tooth }: { index: number; pressed: boolean; onBite: () => void; tooth: typeof lowerTeeth[number] }) { return <button onClick={onBite} aria-label={`아래쪽 악어 이빨 ${index + 1}번`} className={`croc-tooth croc-lower-tooth ${pressed ? 'tooth-press pressed-tooth' : ''}`} style={{ left: `${tooth.left}%`, bottom: `${tooth.bottom}%`, transform: `translateX(-50%) rotate(${tooth.rotate}deg) scale(${tooth.scale})` }}><span className="sr-only">{pressed ? '눌림' : '누르기'}</span></button>; }

export default function CrocodileGame() {
  const [winner, setWinner] = useState(() => Math.floor(Math.random() * 6));
  const [pressed, setPressed] = useState<number[]>([]);
  const [closing, setClosing] = useState(false);
  const [lost, setLost] = useState(false);
  const bite = (index: number) => { if (closing || lost || pressed.includes(index)) return; setPressed([...pressed, index]); if (index === winner) { setClosing(true); window.setTimeout(() => setLost(true), 620); } };
  const reset = () => { setWinner(Math.floor(Math.random() * 6)); setPressed([]); setClosing(false); setLost(false); };
  return <main className={`mx-auto max-w-2xl px-4 pb-16 pt-8 sm:pt-10 ${lost ? 'shake' : ''}`}><div className="mb-5 text-center"><span className="text-sm font-black tracking-wide text-[#299a78]">CROCODILE DENTIST</span><h1 className="mt-1 text-2xl font-black sm:text-3xl">아래쪽 이빨을 하나씩 눌러보세요!</h1><p className="mt-2 text-sm font-medium text-[#78817e]">누가 악어를 깨울까요? 🐊</p></div><div className={`crocodile-card ${lost ? 'crocodile-lost' : ''}`}><div className={`crocodile-head ${closing ? 'mouth-shut' : ''}`}><div className="head-highlight"/><div className="eye eye-left"><i/></div><div className="eye eye-right"><i/></div><div className="nostril nostril-left"/><div className="nostril nostril-right"/><div className="cheek cheek-left"/><div className="cheek cheek-right"/><div className="croc-mouth"><div className="mouth-inner"><div className="tongue"/><div className="upper-teeth">{upperTeeth.map((tooth, i) => <DecorativeTooth key={i} style={{ left: `${tooth.left}%`, top: `${tooth.top}%`, transform: `translateX(-50%) rotate(${tooth.rotate}deg) scale(${tooth.scale})` }}/>)}</div><div className="lower-teeth">{lowerTeeth.map((tooth, i) => <LowerTooth key={i} index={i} tooth={tooth} pressed={pressed.includes(i)} onBite={() => bite(i)}/>)}</div></div><div className="lip-shine"/></div>{lost && <div className="win-overlay"><div className="text-center text-white"><div className="text-5xl">💥</div><h2 className="mt-2 text-4xl font-black">당첨!</h2><p className="mt-1 font-bold">악어가 깜짝 놀랐어요</p></div></div>}</div><p className="mt-4 text-center text-sm font-bold text-[#277e63]">아래쪽 이빨만 눌러주세요 · {pressed.length} / 6</p></div><div className="mt-6 text-center">{lost && <button onClick={reset} className="min-h-14 rounded-2xl bg-ink px-7 font-black text-white shadow-lg transition hover:scale-105"><RotateCcw size={18} className="mr-2 inline"/> 다시하기</button>}</div></main>;
}
