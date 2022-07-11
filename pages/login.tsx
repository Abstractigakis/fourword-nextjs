import SignInWithGoogleButton from "@components/GoogleSignInButton";
import { withRedirectLoggedInUserToProfile } from "@lib/nextAuth/middleware/server/pages";

const LoginPage = () => {
  return (
    <div className="my-32 grid place-items-center">
      <SignInWithGoogleButton />
    </div>
  );
};

export default LoginPage;

export const getServerSideProps = withRedirectLoggedInUserToProfile;
