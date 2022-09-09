import React,{ useState } from "react";
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEdit = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="flex h-screen items-center place-content-center ">
            <div className="flex min-w-max min-h-96 rounded p-6 h-[80%] w-[90%] sm:mt-[1%] sm:w-[70%] md:w-[60%] lg:w-[40%] lg:mt-[2%]">
                <form className="w-full text-black">
                    <h1 className="font-mono text-2xl mb-5 font-bold text-center">Create Memory</h1>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_title" id="floating_title" class="block py-2.5 font-medium px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="true"/>
                        <label for="floating_title" class="peer-focus:font-medium absolute  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                    </div>
                    <div lass="relative z-0 mb-8 mt-5 w-full group">
                        <label class="block mb-2 text-sm font-medium text-black" for="default_size">Picture</label>
                        <input class="block mb-5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file"/>
                    </div>
                    <div class="relative z-0 mb-8 mt-5 w-full group">
                        <label for="message" class="block mb-2 text-sm font-medium text-black">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                    </div>
                    <div class="relative z-0 mb-8 mt-5 w-full group">
                        <label for="message" class="block mb-2 text-sm font-medium text-black">Memory Date(Default is the current date)</label>
                        <DatePicker
                            selected={date} 
                            onChange={date => setDate(date)}
                            //Add the border to the date picker
                            className="block p-2.5 w-full text-sm tex-black rounded-lg border focus:ring-blue-500 focus:border-blue-500 border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </div>
                    {/* The tags for the post*/}
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" name="floating_tags" id="floating_tags" class="block py-2.5 font-medium px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="true"/>
                        <label for="floating_tags" class="peer-focus:font-medium absolute  text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tags</label>
                    </div>
                    {/** the likes for the post are hidden for now*/}
                    <div class="relative z-0 mb-8 mt-5 w-full group">
                        <input type="hidden" name="floating_likes" id="floating_likes" class="block py-2.5 font-medium px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="true"/>
                    </div>
                    {/*The date this post was created */}
                    <input type="hidden" name="date" value={new Date()}/>
                    <div class="flex w-full sm:mt-[5%] md:mt-12 lg:mt-8 place-items-center justify-center">
                        <Link to='/'>
                            <button  type="submit" class="w-[200px] sm:w-[300px] text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 bg-green-700 hover:bg-green-600">Save</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default CreateEdit;