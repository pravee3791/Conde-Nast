import './newsItem.css';
import { INews } from "../../models/news";
import { isTemplateExpression } from 'typescript';
import { Link } from 'react-router-dom';
import { ReactChild, ReactFragment, ReactPortal, MouseEventHandler } from 'react';

interface INewsItem {
  onClick: any
  item: INews
}

function NewsItem(props: INewsItem) {
  const readMore = () => {
    props.onClick(props.item)
  }
  return (
    <>
     
      <div>
        <figure className="card">
          <img src={props.item.urlToImage} alt="sample88" />
          <figcaption>
            <h2>{props.item.title}</h2>
            <p>{props.item.description}</p>
            <span className="read-more" onClick={readMore}>
              Read More
            </span>
          </figcaption>
        </figure>
      </div>
    </>

  );
}

export default NewsItem;