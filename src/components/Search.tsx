import React, { useState } from "react";
import Users from './Users';

function Search() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <div className="searchBar">
                <input
                    type="search"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
                    placeholder="Search by Name"
                />
                {/* <button onClick={() => setSearch("")}>
                    X
                </button> */}
            </div>

            <div className="results">
                <Users filter={search} />
            </div>
        </div>
    );
}

export default Search
