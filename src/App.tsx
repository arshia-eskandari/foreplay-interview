import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InterviewNav from "./pages/InterviewNav";
import Practice from "./pages/Practice";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InterviewNav />}>
            <Route index path="practice" element={<Practice />} />
            <Route path="interview" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
