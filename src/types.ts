export interface Character {
  id: string;
  name: string;
  poem: string;
  analysis: string;
}

export interface Option {
  text: string;
  maleIds: string[];
  femaleIds: string[];
}

export interface Question {
  id: number;
  dimension: string;
  scene: string;
  options: Option[];
}
