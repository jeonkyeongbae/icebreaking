'use client';
import { useState } from 'react';
import AppShell from '@/components/AppShell';
import Home from '@/components/Home';
import GameIntro from '@/components/GameIntro';
import BalanceGame from '@/components/BalanceGame';
import CrocodileGame from '@/components/CrocodileGame';
import RandomQuestionGame from '@/components/RandomQuestionGame';
import ChoseongGame from '@/components/ChoseongGame';
import { GameId } from '@/data/games';

export default function Page() { const [game,setGame]=useState<GameId|null>(null); const [started,setStarted]=useState(false); const [session,setSession]=useState(0); const select=(id:string)=>{setSession(value=>value+1);setGame(id as GameId);setStarted(false)}; const home=()=>{setSession(value=>value+1);setGame(null);setStarted(false)}; const back=()=>{setStarted(false)}; return <AppShell onHome={home} onBack={game?back:undefined} title={game?({balance:'밸런스 게임',crocodile:'악어 이빨 게임',random:'랜덤 질문',choseong:'초성게임'}[game]):undefined}>{!game?<Home onSelect={select}/>:!started?<GameIntro id={game} onStart={()=>setStarted(true)}/>:game==='balance'?<BalanceGame key={`balance-${session}`}/>:game==='crocodile'?<CrocodileGame key={`crocodile-${session}`}/>:game==='random'?<RandomQuestionGame key={`random-${session}`}/>:<ChoseongGame key={`choseong-${session}`}/>}</AppShell>; }
