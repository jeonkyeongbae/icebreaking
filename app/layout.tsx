import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: '틈 | 아이스브레이킹 게임', description: '함께 웃고, 자연스럽게 대화를 시작하는 게임' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
