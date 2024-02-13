import { React } from 'react';

const Footer = () => {
    return (
    <footer className="footer flex justify-center p-3">
        <div className=''>
            <p>Made with magic 🧞</p>
            <div className='my-2 flex justify-center'>
                <a href="https://github.com/gh0stfrk/BookGenie.git"
                   className='bg-black text-white p-1 rounded'
                >
                    Contribute 🧞
                </a>
            </div>
        </div>
    </footer>
  );
}


export default Footer;