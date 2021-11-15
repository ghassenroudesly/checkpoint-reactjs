import './App.css';
import Adress from './components/Profile/Address';

import FullName from'./components/Profile/FullName';
import ProfilePhoto from'./components/Profile/ProfilePhoto';


function App() {
  return (
    <div class = "about">
      <FullName></FullName>
      <ProfilePhoto></ProfilePhoto>
      <Adress></Adress>
    
    </div>
  );
}
export default App;