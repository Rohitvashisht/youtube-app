import React, {useState} from 'react';

const SearchBar = ({onSearchSubmit}) => {
    const [term, setTerm] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
    }

    const onInputChange = (e) => {
        setTerm(e.target.value)
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmitHandler}>
                <div className="ui field">
                    <label className="">Video Search</label>
                    <input type="text" onChange={onInputChange} value={term} />
                </div>
            </form>
        </div>
    )
    
}

export default SearchBar;