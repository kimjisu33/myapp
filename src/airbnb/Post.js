import React from "react";
import { useParams } from "react-router-dom";


function Post(props) {
  let { id } = useParams();

  let movie = props.data;

  return (
    <div style={{
      margin:200,
      marginLeft:400
    }}>
      
      <div style={{
        display: 'flex',
      }}>
        <img src={movie[id].imgUrl} alt={movie[id].title} style={{
          width: 375,
          height: 525,
          borderRadius: 10,
          boxShadow: '0px 0px 5px gray',
        }} /> <br />
        <div style={{
          marginLeft:40
        }}>
        <h1>{movie[id].title}</h1> 
        {movie[id].date} &nbsp;&nbsp; &nbsp;  | &nbsp; &nbsp;  ★ {movie[id].grade} <br /><br/>
        {movie[id].where} <br /><br/>
        <div style={{
          backgroundColor:'whitesmoke',
          borderRadius: 10,
          boxShadow: '0px 0px 2px gray',
          width:700,
          height:330,
          padding:10
        }}>
          {movie[id].review}
        </div>
        
        </div>
      </div>

      <button onClick={() => window.history.back()} style={{
                width:100,
                height:50,
                fontSize:17,
                marginTop:10,
                marginLeft:1035,
                border:'none',
                borderRadius:10,
                fontSize:17,
                boxShadow: '0px 0px 2x gray',
                backgroundColor:'goldenrod'
            }}><b>돌아가기</b></button>
    </div>
  );
}

export default Post;