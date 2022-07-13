import Game from "@components/Game";
import { IFaunaPuzzle, IFaunaUser } from "@lib/faunadb/types";
import { DAY_ZERO, TODAY } from "@lib/utils/constants";
import { dateToPuzzleId } from "@lib/utils/dateHelpers";
import { useFaunaPuzzlesQuery } from "hooks";
import { FC, useState } from "react";

export interface IPlayProps {
  faunaUser: IFaunaUser;
}

const Play: FC<IPlayProps> = ({ faunaUser }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currPuzzleDificulty, setCurrPuzzleDifficulty] = useState<
    "Easy" | "Normal" | "Hard" | "Brutal"
  >("Easy");
  const calendarOpen = useState<boolean>(false);
  const [view, setView] = useState<"Game" | "Stats">("Game");
  // const faunaPuzzlesQuery = useFaunaPuzzlesQuery(dateToPuzzleId(selectedDate));
  const Easy: IFaunaPuzzle = {
    i: 0,
    j: 0,
    wi: "WORD",
    wj: "WARD",
    date: "2022-07-13",
    solves: {
      data: [],
    },
    _id: "123",
  };
  const Normal: IFaunaPuzzle = {
    i: 0,
    j: 0,
    wi: "WORD",
    wj: "WARD",
    date: "2022-07-13",
    solves: {
      data: [],
    },
    _id: "124",
  };
  const Hard: IFaunaPuzzle = {
    i: 0,
    j: 0,
    wi: "WORD",
    wj: "HARD",
    date: "2022-07-13",
    solves: {
      data: [],
    },
    _id: "125",
  };
  const Brutal: IFaunaPuzzle = {
    i: 0,
    j: 0,
    wi: "WORD",
    wj: "WARD",
    date: "2022-07-13",
    solves: {
      data: [],
    },
    _id: "126",
  };
  // const faunaPuzzles = faunaPuzzlesQuery.data;
  const faunaPuzzles = {
    Easy,
    Normal,
    Hard,
    Brutal,
  };

  const faunaPuzzle = faunaPuzzles[currPuzzleDificulty];

  const pastDate = selectedDate < DAY_ZERO;
  const futureDate = selectedDate > TODAY;
  // const validDate = !futureDate && !pastDate;
  const validDate = true;
  return (
    <div className="grid place-items-center">
      {/* Difficulty selection */}

      <div className="btn-group m-2">
        <div
          data-title="Easy"
          className={`btn btn-success ${
            "Easy" !== currPuzzleDificulty && "btn-outline"
          }`}
          onClick={() => {
            setCurrPuzzleDifficulty("Easy");
          }}
        >
          Easy
        </div>
        <div
          data-title="Normal"
          className={`btn btn-accent ${
            "Normal" !== currPuzzleDificulty && "btn-outline"
          }`}
          onClick={() => {
            setCurrPuzzleDifficulty("Normal");
          }}
        >
          Normal
        </div>
        <div
          data-title="Hard"
          className={`btn btn-warning ${
            "Hard" !== currPuzzleDificulty && "btn-outline"
          }`}
          onClick={() => {
            setCurrPuzzleDifficulty("Hard");
          }}
        >
          Hard
        </div>
        <div
          data-title="Brutal"
          className={`btn btn-error ${
            "Brutal" !== currPuzzleDificulty && "btn-outline"
          }`}
          onClick={() => {
            setCurrPuzzleDifficulty("Brutal");
          }}
        >
          Brutal
        </div>
      </div>
      <div className="btn-group m-2">
        <div
          data-title="Stats"
          className={`btn btn-secondary ${"Stats" !== view && "btn-outline"}`}
          onClick={() => {
            setView("Stats");
          }}
        >
          Stats
        </div>
        <div
          data-title="Game"
          className={`btn btn-primary ${"Game" !== view && "btn-outline"}`}
          onClick={() => {
            setView("Game");
          }}
        >
          Game
        </div>
      </div>
      {/* Date Selection */}

      {
        // faunaPuzzlesQuery.status === "success" &&
        validDate && view === "Game" && (
          <Game
            faunaPuzzle={faunaPuzzle}
            faunaUser={faunaUser}
            setView={setView}
            setCalendarOpen={calendarOpen[1]}
          />
        )
      }

      <div>{JSON.stringify(faunaPuzzle, null, "\t")}</div>
    </div>
  );
};

export default Play;
