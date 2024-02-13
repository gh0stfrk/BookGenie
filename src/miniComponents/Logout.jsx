import { react } from 'react';

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem('idToken');
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        window.location.reload();
    }
    return(
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout;