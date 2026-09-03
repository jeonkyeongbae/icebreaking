'use client';
import { ArrowLeft, Home, Volume2, VolumeX } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';

export function AppShell({ children, onHome, onBack, title }: { children: ReactNode; onHome: () => void; onBack?: () => void; title?: string }) {
  const [sound, setSound] = useState(true);
  useEffect(() => { setSound(localStorage.getItem('ice-sound') !== 'off'); }, []);
  const toggle = () => { const next = !sound; setSound(next); localStorage.setItem('ice-sound', next ? 'on' : 'off'); };
  return <div className="min-h-screen bg-cream dot-grid"><header className="sticky top-0 z-20 border-b border-[#eee5d8]/80 bg-cream/90 backdrop-blur"><div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6"><div className="flex items-center gap-2"><button onClick={onHome} className="grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-white" aria-label="홈으로 가기"><Home size={19}/></button>{onBack && <button onClick={onBack} className="grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-white" aria-label="게임 선택으로 돌아가기"><ArrowLeft size={20}/></button>}<span className="font-black tracking-tight">틈 <span className="text-coral">·</span> 같이 놀자</span></div><div className="flex items-center gap-3">{title && <span className="hidden text-sm font-bold text-[#7c8490] sm:block">{title}</span>}<button onClick={toggle} aria-label={sound ? '효과음 끄기' : '효과음 켜기'} className="flex h-10 items-center gap-2 rounded-full bg-white px-3 text-sm font-bold shadow-sm"><span className="text-[#7c8490]">효과음</span>{sound ? <Volume2 size={17}/> : <VolumeX size={17}/>}</button></div></div></header>{children}</div>;
}

export function ShareButton({ text }: { text: string }) { const share = async () => { try { if (navigator.share) { await navigator.share({ title: '틈 - 아이스브레이킹', text, url: location.href }); return; } const value = `${text}\n${location.href}`; if (navigator.clipboard) await navigator.clipboard.writeText(value); else { const area = document.createElement('textarea'); area.value = value; area.style.position = 'fixed'; area.style.opacity = '0'; document.body.appendChild(area); area.focus(); area.select(); document.execCommand('copy'); area.remove(); } alert('질문과 링크를 클립보드에 복사했어요!'); } catch { /* 공유 취소 또는 브라우저 제한 */ } }; return <button onClick={share} className="rounded-2xl border-2 border-[#ebe4da] bg-white px-4 py-3 text-sm font-extrabold transition hover:border-ink" aria-label="현재 질문 공유하기">↗ 공유하기</button>; }

export default AppShell;
