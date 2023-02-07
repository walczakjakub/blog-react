import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Kuba Walczak', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Klaas Nowak', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Kuba Walczak', id: 3}
  ])

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!"/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Kuba Walczak')} title="Kuba's blogs"/>
    </div>
   );
}
 
export default Home;