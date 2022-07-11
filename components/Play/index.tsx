import { IFaunaUser } from "@lib/faunadb/types";
import { FC } from "react";

export interface IPlayProps {
  faunaUser: IFaunaUser;
}

const Play: FC<IPlayProps> = ({ faunaUser }) => {
  return <div>Play</div>;
};

export default Play;
