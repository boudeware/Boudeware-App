export const episodes = [
  { number: 1, title: 'Épisode 01', theme: "LET'S DANCE", duration: '30 min', youtube: 'https://youtu.be/X9_M-nknjzY' },
  { number: 2, title: 'Épisode 02', theme: "LET'S DANCE", duration: '30 min', youtube: 'https://youtu.be/rraAZOn--tI' },
  { number: 3, title: 'Épisode 03', theme: "LET'S DANCE", duration: '30 min', youtube: 'https://youtu.be/0Gv4AwJSZEg' },
  { number: 4, title: 'Épisode 04', theme: "LET'S DANCE", duration: '30 min', youtube: 'https://youtu.be/NxTVCRQLt1Y' },
  ...Array.from({ length: 9 }, (_, index) => ({ number: index + 5, title: `Épisode ${String(index + 5).padStart(2, '0')}`, theme: index < 1 ? "LET'S DANCE" : index < 5 ? "LET'S FLY" : "LET'S FIGHT", duration: '30 min' })),
];
