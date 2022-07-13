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

  return (
    <div>
      <button
        className="btn btn-outline btn-secondary"
        onClick={() => {
          lazy && wordQuery.refetch();
          console.log({ wordQuery });
        }}
      >
        {word}
      </button>

      {/* <Modal title={word} state={state}>
        {wordQuery.status === "loading" || wordQuery.status === "idle" ? (
          <PageLoading isLoading={true} />
        ) : wordQuery.status === "success" ? (
          wordQuery.data[0].meanings.map((w: IDefnAPIRes, i: number) => (
            <Disclosure key={"meaning_" + i}>
              {({ open }) => (
                <>
                  <div className="border border-blue-600 rounded-lg p-1 m-1">
                    <Disclosure.Button className="flex w-full justify-between rounded-lg text-yellow-300 px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ">
                      {w.partOfSpeech}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          !open ? "rotate-180 transform" : ""
                        } h-5 w-5 `}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    </Disclosure.Button>
                    {w.definitions.map((d: IDefenition, j: number) => (
                      <Transition
                        key={j}
                        show={open}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Disclosure.Panel className="p-1 m-1 border border-blue-600 rounded-lg">
                          {d.definition}
                        </Disclosure.Panel>
                      </Transition>
                    ))}
                  </div>
                </>
              )}
            </Disclosure>
          ))
        ) : (
          <div className="text-red-600">`{word}` not found</div>
        )}
      </Modal> */}
    </div>
  );
};

export default Defn;
