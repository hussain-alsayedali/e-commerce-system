import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SignupPage from "./pages/SignupPage.tsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SignupPage />
    </>
  );
}

export default App;
