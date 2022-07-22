import React from "react";
import './style.scss';

import IconSearch from "../icons/search";
import AttachmentsIcon from '../icons/attachment';
import SendIcon from '../icons/send';

class ChatView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        const {chatData} = this.props;

        return (
            <div className={this.props.className}>
                <header className="chat-viewHeader">
                    <img className="chat-viewHeader_avatar" src={chatData.img} alt=""/>
                    <div className="chat-viewHeader_info">
                        <p className="chat-viewUser">
                            <span className="chat-viewUser_name">{chatData.name}</span>
                            <span className="chat-viewUser_role">{chatData.role}</span>
                        </p>
                        <p className="chat-viewLastTimeOnline">{chatData.lastTimeOnline}</p>
                    </div>
                    <button className="chat-viewHeader_searchButton" title="Поиск по сообщениям">
                        <IconSearch />
                    </button>
                </header>

                <div className="chat-viewMassages">
                    123
                </div>

                <div className="chat-viewSendForm">
                    <button className="chat-viewSendForm_attachmentsButton" title="Прикрепить">
                        <AttachmentsIcon />
                    </button>

                    <input className="chat-viewSendForm_input" type="text" placeholder="Сообщение" />

                    <button className="chat-viewSendForm_sendButton" title="Отправить">
                        <SendIcon />
                    </button>
                </div>
            </div>
        )
    }
}

export default ChatView;