import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './components/Posts/Posts';
import CreateEdit from './components/Posts/Post/CreateEdit';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Posts />} />
                    <Route path="login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/create" element={<CreateEdit />} />
                    <Route path="/edit/:id" element={<CreateEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;