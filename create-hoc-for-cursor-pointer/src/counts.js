import { useEffect, useState } from "react"

const DataFetch = ({ render, url }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (url.search("desserts")) {
            setData(['cake', 'ice creame', 'watalappam', 'pudin']);
        } else {
            setData(['mango', 'papaya', 'apple']);
        }


    }, []);

    return render(data);

}

export const DrinkCount = () => {
    return (
    <DataFetch 
        url='https://littlelemon/desserts'
        render={(data) => (<p> {data.length} dessrts</p>)} 
        />
    );
}

export const DessertCount = () => {
    return (<DataFetch url="https://littlelemon/drinks" render={(data) =>
        (<p>{data.length} drinks</p>)
    } />);
}