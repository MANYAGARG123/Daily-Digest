import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div className="card" style={{ margin: "10px" }}>
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%" }}
        >
          {source}
        </span>
        <img
          style={{ width: "395px", height: "250px" }}
          src={
            imageUrl
              ? imageUrl
              : "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small>
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="blank"
            className="btn btn-sm btn-primary btn-dark"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }

export default NewsItem