import { react } from 'react';

const Logout = (args) => {
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload();
    }
    return(
        <button className="border-none rounded-md py-2 px-4 text-sm" onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout;