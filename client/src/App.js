import logo from './logo.svg';
import './App.css';
import AboutUs from './Pages/AboutUs';
import UserTable from './Components/users/UserTable';

function App() {
  const fillWord = () =>{
    const arr = [];
    for(let i = 0; i < 10; i++)
    {
      arr.push(<h1>hello</h1>);
    }
    return arr;
  }
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;
