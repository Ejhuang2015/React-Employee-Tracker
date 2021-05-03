import React, { useState } from "react";
import Users from './Users';

function Search() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <div className="searchBar">
                <input
                    type="text"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                />
                <button onClick={() => setSearch("")}>
                    X
                </button>
            </div>

            <div className="results">
                <Users filter={search} />
            </div>
        </div>
    );
}

export default Search
