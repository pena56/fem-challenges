import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import NewsHomePage from "./NewsHomepage";
import NotificationsPage from "./NotificationsPage";
import InteractiveCard from "./InteractiveCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsHomePage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/card" element={<InteractiveCard />} />
    </Routes>
  );
}

export default App;
