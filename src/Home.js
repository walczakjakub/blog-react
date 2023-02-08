import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Kuba Walczak', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Klaas Nowak', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Kuba Walczak', id: 3}
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    console.log('use effect ran')
  })

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
    </div>
   );
}
 
export default Home;