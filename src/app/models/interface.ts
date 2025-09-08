export interface Nutrition {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  sugar: number;
}

export interface Fruit {
  name: string;
  id:number;
  family: string;
  genus: string;
  order: string;
  nutritions: Nutrition;
}
