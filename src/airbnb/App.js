import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./Main";
import CreatePost from "./CreatePost";
import Post from "./Post";

import movie from './movie.json';

function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main data={movie}/>}></Route>
                    <Route path="/createpost" element={<CreatePost data={movie}/>}></Route>
					<Route path="/post/:id" element={<Post data={movie}/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;