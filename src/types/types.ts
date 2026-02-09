export const TaskType = {
    QUIZ: 'quiz',
    THEORY: 'theory',
    PRACTICE: 'practice'
} as const;

export type TaskType = typeof TaskType[keyof typeof TaskType];

export const BoxRarity = {
    COMMON: 'common',
    RARE: 'rare',
    EPIC: 'epic',
    LEGENDARY: 'legendary'
} as const;

export type BoxRarity = typeof BoxRarity[keyof typeof BoxRarity];

export const CollectableType = {
    COIN: 'coin',
    BADGE: 'badge',
    STICKER: 'sticker',
    TROPHY: 'trophy'
} as const;

export type CollectableType = typeof CollectableType[keyof typeof CollectableType];

export const CollectableRarity = {
  COMMON: 'common',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary'
} as const;

export type CollectableRarity = typeof CollectableRarity[keyof typeof CollectableRarity];

export interface QuizOption {
    id: string;
    text: string;
    isCorrect: boolean;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    type: TaskType;
    reward: number;
    isCompleted: boolean;
    question?: string;
    options?: QuizOption[];
    correctOptionId?: string;
    content?: string;
    codeExample?: string;
}

export interface Box {
    id: string;
    name: string;
    price: number;
    rarity: BoxRarity;
    dropChances: {
        common: number;
        rare: number;
        epic: number;
        legendary: number;
    };
};

export interface Collectable {
    id: string;
    name: string;
    description: string;
    type: CollectableType;
    rarity: CollectableRarity;
    image: string;
    isCollected: boolean;
}

export interface Achievement {
    id: string;
    name: string;
    description: string;
    requirement: {
        type: CollectableType;
        count: number
    };
    isUnlocked: boolean;
    reward: number;
    icon: string;
}

export interface UserState {
    balance: number;
    openedBoxes: number;
    completedTasks: number;
    achievements: Achievement[];
}