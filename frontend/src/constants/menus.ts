interface MenuType {
  id: number;
  label: string;
  path: string;
}

export const MENUS: MenuType[] = [
  {
    id: 0,
    label: 'Dashboard',
    path: '#'
  },
  {
    id: 1,
    label: 'Tasks',
    path: '#'
  },
  {
    id: 2,
    label: 'Badges',
    path: '/'
  },
  {
    id: 3,
    label: 'Leaderboard',
    path: '#'
  },
  {
    id: 4,
    label: 'Connections',
    path: '#'
  }
];
