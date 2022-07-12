import { TODAY } from "@lib/utils/constants";
import { dateToPuzzleId } from "@lib/utils/dateHelpers";
import { FC } from "react";

export interface IFuturePuzzleProps {
  selectedDate: Date;
  setSelectedDate: Function;
}

const FuturePuzzle: FC<IFuturePuzzleProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  return (
    <div className="grid place-items-center mt-6">
      <div className="text-red-600">Selected a future date!</div>
      <div className="text-red-600">
        Puzzle will be relased on {dateToPuzzleId(selectedDate)}
      </div>
      <div className="mt-6">
        <button
          className="btn btn-primary"
          onClick={() => setSelectedDate(TODAY)}
        >
          Today's puzzle
        </button>
      </div>
    </div>
  );
};

export default FuturePuzzle;
