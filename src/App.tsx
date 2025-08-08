import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./components/ui/site-header";
import ReviewPage from "./review-page/review-page.tsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/review" element={<ReviewPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
