import Button from "@components/common/Button";
import { IFaunaPuzzle } from "@lib/faunadb/types";
import React, { FC } from "react";

export interface IGameControllerProps {
  faunaPuzzles: IFaunaPuzzle[];
  difficulty: string;
  setDifficulty: Function;
}

const GameController: FC<IGameControllerProps> = ({
  faunaPuzzles,
  difficulty,
  setDifficulty,
}) => {
  return (
    <div className="flex justify-center m-2">
      {["Easy", "Normal", "Hard", "Brutal"].map((d: string, index: number) => (
        <Button
          key={index}
          type={d === difficulty ? "green" : "secondary"}
          onClick={() => setDifficulty(d)}
          text={`${faunaPuzzles[index].wi} ${faunaPuzzles[index].wj}`}
        />
      ))}
    </div>
  );
};

export default GameController;
