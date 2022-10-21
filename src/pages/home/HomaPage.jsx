import { SolarHistogram } from "../component/SolarHistogram"

export const HomePage = () => {
    return(
        <>
            <h1 className="text-3xl font-bold">Solar Energy Production</h1>
            <SolarHistogram />
        </>
    )
}