
import "./SearchResult.css";
import { Avatar } from "@mui/material";

export const SearchResult = ({ result, setSelectedResult, setResults, selectedResult, refresh, setRefresh }) => {
    
    const performNavigation = async () => {
        setResults('')
        localStorage.setItem('companyName', JSON.stringify(result))
        setRefresh && setRefresh(!refresh)
        console.log('result12')
        console.log(result)
        setSelectedResult(result && result.domain)
        console.log('resppp')
        // navigate(`/${result.domain}`)
        window.location.replace(`https://truspo.com/reviews/${result.domain}`)
    }
    return (
        <div
            className="search-result"
            onClick={() => performNavigation()}
        >
            <ul style={{ listStyleType: 'none', display: 'flex', textDecoration: 'none', justifyContent: 'space-between' }}>
                <li style={{ width: '100%', display: 'flex', alignItems: 'center', }}>
                    <Avatar><img src={result.icon} alt="logo" /></Avatar>
                    <h6>{result.name}</h6>
                </li>
                <li>{result.domain}</li>
            </ul>
        </div>
    );
};