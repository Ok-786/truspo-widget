import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

import "./SearchBar.css";
// import { useNavigate } from "react-router-dom";
import DomainIcon from '@mui/icons-material/Domain';

export const SearchBar = ({ setResults, setSelectedResult, refresh, setRefresh }) => {
    const [input, setInput] = useState("");
    // const navigate = useNavigate();
    const fetchData = (value) => {
        setResults && fetch(`https://api.brandfetch.io/v2/search/${value}`)
            .then((response) => response.json())
            .then((json) => {
                const results = json.filter && json.filter((user) => {
                    return (
                        value &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(value)
                    );
                });
                setResults(results);
                console.log('results')
                console.log(results)
            });
    };


    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };


    const handleKeyUp = (e) => {
        // console.log('refresh')
        // console.log(refresh)
        // console.log(setRefresh)
        // console.log('sfsdfsdfsdfsdfsdfsfsdfsdf')
        // console.log(e)
        if (e.key == "Enter") {
            // console.log('sfsdfsdfsdfsdfsdfsfsdfsdf11111')
            // console.log(setResults)
            setSelectedResult(input);
            // fetchData(input)
            setResults('');
            localStorage.setItem('companyName', JSON.stringify(input));
            setSelectedResult(input);
            setRefresh && setRefresh(!refresh);
            console.log('refresh111');
            console.log(refresh);
            setResults('')
            if (input.includes(".com")) {
                window.location.replace(`https://truspo.com/reviews/${input}`)
            } else {
                window.location.replace(`https://truspo.com/reviews/${input}.com`)
            }
            setResults('')
        }
    };


    return (
        <div className="input-wrapper">
            <DomainIcon />
            <input
                placeholder="Search Companies..."
                value={input}
                width={'100%'}
                onChange={(e) => handleChange(e.target.value)}
                onSubmit={(e) => console.log('adadadad')}
                onKeyUp={handleKeyUp}
            />
        </div>
    );
};