import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo/Logo";
import StudentCourses from "./components/StudentCourses/StudentCourses";
import CoursesCards from "./components/CoursesCards/CoursesCards";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Logo />
        <StudentCourses />
        <CoursesCards />
        <Footer />
      </div>
    </>
  );
}

export default App;
