import React from "react";
import IconSearch from "../icons/search";

import './style.scss';

class SearchInput extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return  <div className={"chat-searcInput "+this.props.className}>
                    <IconSearch />
                    <input className="chat-searcInput_field" type="text" placeholder="Поиск" />
                </div>
    }
}

export default SearchInput;