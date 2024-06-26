import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://www.dits.center/images/picture13_1.jpg"} className="card-img-top" alt="https://www.dits.center/images/picture13_1.jpg" />
          <div className="card-body">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">{description}.....</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <div className="text-center">
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
              <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{ right: '-3%', bottom: '0.5%', color: 'white' }}> {source} </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}