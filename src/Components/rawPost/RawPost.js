import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube'
import './RawPost.css'
import {imageUrl} from '../../constants/constants'
import axios from '../../axios'
function RawPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      });
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
    };
    const handleMovie = (id)=>{
      console.log(id);
      axios.get(`movie/${id}/videos?api_key=373752cb800a615d0e4962bb5dc749e6&language=en-US`).then(response=>{
        if(response.data.results.length!=0)
        {
          setId(response.data.results[0])
        }else{
          console.log("no clips");
        }
      })
    }
    return (
      <div className='row'>
            <h2>{props.title}</h2>
        <div className='posters'>
           {movies.map((obj)=>
            <img onClick={()=>{
              handleMovie(obj.id)
            }} className={props.isSmall ? 'smallPoster' : "poster"} src={`${imageUrl+obj.backdrop_path}`} />
           )}
         </div>
      
         {urlId && <YouTube videoId={urlId.key} opts={opts} />}
      </div>
    )
}

export default RawPost
