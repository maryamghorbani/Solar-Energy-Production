import { DateInput } from "../component/DateInput"
import { SolarHistogram } from "../component/SolarHistogram"
import axios from 'axios';
import { useEffect, useState } from 'react';

export const HomePage = () => {
    const [dataX, setDataX] = useState([]);
    const [dataY, setDataY] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        if(startDate === ''){
            var sd = new Date();
            var ed = new Date();
            sd.setHours(sd.getHours() - 4);
            ed.setHours(ed.getHours() + 4);
            setStartDate(sd.toISOString());
            setEndDate(ed.toISOString());
        }else{
            axios.get(`https://dashboard.elering.ee/api/system/with-plan?start=${startDate}&end=${endDate}`)
            .then(function (response) {
            const mergeResult = [...response.data.data.real, ...response.data.data.plan];
            setDataX(mergeResult.map(item => new Date(item.timestamp * 1000).toLocaleString()));
            setDataY(mergeResult.map(item => item.production_renewable));
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }, [startDate, endDate]);

    return(
        <>
        {startDate === '' ? <></> :
            (<><h1 className="text-3xl text-emerald-600 font-bold py-10">Solar Energy Production</h1><DateInput setStartDate={setStartDate} setEndDate={setEndDate} startDate={startDate} endDate={endDate} /><SolarHistogram dataX={dataX} dataY={dataY} /></>)
    }
        </>
    )
}