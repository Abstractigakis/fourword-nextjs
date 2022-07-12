import Defn from "@components/Wordate/Defn";

const Congrats = ({ solveObj }) => {
  const s = solveObj.createSolves;

  return (
    <div>
      <div className="text-3xl">⚡🔥 Congratulations 🔥⚡</div>
      <div className="m-2 grid place-items-center">
        You won in{" "}
        <span className="text-green-600">{s.moveStack.length - 1} moves</span>
      </div>
      <div className="grid place-items-center text-lg">Your solve:</div>
      <div className="flex flex-wrap justify-center overflow-y-scroll max-h-60">
        {s.moveStack.map((w, i) => (
          <>
            {i > 0 && (
              <button className="btn btn-secondary dtn-disabled">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-300"
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
              </button>
            )}
            <Defn key={`word_${w}_${i}`} word={w} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Congrats;
