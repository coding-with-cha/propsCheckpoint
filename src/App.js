import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';
import photo from './profile/img.jpg';

function App() {
  let fullName;
  let bio;
  let profession; 
  const handleName = (fullName) =>{
    alert(`Welcome ${fullName} !`);
}
  return (
    <div className="App">
      <Profile fullName={fullName} bio={bio} profession={profession} alertFct={handleName}>
        <img src={photo} alt="img_Albert_Einstein" style={{width:"400px", height:"350px" }}/>
      </Profile>
    </div>
  );
}

export default App;
