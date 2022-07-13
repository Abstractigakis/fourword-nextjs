import { MouseEventHandler, ReactNode } from "react";

export interface IGameStateLetterProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  correct: boolean;
  badWord: boolean;
  selected: boolean;
  disabled: boolean;
}

const GameStateLetter = ({
  children,
  onClick,
  correct,
  badWord,
  selected,
  disabled,
}: IGameStateLetterProps) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-outline btn-${
        selected
          ? "accent"
          : badWord
          ? "error"
          : correct
          ? "success"
          : "primary"
      } ${disabled ? "btn-disabled" : null}`}
    >
      {children}
    </button>
  );
};

export default GameStateLetter;
