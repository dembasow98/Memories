import React from "react";
import stl from "../../../images/stl.jpg";
import {Link} from "react-router-dom";
import View from "./View";

const Post = () => {
    
    
    //Get the dropdown menu for the post that contains the button that was clicked
    //if the dropdown menu is hidden, show it
    //if the dropdown menu is shown, hide it
    const toggleDropdown = (e) => {
        //Get the dropdown menu for the post that contains the button that was clicked
        const dropdown = e.target

    };

    return (
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            {/* Add the option button in the top right of the image*/}
            <div class="relative">
                <img href="/view:id" class="cursor:pointer w-full h-56 rounded-t-lg" src={stl} alt="stl" />
                <div class="absolute w-full top-0">
                    <div class="flex place-items-end justify-end w-full float-right right-0">
                        <button onClick={toggleDropdown} id="dropdownButton" data-dropdown-toggle="dropdown" class="flex items-center mt-1 mr-1 justify-center w-8 h-8 text-gray-400 transition-colors duration-200 transform bg-white rounded-full hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-500">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                   <div class="w-full flex place-items-end justify-end">
                    <div id="dropdown-menu" class="dropdown-menu hidden z-10 w-44 text-base list-none mr-1 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul class="py-1" aria-labelledby="dropdownButton">
                            <li>
                                <Link to="/view:id" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">View</Link>
                            </li>
                            <li>
                                <Link to="/edit:id" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
                            </li>
                            <li>
                                <Link to="/:id" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
                            </li>
                            </ul>
                        </div>
                   </div>
                </div>

            </div>
          
            <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link to={<View/>} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
        </div>

    );
};

export default Post;