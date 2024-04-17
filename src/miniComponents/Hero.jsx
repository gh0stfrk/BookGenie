
const Hero = () => {
    let user = localStorage.getItem("user");
    if(user){
        user = user.split(" ")[0]
    }
    return (
        <div className="p-2 flex flex-col font-light md:text-center">
            <h1 className="font-light">Welcome {user ? <p className="font-bold inline-block">{user}!</p> : <p></p>}</h1>
            <p>Find your next favourite read with BookGenie</p>
        </div>
    );
}

export default Hero;