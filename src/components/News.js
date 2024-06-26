import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apikey: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
  }

  async updateNews(pageNo) {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(25);
    let parsedData = await data.json()
    this.props.setProgress(75);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }


  async componentDidMount() {
    this.updateNews();
  }

  // PreviousClick = async () => {
  //   this.setState({ page: this.state.page - 1 });
  //   this.updateNews();
  // }

  // NextClick = async () => {
  //   this.setState({ page: this.state.page + 1 });
  //   this.updateNews();
  // }

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ page: this.state.page + 1 })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  };

  render() {
    return (
      <>
        <h3 className="text-center" style={{ margin: '90px 40px 0px', color: 'Green' }}>___.....<u>Top - Headlines</u>.....___</h3>
        {this.state.loading && <Spinner />}

        {/* Ad InfiniteScroll for load more news */}
        <InfiniteScroll dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}>

          <div className='container my-5'>
            <div className='row my-3'>
              {this.state.articles.map((element) => {
                return (
                  <div className='col-md-4 my-3' key={element.url}>
                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                      description={element.description ? element.description.slice(0, 85) : ""}
                      imageUrl={element.urlToImage} newsUrl={element.url}
                      author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                )
              })}
            </div>
          </div >
        </InfiniteScroll>

        {/* Add Previous and Next button */}
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-info" onClick={this.PreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > (this.state.totalArticles / this.props.pageSize) + 1} type="button" className="btn btn-info" onClick={this.NextClick}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}