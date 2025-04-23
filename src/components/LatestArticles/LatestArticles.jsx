import './LatestArticles.css';
import Articles from "../../components/Articles/Articles";
import { Link } from 'react-router-dom';

import React from 'react'

const LatestArticles = () => {
  return (
    <section className="latest-articles">
      <div className="latest-articles__container container-main">
        <div className="latest-articles__wrapper">
          <h2 className="latest-articles__title">Latest Articles</h2>
          <Articles detailed={false}/>
          <Link className='latest-articles__link' to={"/blog"}>View all articles</Link>
        </div>
      </div>
    </section>
  )
}

export default LatestArticles