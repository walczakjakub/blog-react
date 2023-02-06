const Home = () => {

  const handleClick = (e) => {
    console.log('button clicked', e)
  }

  const handleClickAgain = (name) => {
    console.log('button clicked by ' + name)
  }

  return ( 
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClickAgain('Kuba')}>Click me too</button>
    </div>
   );
}
 
export default Home;