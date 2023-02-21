import { useState } from "react";

const Home = () => {

  // let name = 'Kuba'
  const [name, setName] = useState('Kuba')
  const [age, setAge] = useState(35)

  const handleClick = () => {
    setName('Klaas')
    setAge(36)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
 
export default Home;