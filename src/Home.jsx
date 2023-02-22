import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Kuba', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Klaas', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Kuba', id: 3 }
  ])

  const [name, setName] = useState('Kuba')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effect ran')
    console.log(name)
  }, [name])

  return (
    <div className="home">
      <BlogList 
        blogs={blogs} 
        title="All blogs" 
        handleDelete={handleDelete} 
      />
      <button onClick={() => setName('Klaas')}>change name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;