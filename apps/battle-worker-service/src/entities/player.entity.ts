export interface Player {
  id: string; // Unique identifier (e.g., UUID)
  username: string;
  description: string;
  gold: number;
  silver: number;
  attack: number;
  defense: number;
  hitPoints: number;
  score: number; // For leaderboard
  wins: number;
  losses: number;
}
export class Player implements Player {
  id: string;
  username: string;
  description: string;
  gold: number;
  silver: number;
  attack: number;
  defense: number;
  hitPoints: number;
  score: number;
  wins: number;
  losses: number;

  constructor(
    id: string,
    username: string,
    description: string,
    gold: number,
    silver: number,
    attack: number,
    defense: number,
    hitPoints: number,
    score: number = 0,
    wins: number = 0,
    losses: number = 0
  ) {
    this.id = id;
    this.username = username;
    this.description = description;
    this.gold = gold;
    this.silver = silver;
    this.attack = attack;
    this.defense = defense;
    this.hitPoints = hitPoints;
    this.score = score;
    this.wins = wins;
    this.losses = losses;
  }
}