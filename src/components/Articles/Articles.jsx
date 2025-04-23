import './Articles.css';
import articles from '../../data/articles';


const Articles = ({detailed}) => {
  return (
  <div className='article'>
    {!detailed && articles.map((article, ind) => {
    if(ind < 5) {
      return (
        <div className='article__list' key={ind}>
          <a className='article__link' href="#">
            <h2 className='article__title'>{article.title}</h2>
            <p className='article__date'>{article.date}</p>
          </a>
        </div>
      )
    }
  })}
  {detailed && articles.map((article, ind) => {
    return (
      <div className="article__list article__list--br" key={ind}>
        <a href="#" className='article__link'>
          <h2 className="article__title">{article.title}</h2>
          <p className='article__date article__date--mr'>{article.date}</p>
          <p className='article__summary'>{article.summary}</p>
        </a>
      </div>
    )
  })}
  </div>
)
}

export default Articles