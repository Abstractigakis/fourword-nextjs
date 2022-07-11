import Profile from "@components/Profile";
import PageLoading from "@components/PageLoading";
import { useFaunaUserQuery } from "hooks";
import { withCustomServerSidePageAuth } from "@lib/nextAuth/middleware/server/pages";
import { GetServerSideProps, NextPage } from "next";

interface IProfilePageProps {
  data: { authUserEmail: string };
}

const ProfilePage: NextPage<IProfilePageProps> = ({ data }) => {
  const { authUserEmail } = data;
  const faunaUserQuery = useFaunaUserQuery(authUserEmail);
  const faunaUser = faunaUserQuery.data;
  return (
    <>
      {faunaUserQuery.status === "loading" && <PageLoading />}
      {faunaUserQuery.status === "success" && <Profile faunaUser={faunaUser} />}
      {faunaUserQuery.status === "error" && (
        <pre>{JSON.stringify(faunaUserQuery.error, null, 2)}</pre>
      )}
    </>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return await withCustomServerSidePageAuth(context);
};
