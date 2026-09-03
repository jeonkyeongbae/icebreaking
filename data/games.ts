export type GameId = 'balance' | 'crocodile' | 'random' | 'choseong';
export const games = [
  { id: 'balance' as GameId, title: '밸런스 게임', description: '둘 중 하나를 선택하고 서로의 이유를 이야기해보세요.', emoji: '⚖️', color: 'bg-[#ffe5d9]', accent: '#ff6f61' },
  { id: 'crocodile' as GameId, title: '악어 이빨 게임', description: '악어의 이빨을 하나씩 눌러보세요. 누군가는 걸립니다.', emoji: '🐊', color: 'bg-[#d8f8ec]', accent: '#32a982' },
  { id: 'random' as GameId, title: '랜덤 질문', description: '서로에 대해 알아갈 수 있는 질문을 하나씩 뽑아보세요.', emoji: '💬', color: 'bg-[#e9e4ff]', accent: '#7b61ff' },
  { id: 'choseong' as GameId, title: '초성게임', description: '초성만 보고 단어를 맞혀보세요. 아는 단어인데 왜 생각이 안 나지?', emoji: '🔤', color: 'bg-[#fff1bd]', accent: '#d99522' },
];
