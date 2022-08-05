import React from "react";

import Movie from "./Movie";
import Head from "./Head";

function Main(props) {

    return (
        <div>
            <Head />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={{
                padding: 20,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
                gridGap: 50
            }}>
                {
                    props.data.map((item)=>{
                        return <Movie data={props.data} id={item.id} title={item.title} img={item.imgUrl} star={item.grade} />
                    })
                }
            </div>
        </div>

    );
}

export default Main;