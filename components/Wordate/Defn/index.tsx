import { getWordInfo } from "@lib/axios/api";
import { FC } from "react";
import { useQuery } from "react-query";

export interface IDefnProps {
  word: string;
  lazy?: boolean;
}

export interface IDefenition {
  definition: string;
}

export interface IDefnAPIRes {
  partOfSpeech: string;
  definitions: IDefenition[];
}

const Defn: FC<IDefnProps> = ({ word, lazy }) => {
  const wordQuery = useQuery(["get-word", word], () => getWordInfo(word), {
    staleTime: Infinity,
    retry: false,
    enabled: !lazy,
  });
  console.log({ wordQuery });
  return <div>{word}</div>;
};

export default Defn;
