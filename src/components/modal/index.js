import React, { Component} from 'react'





export default class Modal extends Component{
    constructor(props,state){
        super(props)
        this.state = {
            
            // eslint-disable-next-line no-useless-concat
            h : 'h-'+'96' ,
            // eslint-disable-next-line no-useless-concat
            w : 'w-'+'5/6',
            id : this.setId(props), 
            max_w : "max-h-96",
            bgColor : "bg-gray-100",
            title : this.setTitle(props),
            content : this.setContent(props),
            header: this.setHeader(props, console.log("un petit log ",)),
        }
        console.log('hop :', this.state);
        this.setHeader = this.setHeader.bind(this)
    }

    setHeader(props, state){
        if(this.props.header === undefined || this.props.header.toLowerCase() !== "null"){
            console.log("l'etat est ", this.setTitle());
            return (
                <div className={' flex place-content-between  p-1'} id={this.props.id+'Header'} >
                    <div className="text-2xl" id={this.setId()+'Title'}>
                        {this.setTitle()}
                    </div>
                    <span className="m-0 self-start text-3xl cursor-pointer" onClick={()=> { this.hide() }}>
                        &times;
                    </span> 
                </div>
            )  
        }
    }

    setContent(){
        var props = this.props
        if(props.children === ""|| props.children === null || props.children === undefined) {
            return (
                <div className="text-center ">
                    <span className='text-xl'>Defalut content </span><br />
                    <div className='flex place-content-center'>
                        <div className="md:w-3/4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui ipsam, quaerat nostrum voluptatum, impedit officiis aut omnis similique hic numquam distinctio recusandae repellendus eius aperiam voluptas ipsum deserunt ducimus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui ipsam, quaerat nostrum voluptatum, impedit officiis aut omnis similique hic numquam distinctio recusandae repellendus eius aperiam voluptas ipsum deserunt ducimus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit qui ipsam, quaerat nostrum voluptatum, impedit officiis aut omnis similique hic numquam distinctio recusandae repellendus eius aperiam voluptas ipsum deserunt ducimus!
                        </div> 
                    </div> <br />
                    <span className='text-sm'>
                        <a href='test' className="text-blue-500 text-sm hover:text-blue-700"> (here to see how to change it )</a>    
                    </span>
                </div>
            )
        }
        else {
            return props.children
        }
    }

    setTitle(){
        var props = this.props
        if(props.title === undefined || props.title === ""|| props.title == null || props.title.toLowerCase() === "null"  ) 
        {
            return  <span> default Title <a href='test' className="text-blue-500 text-sm hover:text-blue-700"> (here to see how to change it )</a> </span>
        }else{
            return props.title
        }
    }

    setId(){
        var props = this.props
        if(props.id === undefined || props.id === "" || props.id === null || props.id.toLowerCase() === 'null' ) 
        {
            return "modal"
        }else{
            return props.id
        }
    }

    hide(){
        var modal = document.getElementById(this.state.id)
        modal.style.display = "none";
    }

    handleClickOut = (e) =>  {
        var modal = document.getElementById(this.state.id);
        if (e.target === modal) {
        var main = document.getElementById(this.state.id+"main");
            main.classList.toggle("duration-75")
            main.classList.toggle("animate-pulse")
        setTimeout(() => {
            main.classList.toggle("animate-pulse")
            main.classList.toggle("duration-75")
        }, 1000);
        }
 
    }


    linkToRoot = (e) =>{
        var modal = document.getElementById(this.state.id);
        var root = document.getElementById('root')
        console.log(!(modal.parentNode === root));
        if(!(modal.parentNode === root)){
           root.insertBefore(modal, root.firstChild)
       }
        
        // document.getElementById("root").appendChild(modal);    
        // document.body.appendChild(modal);
    }

    componentDidMount() {
        window.addEventListener('load', this.linkToRoot);
      }
    
    componentWillUnmount() {
    window.removeEventListener('load', this.linkToRoot);
    }

    render(){
        return (
            <div onClick={this.handleClickOut} onLoad={this.linkToRoot} id={this.state.id} className=" fixed z-50 flex items-center p-0 m-0 place-content-center min-h-screen w-screen bg-opacity-80  bg-gray-900">
                <div id={this.state.id+"main"} class={this.state.w+' '+this.state.max_w+" "+this.state.bgColor+" overflow-auto mt-10 mb-10 border rounded "}>
                    {this.state.header}
                    <div className="p-2" id={this.state.id+'Body'} onClick={()=> {this.setState({content: this.props.children})}}>
                        {this.state.content}
                    </div>
                </div>
            </div>
        )
    }
}