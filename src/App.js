import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./Profile/Component/Profile";
import myImg from './me.jpg'


function App() {
  const handleName = (profilName) => {
    alert(`this is my ${profilName}`);
  };
  const profil = [{
    name: "Khaled boudaya",
    bio: "is me",
    profession: "ingénieur",
  }
];
  return (
    <div style={{backgroundColor:'white', width:'auto', height:'650px'}}>
      <Profile profile={profil} handleName={handleName}>
       {myImg}
      </Profile>
    </div>
  );
}

export default App;
