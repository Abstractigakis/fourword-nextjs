import { IFaunaPuzzle } from "@lib/faunadb/types";
import React, { FC } from "react";

export interface IGameControllerProps {
  faunaPuzzles: IFaunaPuzzle[];
  puzzleIndex: number;
  setPuzzleIndex: Function;
}

const GameController: FC<IGameControllerProps> = ({
  faunaPuzzles,
  puzzleIndex,
  setPuzzleIndex,
}) => {
  return (
    <div className="flex justify-center m-2">
      {[0, 1, 2, 3].map((n: number) => (
        <button
          className={`btn btn-${n === puzzleIndex ? "success" : "secondary"}`}
          key={n}
          onClick={() => setPuzzleIndex(n)}
        >
          {`${faunaPuzzles[n - 4].wi} ${faunaPuzzles[n - 4].wj}`}
        </button>
      ))}
    </div>
  );
};

export default GameController;
