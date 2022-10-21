import Histogram from 'react-chart-histogram';


export const SolarHistogram = ({dataX, dataY}) => {

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