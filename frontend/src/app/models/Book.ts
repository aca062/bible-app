import { Verse } from "./Verse";

export interface Book {
    id: number;
    name: string;
    verses: Verse[];
}
