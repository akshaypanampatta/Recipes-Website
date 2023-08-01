import React from 'react'
import Banner from '../components/Banner/Banner';
import Content from '../components/Content/Content';
import RelatedArticles from '../components/Related Articles/RelatedArticles';
import RelatedBlog from '../components/RelatedBlog/RelatedBlog';
import Login from '../components/Login/Login';



function Home() {
  return (
    <div>
      <Banner />
      <Content/>
      <RelatedArticles/>
      <RelatedBlog/>
      <Login/>
      
      
    </div>
  );
}

export default Home