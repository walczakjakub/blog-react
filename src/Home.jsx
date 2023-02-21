const Home = () => {

  const handleClick = () => {
    console.log('clicked')
  }

  const handleClickAgain = (name) => {
    console.log('hello ' + name)
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