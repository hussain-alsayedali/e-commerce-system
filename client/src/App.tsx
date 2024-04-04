import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SignupPage from "./pages/SignupPage.tsx";
import SigninPage from "./pages/SinginPage.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SigninPage />
    </>
  );
}

export default App;
