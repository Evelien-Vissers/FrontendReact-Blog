import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './pages/home/Home.jsx'
import DetailPost from "./pages/detailposts/DetailPost.jsx";
import AllPosts from "./pages/allposts/AllPosts.jsx";

function App() {
    return (
        <div className="page-container">
            <Header />
            <Home />
            {/*<Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/allposts" element={<AllPosts/>}/>
                <Route path="/newposts" element={<NewPosts/>}/>
                <Route path="/allposts/:id" component={<DetailPost/>}/>
                <Route path="/error" element={<Error/>}/>
            </Routes> */}


        </div>
    )
}

export default App
