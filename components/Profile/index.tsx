import { IProfileProps } from "./types";
import { FC } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const Profile: FC<IProfileProps> = ({ faunaUser }) => {
  const router = useRouter();

  return (
    <>
      <div className="grid place-items-center">
        {/* AVATAR */}
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={faunaUser?.image || null} />
          </div>
        </div>
        {/* Read Fields */}
        <div>
          <div className="flex justify-between border-b p-1 m-1 border-accent">
            <p className="mx-1 text-lg">Name:</p>
            <p className="mx-1 text-lg">{faunaUser.name}</p>
          </div>

          <div className="flex justify-between border-b p-1 m-1 border-accent">
            <p className="mx-1 text-lg">Display Name:</p>
            <p className="mx-1 text-lg">
              {faunaUser.displayName || faunaUser.name}
            </p>
          </div>

          <div className="flex justify-between border-b p-1 m-1 border-accent">
            <p className="mx-1 text-lg">Email:</p>
            <p className="mx-1 text-lg">{faunaUser.email}</p>
          </div>
        </div>
      </div>

      <div className="grid place-items-center m-2">
        <div className="flex">
          <button
            className="btn btn-error m-2 p-2"
            onClick={() => {
              router.push("/").then(() => signOut());
            }}
          >
            Sign Out
          </button>
          <button
            className="btn btn-success m-2 p-2"
            onClick={() => {
              router.push("/play").then(() => {});
            }}
          >
            Play
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
