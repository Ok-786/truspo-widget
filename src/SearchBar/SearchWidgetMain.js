import { useEffect, useState } from "react";

import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

function SearchWidgetMain({ refresh, setRefresh }) {
    const [results, setResults] = useState([]);
    const [selectedResult, setSelectedResult] = useState([]);
    // console.log('fgfgfghfgfgfghfgfghffgh');
    // console.log(refresh, setRefresh);

    useEffect(() => {

        // console.log('aaaaaa')
        // console.log(selectedResult)
        // selectedResult && localStorage.setItem('companyName', JSON.stringify(selectedResult))
    }, [selectedResult])

    return (
        <div style={{
            // backgroundColor: '#eee',
            paddingTop: '2vh'
            // width: '100vw',
            // height: '100vh'
        }}>
            <div style={{
                // paddingTop: '20vh',
                width: '100%',
                margin: 'auto',
                height: '100%',
                // display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '300px',
            }}>
                <SearchBar setResults={setResults} setSelectedResult={setSelectedResult} refresh={refresh} setRefresh={setRefresh} />
                {results && results.length > 0 && <SearchResultsList results={results} setResults={setResults} setSelectedResult={setSelectedResult} selectedResult={selectedResult} setRefresh={setRefresh} refresh={refresh} />}
            </div>
        </div>
    );
}

export default SearchWidgetMain;