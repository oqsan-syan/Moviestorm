import React, {Component} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import MoviesItem from './MoviesItem';
import Loading from '../Loading/Loading';
import Logo from '../Logo/Logo';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './Movies.scss';

export default class Movies extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 10,
          currentPage: 0,
          loading: true,
          error: false,
      };

      this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedData() {
      axios
          .get(`https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`)
          .then(res => {
              const data = res.data.entries;
              const movies = [];

              data.forEach((item) => {
                if(item.programType === 'movie' && item.releaseYear >= 2010) {
                  movies.push(item)
                } 
              });
              
              movies.sort((a,b) => (a.title > b.title) ? 1: ((b.title > a.title) ? -1 : 0));

              const slice = movies.slice(this.state.offset, this.state.offset + this.state.perPage);

              const moviesData = slice.map((item,index) => 
                <MoviesItem
                  img={item.images["Poster Art"].url}
                  title={item.title}
                  descr={item.description}
                  key={index}
                 />
              );

              this.setState({
                  pageCount: Math.ceil(movies.length / this.state.perPage),
                  moviesData,
                  loading: false
              });
          })
          .catch(err => {
            this.setState({
              error: true,
              loading: false,
              moviesData: err.message,
              pageCount: null
            })
          });
  }

  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }, () => {
          this.receivedData()
      });

  };

  componentDidMount() {
    this.receivedData()
  }

  render() {
    if(this.state.loading) {
      return (
        <React.Fragment>
          <Logo />
          <Loading />
        </React.Fragment>
      )
    }
      return (
        <React.Fragment>
          <Logo />
          <div className='movies'>
              {this.state.moviesData}
              <ReactPaginate
                  previousLabel={<NavigateBeforeIcon />}
                  nextLabel={<NavigateNextIcon />}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={0}
                  pageRangeDisplayed={1}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>
        </React.Fragment>
      )
  }
}
