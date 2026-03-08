import { useState } from "react"

const Container = () => {
    const [days, setDays] = useState(0)
    const [months, setMonths] = useState(0)
    const [years, setYears] = useState(0)
    const [finalDays, setFinalDays] = useState(0)
    const [finalMonths, setFinalMonths] = useState(0)
    const [finalYears, setFinalYears] = useState(0)

    const handleClick = (e) => {
        e.preventDefault()
        const date = new Date()

        const currentYears = date.getFullYear()
        const currentMonths = date.getMonth()
        const currentDay = date.getDate()

        let finalsYears = currentYears - years
        let finalsMonths = currentMonths - months
        let finalsDays = currentDay - days

        if (finalsDays < 0) {
            finalsMonths -= 1
            finalsDays += 30
        }
        if (finalsMonths < 0) {
            finalsYears -= 1
            finalsMonths += 12
        }

        setFinalDays(finalsDays)
        setFinalMonths(finalsMonths)
        setFinalYears(finalsYears)
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-[#f0f0f0]">
            <div className="w-[40%] h-[65%] bg-white rounded-2xl rounded-b-r flex items-center justify-center">
                <div className="w-[90%] h-[90%]">
                    <form className="w-full h-[30%]">
                        <div className="w-full flex">
                            <div className="w-[25%]">
                                <p className="pb-3 text-[#717171] letter-spacing">DAY</p>
                                <input type="number" placeholder="DD" className="border-[#717171] border max-w-[90%] pl-4 pr-5 py-3 rounded-xl font-black" name="day" onChange={(e) => {setDays(e.target.value); console.log(days)}}/>
                            </div>
                            <div className="w-[25%]">
                                <p className="pb-3 text-[#717171] letter-spacing">MONTH</p>
                                <input type="number" placeholder="MM" className="border-[#717171] border max-w-[90%] pl-4 pr-5 py-3 rounded-xl font-black" name="month" onChange={(e) => {setMonths(e.target.value); console.log(months)}}/>
                            </div>
                            <div className="w-[25%]">
                                <p className="pb-3 text-[#717171] letter-spacing">YEAR</p>
                                <input type="number" placeholder="YYYY" className="border-[#717171] border max-w-[90%] pl-4 pr-5 py-3 rounded-xl font-black" name="year" onChange={(e) => {setYears(e.target.value); console.log(years)}}/>
                            </div>
                        </div>
                        <div className="w-full flex items-center">
                            <div className="w-full h-0.5 bg-[#EDEDED] mb-4"></div>
                            <button className="rounded-[50%] bg-[#864dfe] mb-4" onClick={handleClick}>
                                <img src="/icon-arrow.svg" className="p-5"/>
                            </button>
                        </div>
                    </form>
                    <div className="w-full mt-15">
                        <div className="w-full h-20 flex">
                            <p className="text-7xl letter-spacing text-[#844dff]">{finalYears === 0 ? "--" : `${finalYears}`}</p>
                            <h1 className="text-7xl letter-spacing font-black">years</h1>
                        </div>
                        <div className="w-full h-20 flex">
                            <p className="text-7xl letter-spacing text-[#844dff]">{finalMonths === 0 ? "--" : `${finalMonths}`}</p>
                            <h1 className="text-7xl letter-spacing font-black">months</h1>
                        </div>
                            <div className="w-full h-20 flex">
                            <p className="text-7xl letter-spacing text-[#844dff]">{finalDays === 0 ? "--" : `${finalDays}`}</p>
                            <h1 className="text-7xl letter-spacing font-black">days</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container;