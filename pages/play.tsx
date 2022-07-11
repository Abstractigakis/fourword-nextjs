import Play from "@components/Play";
import { useFaunaUserQuery } from "hooks";
import { withCustomServerSidePageAuth } from "@lib/nextAuth/middleware/server/pages";
import { GetServerSideProps, NextPage } from "next";

interface IPlayPageProps {
  data: { authUserEmail: string; puzzleId: string };
}

const PlayPage: NextPage<IPlayPageProps> = ({ data }) => {
  const { authUserEmail } = data;

  const faunaUserQuery = useFaunaUserQuery(authUserEmail);
  const faunaUser = faunaUserQuery.data;

  return (
    <>
      {faunaUserQuery.status === "success" && <Play faunaUser={faunaUser} />}
      {faunaUserQuery.status === "error" && (
        <pre>{JSON.stringify(faunaUserQuery.error, null, 2)}</pre>
      )}
    </>
  );
};

export default PlayPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await withCustomServerSidePageAuth(context);
};
