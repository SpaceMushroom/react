import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import News from "./pages/News";
import Services from "./pages/Services";
import Jobs from "./pages/Jobs";
import Contacts from "./pages/Contacts";
import Users from "./pages/Users";
import User from "./pages/User";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="services" element={<Services />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:id" element={<User />} />
    </Routes>
  );
};

export default App;
