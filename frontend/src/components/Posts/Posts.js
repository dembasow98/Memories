import React from "react";
import Post from "./Post/Post";
import {Link} from "react-router-dom";
import CreateEdit from "./Post/CreateEdit";

const Posts = () => {
    return (
        <div className="flex bg-gray-400 items-center place-content-center ">
            <div className="w-5/6 mt-[20%] sm:mt-[15%] lg:mt-[7%] flex flex-col place-content-center items-center">
                <Link to='/create' element = {<CreateEdit/>}>
                    <button class="bg-green-700 hover:bg-green-600 text-white mb-4 font-bold py-3 px-6 rounded">New Post</button>
                </Link>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <Post/>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <Post/>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
};


export default Posts;