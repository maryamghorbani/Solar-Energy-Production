import Histogram from 'react-chart-histogram';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const SolarHistogram = () => {
    const [dataX, setDataX] = useState([]);
    const [dataY, setDataY] = useState([]);
    useEffect(() => {
        axios.get('https://dashboard.elering.ee/api/system/with-plan?start=2022-10-21T00:00Z&end=2022-10-22T00:00Z')
      .then(function (response) {
        const mergeResult = [...response.data.data.real, ...response.data.data.plan];
        setDataX(mergeResult.map(item => item.timestamp));
        setDataY(mergeResult.map(item => item.production_renewable));
      })
      .catch(function (error) {
        console.log(error);
      });

    }, [])
    

    const options = { fillColor: '#059669', strokeColor: '#059669' };
    return(
        <>
            <div className="flex justify-center py-24">
                <Histogram
                    xLabels={dataX}
                    yValues={dataY}
                    width='1100'
                    height='900'
                    options={options}
                />
            </div>
        </>
    )
}