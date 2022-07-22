import React from "react";

import SearchInput from "../SearchInput";
import CloseIcon from "../icons/close";

import './style.scss';

class MessageSerch extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            messages: [
                {
                    date: "12.06.22",
                    text: "Прислали вам новый <b>заказ № 123</b>"
                },
                {
                    date: "12.06.22",
                    text: "Прислали вам новый <b>заказ № 123</b>"
                },
                {
                    date: "12.06.22",
                    text: "Прислали вам новый <b>заказ № 123</b>"
                }
            ]
        };
    }

    closeSaerch() {
        this.props.onClose();
    }

    render () {
        return (
            <div className={this.props.className}>
                <header className="chat-messageSearchHeader">
                    <p className="chat-messageSearchHeader_title">Поиск сообщений</p>
                    <button
                        className="chat-messageSearchHeader_closeBtn"
                        onClick={()=>this.closeSaerch()}
                        title="Закрыть поиск"
                    >
                        <CloseIcon />
                    </button>
                </header>
                <div className="chat-messageSearchInput">
                    <SearchInput />
                </div>
                <div className="chat-messageSearchResults">
                    {
                        this.state.messages.map((message, i)=>(
                            <div className="chat-messageSearchResults_item chat-messageSearchResult" key={i}>
                                <p className="chat-messageSearchResult_date">{message.date}</p>
                                <p className="chat-messageSearchResult_text" dangerouslySetInnerHTML={{__html: message.text}} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default MessageSerch;