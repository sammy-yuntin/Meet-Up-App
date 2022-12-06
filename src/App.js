import {  Route, Routes } from 'react-router-dom';
import './App.css';
import AllMeetups from './pages/AllMeetups';
import FavoriteMeetups from './pages/Favorites';
import NewMeetup from './pages/Newmeetup';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups/>}></Route>
          <Route path="/new-meetups" element={<NewMeetup/>}></Route>
          <Route path="/favs" element={<FavoriteMeetups/>}></Route>
          {/* <Route path="/" element={<AllMeetups/>}></Route>
          <Route path="/" element={<AllMeetups/>}></Route> */}
        </Routes>
      </Layout>
    </div>
      
      
    
      
    
  );
}

export default App;
