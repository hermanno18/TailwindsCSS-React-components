import React, { Component } from 'react'
import NavBar from '../navBar'
//var img = "http://hermannf.pythonanywhere.com/static/alphabox/assets/img/image4.jpeg"

export default class FormLogin extends Component {
    render() {
        return (
            <section className='w-full p-4 relative bg-blue-300 min-h-screen flex justify-content-center align-center text-sm'>
                <div className='w-full'>
                    <NavBar />
                    <div className="box-border grid grid-cols-3 rounded-xl rounded-sm relative overflow-hidden min-h-full">
                        <div className=" bg-blue-900 col-span-3 md:col-span-1   text-gray-200 relative pt-24 md:pt-36 min-h-full overflow-hidden">
                            <div className="flex space-x-5 pl-9 ">
                                <h1 className="text-2xl ">Lorem Ipsum</h1>
                                <div className=" h-full flex justify-content-center align-center ">
                                    <div className="h-px w-10 bg-gray-200 mt-2"></div>
                                </div>
                            </div>
                            <div className="mt-7 w-5/6 pl-9 ">
                                <div className="flex flex-col space-y-4">
                                    <form action="" method="post">
                                        <input type="text" className="h-10 w-full  bg-transparent border-b-1 border-b-2 border-gray-400 pl-1 rounded-md  focus:text-gray-700 focus:bg-blue-100 focus:outline-none focus:border-none transition duration-500 ease-in-out" placeholder='Email' required />
                                        <input type="password" className="h-10 w-full  bg-transparent border-b-1 border-b-2 border-gray-400 pl-1 rounded-md mt-2 focus:text-gray-700 focus:bg-blue-100 focus:outline-none focus:border-none  transition duration-500 ease-in-out" placeholder='PassWord' required />
                                        <div className="flex flex-col md:flex-row mt-3 space-y-2 md:space-y-0 place-content-between">
                                            <span className="" >
                                                <input type="checkbox" name="" id="remember_me" className="rounded-full border-none outline-none" />
                                                <label htmlFor="remember_me" className="pl-1 text-xs">Remember me</label>
                                            </span>
                                            <span className="text-xs"><a href="test" className='decoration-none underline-none'>forgot password ?</a></span>
                                        </div>
                                        <div className='mt-5 md:mt-9 flex '>
                                            <input type="submit" value="login" className="cursor-pointer hover:bg-blue-700 focus:ring-1 ring-blue-600 ring-offset-2 bg-blue-600 px-4 py-2 rounded-full text-white transition duration-500 ease-in-out" />
                                            <a href="test" className="ml-9 ring-2 ring-blue-700 px-4 py-2 rounded-full text-white hover:bg-white hover:text-blue-700 transition duration-500 ease-in-out" >sign up</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="visible flex place-content-center -m-4 -z-10">
                                <div className="h-72 w-72 md:h-96 md:w-96 rounded-full -bottom-36 md:-right-48 md:-bottom-48 bg-blue-300 absolute"></div>
                                <div className="h-48 w-48 rounded-full md:-right-24 -bottom-24 bg-opacity-50 bg-white absolute"></div>
                                <div className="h-24 w-24 rounded-full md:-right-12 -bottom-12 bg-blue-900 md:bg-gray-900 absolute"></div>
                            </div>
                        </div> 
                        <div className=" hidden md:block md:col-span-2 bg-white relative overflow-hidden  p-4 pt-36  p-4 ">
                            <div className="pl-20">
                                <h1 className="text-2xl text-blue-600 ">Lorem Ipsum</h1>
                                <div className="h-1 w-10 bg-blue-600 mt-2"></div>  
                                <div className="flex place-content-between my-10 mt-5">
                                    <p className="max-w-lg " >
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quaerat officiis architecto. Corporis iusto exercitationem incidunt officiis ipsum impedit nisi a voluptatum tenetur, suscipit fuga aspernatur? Rerum tenetur distinctio laudantium.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem deleniti aspernatur incidunt ex accusamus harum suscipit nemo vitae earum. Eius eveniet molestiae ab, qui eligendi laborum amet eaque? Aut, possimus?
                                        lore
                                    </p>
                                    <div className="w-20" >
                                        ef klefe <br />
                                        erferfe
                                    </div>
                                </div>
                                <div>
                                    <button className="capitalize bg-blue-600 px-4 py-2 rounded-full text-white ring-1 ring-blue-600 ring-offset-2 transition duration-300 ease-in-out hover:bg-blue-800" >More</button>
                                </div>
                            </div>
                            <div className="visible ">
                                <div className="h-72 w-72 md:h-96 md:w-96 rounded-full -left-48 -bottom-48 bg-blue-300 absolute"></div>
                                <div className="h-48 w-48 rounded-full -left-24 -bottom-24  bg-blue-600 absolute"></div>
                                <div className="h-24 w-24 rounded-full -left-12 -bottom-12 bg-gray-900 absolute"></div>
                            </div>
                        </div> 
                    </div>

                </div>
            </section>
        )
    }
}
