import './App.css';

//component--js function returns only one JSX element
//component first letter must be capital
function App()
 {
  const users=[{name:"Aravind", pic:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfQ1r9t0OtolRp6JzSQ5UJhn0w86DHmeugOeRXCUp0ZIT0QuIB"},{name:"Nirmal", pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4kVoohSv99m7iH8irz5yKQe2YrA6zXRfLxDvPyoGuNYGlU4Xw"},{name:"Balaji" ,pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYWgIy_ffTNaNuIvCsNT9aYcXzR_wEwM3WzMue6y9SdPfHziTk"},{name:"Mohan", pic:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfQ1r9t0OtolRp6JzSQ5UJhn0w86DHmeugOeRXCUp0ZIT0QuIB"},{name:"Siva", pic:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfQ1r9t0OtolRp6JzSQ5UJhn0w86DHmeugOeRXCUp0ZIT0QuIB"},{name:"Vijay", pic:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfQ1r9t0OtolRp6JzSQ5UJhn0w86DHmeugOeRXCUp0ZIT0QuIB"}]

  //JSX starts
  return (
    <div className="App">
      <h1>Welcome ReactJs⭐👌👌!!!</h1>
      <div className='container'>
        <Msg users={users}/>
      </div>

    </div>
  );
  //JSX ends
}
function Msg({users})
{
  return(
      
        users.map(user=>
          <div id={user.name} className='usercard'>
      <h1>Hello {user.name}</h1>
      <img src={user.pic}/>
    </div>) 
      
    
  )
}

export default App;
