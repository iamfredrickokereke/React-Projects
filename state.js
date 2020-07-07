
const useState = React.useState;

const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 }
]

function App(){
  return (
    
      <>
      <Header />
      <Content />
      <ul>
       
        {pets.map( pet => <Pet name={pet.name} species={pet.species} age={pet.age} key={pet.id} /> )}
        
      </ul>

      <>
          <button>Increase Likes</button>
          <button>Decrease Likes</button>


          <h2>This page has been liked {} times</h2>
        </>
      <Footer />
      </>   
  )  
}

function Pet(props){
  return <li>This is a very special {props.species}, her name is {props.name} and she is {props.age} years old </li>
}
function Header(){
  return <h1 className="color"> Our Amazing App </h1>
}

function Content(){
  
  const [theTime, setTime] = useState(new Date().toLocaleString());
  
  setTimeout(function(){
    setTime(new Date().toLocaleString())
  }, 1000)
  
  return <p> The current time is {theTime} </p>
}

function Footer(){
  return <small> All rights reserved </small>
}

// setInterval(() => {
//   ReactDOM.render(<App />, document.querySelector('#root'))
// },1000)


  ReactDOM.render(<App />, document.querySelector('#root'))
