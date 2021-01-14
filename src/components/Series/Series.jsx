import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import SeriesItem from './SeriesItem';
import Logo from '../Logo/Logo';
import Loading from '../Loading/Loading';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import './Series.scss';

function Series() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0)
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  const getData = () => {
      axios
      .get(`https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json`) 
      .then(res => {
        const data = res.data.entries;
        const series = [];

        data.forEach(item => {
          if(item.programType === 'series' && item.releaseYear >= 2010) {
            series.push(item)
          } 
        });

        series.sort((a,b) => (a.title > b.title) ? 1: ((b.title > a.title) ? -1 : 0));

        setSeries(series);
        const slice = series.slice(offset, offset + perPage);
        const seriesData = slice.map((item, index) => {
          return <SeriesItem
            img={item.images["Poster Art"].url}
            title={item.title}
            descr={item.description}
            key={index}
           />
        });
          setData(seriesData);
          setPageCount(Math.ceil(series.length / perPage));
          setLoading(false);
        }       
      )
      .catch(
        err => {
          setError(true);
          setLoading(false);
          setData(err.message)
        }
      ) 
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage * perPage)
  };

  useEffect(() => {
    getData()
  }, [offset])

  if(loading) {
    return (
      <React.Fragment>
        <Logo />
        <Loading />
      </React.Fragment> 
    )
  } 
  return (
    <div>
      <Logo />
      <div className='series'>
      {data}
       <ReactPaginate
            previousLabel={<NavigateBeforeIcon />}
            nextLabel={<NavigateNextIcon />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={0}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>
    </div>
    </div>
  );
}

export default Series;
