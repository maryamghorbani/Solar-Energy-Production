import { DateInput } from "../component/DateInput"
import { SolarHistogram } from "../component/SolarHistogram"

export const HomePage = () => {
    return(
        <>
            <h1 className="text-3xl text-emerald-600 font-bold py-10">Solar Energy Production</h1>
            <DateInput />
            <SolarHistogram />
        </>
    )
}