import { BoxRarity, CollectableRarity, CollectableType, TaskType, type Achievement, type Box, type Collectable, type Task } from "../types/types";

export const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Основы React',
    description: 'Пройдите небольшой тест по основам React',
    type: TaskType.QUIZ,
    reward: 100,
    isCompleted: false,
    question: 'Что возвращает React компонент?',
    options: [
      { id: '1', text: 'HTML строку', isCorrect: false },
      { id: '2', text: 'React элементы', isCorrect: true },
      { id: '3', text: 'DOM элементы', isCorrect: false },
      { id: '4', text: 'Ничего не возвращает', isCorrect: false }
    ]
  },
  {
    id: '2',
    title: 'Хуки в React',
    description: 'Тест по основным хукам React',
    type: TaskType.QUIZ,
    reward: 150,
    isCompleted: false,
    question: 'Какой хук используется для побочных эффектов?',
    options: [
      { id: '1', text: 'useState', isCorrect: false },
      { id: '2', text: 'useEffect', isCorrect: true },
      { id: '3', text: 'useContext', isCorrect: false },
      { id: '4', text: 'useReducer', isCorrect: false }
    ]
  },
  {
    id: '3',
    title: 'TypeScript основы',
    description: 'Проверьте свои знания TypeScript',
    type: TaskType.QUIZ,
    reward: 120,
    isCompleted: false,
    question: 'Как объявить тип для массива чисел в TypeScript?',
    options: [
      { id: '1', text: 'Array<number>', isCorrect: true },
      { id: '2', text: 'Number[]', isCorrect: true },
      { id: '3', text: 'Array number', isCorrect: false },
      { id: '4', text: 'List<number>', isCorrect: false }
    ]
  },
  {
    id: '4',
    title: 'Redux Toolkit',
    description: 'Изучите основы RTK',
    type: TaskType.THEORY,
    reward: 200,
    isCompleted: false,
    content: 'Redux Toolkit (RTK) - это официальный набор инструментов для эффективной разработки на Redux...'
  },
  {
    id: '5',
    title: 'Создание слайса',
    description: 'Практическое задание по созданию слайса',
    type: TaskType.PRACTICE,
    reward: 250,
    isCompleted: false,
    codeExample: '// Создайте слайс для управления пользователями'
  }
];

export const initialBoxes: Box[] = [
  {
    id: '1',
    name: 'Обычная коробка',
    price: 100,
    rarity: BoxRarity.COMMON,
    dropChances: {
      common: 70,
      rare: 25,
      epic: 4,
      legendary: 1
    }
  },
  {
    id: '2',
    name: 'Редкая коробка',
    price: 300,
    rarity: BoxRarity.RARE,
    dropChances: {
      common: 50,
      rare: 40,
      epic: 8,
      legendary: 2
    }
  },
  {
    id: '3',
    name: 'Эпическая коробка',
    price: 700,
    rarity: BoxRarity.EPIC,
    dropChances: {
      common: 30,
      rare: 45,
      epic: 20,
      legendary: 5
    }
  },
  {
    id: '4',
    name: 'Легендарная коробка',
    price: 1500,
    rarity: BoxRarity.LEGENDARY,
    dropChances: {
      common: 10,
      rare: 30,
      epic: 40,
      legendary: 20
    }
  }
];

export const initialCollectables: Collectable[] = [
  { id: 'coin-1', name: 'Бронзовая монета', description: 'Обычная монета', type: CollectableType.COIN, rarity: CollectableRarity.COMMON, image: '🪙', isCollected: false },
  { id: 'coin-2', name: 'Серебряная монета', description: 'Редкая монета', type: CollectableType.COIN, rarity: CollectableRarity.RARE, image: '💰', isCollected: false },
  { id: 'coin-3', name: 'Золотая монета', description: 'Эпическая монета', type: CollectableType.COIN, rarity: CollectableRarity.EPIC, image: '🏅', isCollected: false },
  { id: 'coin-4', name: 'Платиновая монета', description: 'Легендарная монета', type: CollectableType.COIN, rarity: CollectableRarity.LEGENDARY, image: '👑', isCollected: false },

  { id: 'badge-1', name: 'Новичок', description: 'Значок для начинающих', type: CollectableType.BADGE, rarity: CollectableRarity.COMMON, image: '🔰', isCollected: false },
  { id: 'badge-2', name: 'Эксперт React', description: 'Мастер React', type: CollectableType.BADGE, rarity: CollectableRarity.RARE, image: '⚛️', isCollected: false },
  { id: 'badge-3', name: 'Гуру TypeScript', description: 'Мастер TypeScript', type: CollectableType.BADGE, rarity: CollectableRarity.EPIC, image: '📘', isCollected: false },
  { id: 'badge-4', name: 'Архитектор Redux', description: 'Мастер Redux', type: CollectableType.BADGE, rarity: CollectableRarity.LEGENDARY, image: '🔄', isCollected: false },

  { id: 'sticker-1', name: 'Стикер React', description: 'Стикер с логотипом React', type: CollectableType.STICKER, rarity: CollectableRarity.COMMON, image: '⚛️', isCollected: false },
  { id: 'sticker-2', name: 'Стикер TypeScript', description: 'Стикер с логотипом TS', type: CollectableType.STICKER, rarity: CollectableRarity.RARE, image: '📘', isCollected: false },
  { id: 'sticker-3', name: 'Стикер Redux', description: 'Стикер с логотипом Redux', type: CollectableType.STICKER, rarity: CollectableRarity.EPIC, image: '🔄', isCollected: false },
  { id: 'sticker-4', name: 'Стикер Vite', description: 'Стикер с логотипом Vite', type: CollectableType.STICKER, rarity: CollectableRarity.LEGENDARY, image: '⚡', isCollected: false },

  { id: 'trophy-1', name: 'Бронзовый трофей', description: 'За первые успехи', type: CollectableType.TROPHY, rarity: CollectableRarity.COMMON, image: '🏆', isCollected: false },
  { id: 'trophy-2', name: 'Серебряный трофей', description: 'За серьезные достижения', type: CollectableType.TROPHY, rarity: CollectableRarity.RARE, image: '🥈', isCollected: false },
  { id: 'trophy-3', name: 'Золотой трофей', description: 'За мастерство', type: CollectableType.TROPHY, rarity: CollectableRarity.EPIC, image: '🥇', isCollected: false },
  { id: 'trophy-4', name: 'Платиновый трофей', description: 'Легендарное достижение', type: CollectableType.TROPHY, rarity: CollectableRarity.LEGENDARY, image: '🏅', isCollected: false }
];

export const initialAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Нумизмат',
    description: 'Соберите все монеты',
    requirement: { type: CollectableType.COIN, count: 4 },
    isUnlocked: false,
    reward: 1000,
    icon: '🪙'
  },
  {
    id: '2',
    title: 'Коллекционер значков',
    description: 'Соберите все значки',
    requirement: { type: CollectableType.BADGE, count: 4 },
    isUnlocked: false,
    reward: 1500,
    icon: '🔰'
  },
  {
    id: '3',
    title: 'Любитель стикеров',
    description: 'Соберите все стикеры',
    requirement: { type: CollectableType.STICKER, count: 4 },
    isUnlocked: false,
    reward: 1200,
    icon: '⚛️'
  },
  {
    id: '4',
    title: 'Чемпион',
    description: 'Соберите все трофеи',
    requirement: { type: CollectableType.TROPHY, count: 4 },
    isUnlocked: false,
    reward: 2000,
    icon: '🏆'
  },
  {
    id: '5',
    title: 'Мастер коллекций',
    description: 'Соберите по одному предмету каждого типа',
    requirement: { type: CollectableType.COIN, count: 1 }, // Это условие нужно будет пересмотреть
    isUnlocked: false,
    reward: 2500,
    icon: '👑'
  }
];

export const initialUserState = {
  balance: 500,
  openedBoxes: 0,
  completedTasks: 0,
  collectedItems: [] as Collectable[],
  achievements: initialAchievements.map(ach => ({ ...ach }))
}