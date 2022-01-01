import { getProviders, signIn } from "next-auth/react";

const spotifyLogo = require("../assets/Spotify_Logo_CMYK_Green.png");

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <h1>Login page</h1>
      <img
        className="w-52 mb-5"
        src="https://links.papareact.com/9xl"
        alt="Spotify"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white p-5  rounded-full"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
