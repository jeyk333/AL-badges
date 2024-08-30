const BADGES: BadgeType[] = [
  {
    id: 0,
    title: 'Discord OG',
    power: 1.15,
    points: 0,
    reward: 'Discord OG to ETH?USDC',
    action: 0,
    image: '/discord-og.png',
    isMine: true
  },
  {
    id: 1,
    title: 'Liquidity Machine',
    power: 1.15,
    points: 0,
    reward: 'Liquidity Provision to ETH?USDC',
    action: 3,
    image: '/liquidity-machine.png',
    isMine: true
  },
  {
    id: 2,
    title: 'Income Engineer',
    power: 2,
    points: 0,
    reward: 'Income Engineer to ETH?USDC',
    action: 3,
    image: '/income-engineer.png',
    isMine: false
  },
  {
    id: 3,
    title: 'Pudgy OG',
    power: 0,
    points: 200,
    reward: 'Pudgy OG to ETH?USDC',
    action: 0,
    image: '/pudgy-og.png',
    isMine: false
  },
  {
    id: 4,
    title: 'Pathfinder OG',
    power: 1.15,
    points: 0,
    reward: 'Pathfinder OG to ETH?USDC',
    action: 0,
    image: '/pathfinder-og.png',
    isMine: false
  },
  {
    id: 5,
    title: 'Rookie Badge',
    power: 0,
    points: 150,
    reward: 'Rookie Badge to ETH?USDC',
    action: 1,
    image: '/rookie-badge.png',
    isMine: false
  },
  {
    id: 6,
    title: 'Check Badge',
    power: 1.15,
    points: 0,
    reward: 'Check Badge to ETH?USDC',
    action: 0,
    image: '/check-badge.png',
    isMine: false
  },
  {
    id: 7,
    title: 'Q Badge',
    power: 1.15,
    points: 0,
    reward: 'Q Badge to ETH?USDC',
    action: 0,
    image: '/q-badge.png',
    isMine: false
  },
  {
    id: 8,
    title: 'Thunder Badge',
    power: 1.15,
    points: 0,
    reward: 'Thunder Badge to ETH?USDC',
    action: 0,
    image: '/thunder-badge.png',
    isMine: false
  },
  {
    id: 9,
    title: 'Chrome Badge',
    power: 1.15,
    points: 0,
    reward: 'Chrome Badge to ETH?USDC',
    action: 0,
    image: '/chrome-badge.png',
    isMine: false
  }
];

const ACTIONS: ActionType[] = [
  {
    id: 0,
    label: 'Provide at least $50 Liquidity to USDT/ETH',
    completed: true
  },
  {
    id: 1,
    label: 'Provide at least $50 Liquidity to LINK/ETH',
    completed: false
  },
  {
    id: 2,
    label: 'Provide at least $100 Liquidity to WBTC/ETH',
    completed: false
  }
];

const COMMUNITY_SLIDER_SETTINGS = {
  className: 'slider variable-width',
  slidesToShow: 7,
  swipeToSlide: true,
  arrows: false,
  infinite: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const BADGES_SLIDER_SETTINGS = {
  centerMode: true,
  initialSlide: 1,
  infinite: true,
  swipeToSlide: true,
  slidesToShow: 7,
  speed: 500,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5
      }
    },
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

//Types
interface BadgeType {
  id: number;
  title: string;
  power: number;
  points: number;
  reward: string;
  action: number;
  image: string;
  isMine: boolean;
}

interface ActionType {
  id: number;
  label: string;
  completed: boolean;
}

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  currentSlide?: number;
  slideCount?: number;
}

export { BADGES, ACTIONS, BADGES_SLIDER_SETTINGS, COMMUNITY_SLIDER_SETTINGS };
export type { BadgeType, ActionType, CustomArrowProps };
