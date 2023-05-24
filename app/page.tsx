import ClientOnly from "./components/ClientOnly";
import LogInOrSignUp from "./components/LogInOrSignUp";

const Home = () => {
  return (
    <ClientOnly>
      <LogInOrSignUp />
    </ClientOnly>
  );
};

export default Home;
