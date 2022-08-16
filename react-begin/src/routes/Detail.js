import { useEffect, useState } from "react";
import ShowDetail from "../components/ShowDetail";
import {useParams} from "react-router-dom";

function Detail(){
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
    setDetails(json.data.movie);
    setLoading(false)
  }
  useEffect(() => {
    getMovie();
  }, [])
  console.log(details);
  return (
     <div>
       {loading ? (
         <h1>loading...</h1> 
       ) : (
         <div>
           <ShowDetail
            img={details.background_image_original}
            smallCover={details.small_cover_image}
            title={details.title}
            year={details.year}
            runtime={details.runtime}
            rating={details.rating}
            des={details.description_full}
            genre={details.genres}
            like={details.like_count}/>
         </div>
       )}
     </div>
  )
}

export default Detail;