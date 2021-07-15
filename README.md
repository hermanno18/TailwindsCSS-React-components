# TailwindsCSS-React-components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
And with [TailWind CSS Framework](https://tailwindcss.com)

## Available Scripts

In the project directory, you can run the scripts used to run a React Project as well as   `npm start`

## Notes

This project is just a collection of independents React componnents that i've built that can be used together, so you can just copy and paste the component you need in your own project (asuming you have got the correct dependancies before). in the next lines, those component are presented in more details. if you encouter any issue please fill free to mention it [here](https://github.com/hermanno18/TailwindsCSS-React-components/issues)

## Main Dependancies

to work correctly this project (or any composent included) require these followings:

1. `the Node and React environement` ; of course i've built them using it, so you have to do the same

2. `the TailWind CSS Framework` .  if you are not familliar with it, [here is the official documentation](https://tailwindcss.com/docs)

## Included components

- ### `the navBar` as it name says, it's a navbar  ;-)

- ### `a modal` a smart and simple way to implement modal il you app

    You just have to include it into you component, and use the appropiate Tag to set you modal 
    `example:`
    import Modal from "component/modal"
        (....)
    \<Modal id="modal" title = "null"  >
        \<form className="modal-content  flex place-content-center" action="/action_page.php">
            \<div className="container w-1/2 p-4 text-center">
                \<h1 className="text-2xl" >Delete Account</h1>
                \<p>Are you sure you want to delete your account?</p>
                \<div className="flex place-content-center">
                    \<div class="clearfix w-1/2 text-white space-x-4 flex place-content-between">
                        \<button type="button" className="bg-gray-400 rounded cursor-pointer bg-opacity-70 hover:bg-opacity-90 outline px-10 py-3">Cancel</button>
                        \<button type="button" className="px-10 py-3 rounded cursor-pointer bg-opacity-70 hover:bg-opacity-90 bg-red-400">Delete</button>
                    </div>
                </div>
            </div>
        </form>
    </Modal>
    
- ### `a log in page` with a smart design adapted to both destop and mobile 

    `note that :`it requires the component `navBar`

- ### `a sign in page` with a smart design adapted to both destop and mobile 

    `note that :`it requires the component `navBar`

- ### `a slider`
