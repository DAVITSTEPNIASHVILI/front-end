import databiz from "../images/client-databiz.svg";
import audio from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";
import hero from "../images/image-hero-desktop.png";
const Main = () => {
    return (
        <div className="w-full h-[90%] flex">
            <div className="w-[50%] h-full flex items-end">
                <div className="w-full h-[85%] flex flex-col justify-around">
                    <h1 className="text-6xl font-black">Make <br /> remote work</h1>
                    <p className="text-gray-400">Get your team in sync, no matter your location. <br />
                        Streamline processes, create team rituals, and <br />
                        watch productivity soar.
                    </p>
                    <p className="bg-black rounded-2xl w-45 p-4 text-center text-white">Learn More</p>
                    <div className="w-[80%] flex justify-between">
                        <img src={databiz} />
                        <img src={audio} />
                        <img src={meet} />
                        <img src={maker} />
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src={hero} className="w-[70%] h-[85%]"/>
            </div>
        </div>
    )
}

export default Main;