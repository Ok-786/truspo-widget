import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setResults, setSelectedResult, selectedResult, refresh, setRefresh }) => {
    return (
        <div className="results-list">
            {results.map((result, id) => {
                return <SearchResult result={result} setResults={setResults} key={id} setSelectedResult={setSelectedResult} selectedResult={selectedResult} setRefresh={setRefresh} refresh={refresh} />;
            })}
        </div>
    );
};