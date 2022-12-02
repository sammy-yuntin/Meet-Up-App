import {  Route, Routes } from 'react-router-dom';
import './App.css';
import AllMeetups from './pages/AllMeetups';
import FavoriteMeetups from './pages/FavoriteMeetups';
import NewMeetups from './pages/Newmeetups';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups/>}></Route>
          <Route path="/new-meetups" element={<NewMeetups/>}></Route>
          <Route path="/favs" element={<FavoriteMeetups/>}></Route>
          {/* <Route path="/" element={<AllMeetups/>}></Route>
          <Route path="/" element={<AllMeetups/>}></Route> */}
        </Routes>
      </Layout>
    </div>
      
      
    
      
    
  );
}

export default App;
