import React from "react";
import {useNavigate} from 'react-router-dom';

import styles from "./Movie.module.css";

function Movie(props){
    let navigate =useNavigate();
    return (
        <div onClick={()=>navigate(`/post/${props.id}/`)} className={styles.movie}>
            <img src={props.img} alt={props.title} style={{
                width:250,
                height:350,
                borderRadius:10,
                boxShadow:'0px 0px 5px gray',
            }}/>
            <h3>{props.title}</h3>
            <hr/>
            ★ {props.star}
        </div>
    );
}

export default Movie;