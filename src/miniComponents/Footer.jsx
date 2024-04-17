import { React } from 'react';

const Footer = () => {
    return (
    <footer className="footer flex p-4 justify-around gap-4 flex-col sm:flex-row mt-10 mb-0">
        <div>
            <h1>BookGenie</h1>
            <p className='text-sm'>
            &copy; {new Date().getFullYear()} - All Rights Reserved
            </p>
        </div>
        <div>
            <p className='font-bold'>Powered by</p>
            <ul className='list-none flex flex-col gap-1'>
                <li><a href="https://react.dev/" className='no-underline'>React.js</a></li>
                <li><a href="https://www.mongodb.com/" className='no-underline'>MongoDB</a></li>
                <li><a href="https://fastapi.com" className='no-underline'>FastAPI</a>
                </li>
            </ul>
        </div>
        <div>
            <p className='font-bold'>Contact</p>
            <ul className='list-none flex flex-col gap-1'>
                <li> 
                    <a href="https://github.com/gh0stfrk" className='no-underline'>Github</a>
                </li>
            </ul>
        </div>

    </footer>
  );
}


export default Footer;