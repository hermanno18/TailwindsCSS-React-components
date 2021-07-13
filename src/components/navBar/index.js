import React, {Component} from "react"
import logo from '../../logo.svg'

export default class NavBar extends Component {
    toggle() {
            document.getElementById("navMenu").classList.toggle("hidden");
    }
    render(){
        return  (
            <div className="  relative block">
                <div class=" px-5 md:pr-12 absolute w-full z-30 rounded-lg md:bg-transparent">
                    <div className="block flex flex-col md:flex-row w-full place-content-between" >
                        <div className="flex place-content-between align-center h-full w-full">
                            <img src={logo} alt="" className="h-16 w-16" />
                            <div class="h-10 w-10 mt-3 bg-green-700 md:hidden p-3 pt-2 text-xl" onClick={() => {this.toggle() }}>x</div>
                        </div>
                        <div id="navMenu" className="  h-full divide-y md:divide-y-0 p-4 md:pt-4 md:p-1 py-5 md:space-x-14 flex flex-col  bg-white md:bg-transparent w-full md:flex-row place-content-between align-center  text-gray-400">
                            <a href='test' className="relative capitalize hover:text-blue-600  font-bold pl-4 p-2 transition duration-500 ease-in-out">Home</a>
                            <a href='test' className="relative capitalize font-bold hover:text-blue-600  pl-4 p-2 transition duration-500 ease-in-out">What we serve</a>
                            <a href='test' className="relative capitalize font-bold  hover:text-blue-600 pl-4 p-2 transition duration-500 ease-in-out">Who we are</a>
                            <a href='test' className="relative uppercase rounded-full rounded-tr-none p-1 px-4 bg-gradient-to-r  from-blue-900 via-blue-700 to-blue-400 text-white ring-2 ring-blue-600 ring-offset-2 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">demo</a>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
} 