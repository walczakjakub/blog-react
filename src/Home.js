import { useState } from "react"
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Kuba Walczak', id: 1},
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Klaas Nowak', id: 2},
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Grzegorz Źdźbło', id: 3}
  ])

  return ( 
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
   );
}
 
export default Home;