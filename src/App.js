import './App.css';
import { Header } from './components/header/Header';
import {
  BrowserRouter as Router,
  Route,Routes
  
} from 'react-router-dom';
import { Home } from './components/home/Home';
import { Signup } from './components/signup/Signup';
import { Login } from './components/signup/Login';
import { Footer } from './components/footer/Footer';
import { Enroll } from './components/signup/Enroll';
import { Success } from './components/signup/Success';
import { Approve } from './components/admin/Approve';
import { SearchTrainer } from './components/admin/SearchTrainer';
import { AssignCourse } from './components/admin/AssignCourse';
import { ViewCalendar } from './components/admin/ViewCalendar';
import { ViewProfile } from './components/trainer/ViewProfile';
import { EditProfile } from './components/trainer/EditProfile';
import { ViewSchedule } from './components/trainer/ViewSchedule';
import { ShowCalendar } from './components/trainer/ShowCalendar';
function App() {
  return (
    <div className="App">
     <Router>
        <>
        <Header/>
        <Routes>
        <Route path="/" element={<Home/>} exact />
             
              <Route path="/signup" element={<Signup/>} />
              <Route path="/success" element={<Success/>} />
              <Route path="/enroll" element={<Enroll/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/approve" element={<Approve/>} />
              <Route path="/search" element={<SearchTrainer/>} />
              <Route path="/assign" element={<AssignCourse/>} />
              <Route path="/addcalendar" element={<ViewCalendar/>} />
              <Route path="/viewprofile" element={<ViewProfile/>} />
              <Route path="/editprofile" element={<EditProfile/>} />
              <Route path="/viewsch" element={<ViewSchedule/>} />
              <Route path="/showcalendar" element={<ShowCalendar/>} />
              
              
              </Routes>
        <Footer/>
        </>
           </Router>
           
    </div>
  );
}

export default App;
