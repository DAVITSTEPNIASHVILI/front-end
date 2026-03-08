import arrowDown from "../images/icon-arrow-down.svg";

const NavBar = () => {
    return (
        <div className="w-full h-[10%] flex justify-between">
            <div className="w-[40%] h-full flex items-center justify-around">
                <div className="flex  w-[20%] h-full items-center justify-evenly cursor-pointer">
                    <p>Features</p> 
                    <img src={arrowDown} alt="" className="w-2.5 h-2.5 pt-1"/>
                </div>
                <div className="flex  w-[20%] h-full items-center justify-evenly cursor-pointer">
                    <p>Company</p> 
                    <img src={arrowDown} alt="" className="w-2.5 h-2.5 pt-1"/>
                </div>
                <p className="cursor-pointer">Carrers</p>
                <p className="cursor-pointer">About</p>
            </div>

            <div className="w-[20%] h-full flex justify-evenly items-center cursor-pointer">
                <p className="cursor-pointer">Login</p>
                <p className="border border-black py-2 px-5 rounded-2xl cursor-pointer">Register</p>
            </div>
        </div>
    )
}

export default NavBar;