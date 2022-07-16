import Game from "@components/app/Wordate/Game";
import GameControllerFirstRow from "@components/app/Wordate/GameControllerFirstRow";
import GameControllerSecondRow from "@components/app/Wordate/GameControllerSecondRow";
import FuturePuzzle from "@components/app/Wordate/Messages/FuturePuzzle";
import PastPuzzle from "@components/app/Wordate/Messages/PastPuzzle";
import Stats from "@components/app/Wordate/Stats";
import PageLoading from "@components/common/PageLoading";
import { IFaunaUser } from "@lib/faunadb/types";
import { DAILY_DIFFICULTIES, DAY_ZERO, TODAY } from "@lib/utils/constants";
import { dateToPuzzleId } from "@lib/utils/dateHelpers";
import { useFaunaPuzzlesQuery } from "hooks";
import { FC, useState } from "react";

export interface IPlayProps {
  faunaUser: IFaunaUser;
}

const Play: FC<IPlayProps> = ({ faunaUser }) => {
  const viewState = useState<"game" | "stats">("game");
  const [view, setView] = viewState;

  const [selectedDate, setSelectedDate] = useState(new Date());
  const calendarOpen = useState<boolean>(true);

  const [difficulty, setDifficulty] = useState<
    "Easy" | "Normal" | "Hard" | "Brutal"
  >("Normal");
  const difficultyIndex = DAILY_DIFFICULTIES.indexOf(difficulty);

  const faunaPuzzlesQuery = useFaunaPuzzlesQuery(dateToPuzzleId(selectedDate));
  const faunaPuzzles = faunaPuzzlesQuery.data;

  const pastDate = selectedDate < DAY_ZERO;
  const futureDate = selectedDate > TODAY;
  const validDate = !futureDate && !pastDate;

  return (
    <>
      <PageLoading isLoading={faunaPuzzlesQuery.status === "loading"} />
      {faunaPuzzlesQuery.status === "success"}
      <div className="grid place-items-center">
        <GameControllerFirstRow
          faunaUser={faunaUser}
          viewState={viewState}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          modalState={calendarOpen}
        />

        {faunaPuzzlesQuery.status === "success" && (
          <GameControllerSecondRow
            faunaPuzzles={faunaPuzzles}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        )}

        {pastDate && (
          <PastPuzzle
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}

        {futureDate && (
          <FuturePuzzle
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}

        {faunaPuzzlesQuery.status === "success" &&
          validDate &&
          view === "game" && (
            <Game
              faunaPuzzle={faunaPuzzles[difficultyIndex]}
              faunaUser={faunaUser}
              setView={setView}
              setCalendarOpen={calendarOpen[1]}
            />
          )}

        {faunaPuzzlesQuery.status === "success" &&
          validDate &&
          view === "stats" && (
            <Stats
              faunaPuzzle={faunaPuzzles[difficultyIndex]}
              faunaUser={faunaUser}
            />
          )}

        {/* {faunaPuzzlesQuery.status === "error" && (
          <GenericError
            message={JSON.stringify(faunaPuzzlesQuery.error, null, 2)}
          />
        )} */}
      </div>
    </>
  );
};

export default Play;
