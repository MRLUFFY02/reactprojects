import './App.css';

//component--js function returns only one JSX element
//component first letter must be capital
function App()
 {

  //JSX starts
  return (
    <div className="App">
      <h1>Welcome ReactJs⭐👌👌!!!</h1>
      <Msg/>
    </div>
  );
  //JSX ends
}
function Msg()
{
  return(
    <div>
      <h1>Hello Aravind</h1>
    </div>
  )
}

export default App;
