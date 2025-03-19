import { Level } from "./Level";
import { Type } from "./Type";
import ITechnology from "../technology/Technology";

export default interface IProject {
  id: number;
  name: string;
  description: string;
  images: string[];
  type: Type;
  level: Level;
  repository: string;
  highlight: boolean;
  technologies: ITechnology[];
  // created_at: Date;
  // updated_at: Date;
}