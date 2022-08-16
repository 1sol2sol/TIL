import PropTypes from "prop-types";

function ShowDetail({img,smallCover,runtime,title,year,rating,des,like,genre}){
  return(
    <div>
      <img src={img} alt={title}/>
      <div>
      <img src={smallCover}/>
      <h2>{title}</h2>
      <span>{year}년 / {runtime}분 / {genre} </span>
      <p>평점:{rating} like:{like} </p>
      </div>
      <p>{des}</p>
    </div>
  )
}

ShowDetail.propTypes = {
  id: PropTypes.number.isRequired,
  like: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  smallCover: PropTypes.string,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ShowDetail;