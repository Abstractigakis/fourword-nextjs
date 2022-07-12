import Defn from "../Defn";
import { FC } from "react";

interface IGameHudProps {
  firstWord: string;
  finalWord: string;
  scoring: boolean;
  score: number;
}

const GameHud: FC<IGameHudProps> = ({
  firstWord,
  finalWord,
  scoring,
  score,
}) => {
  return (
    <div className="flex justify-center border-b mb-2 pb-2">
      <div>Score: {score}</div>

      <Defn word={firstWord} />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 rounded-lg text-accent"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>

      <Defn word={finalWord} />
    </div>
  );
};

export default GameHud;
