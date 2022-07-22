import React from "react";
import './style.scss';

import Message from "../Message";

import IconSearch from "../icons/search";
import AttachmentsIcon from '../icons/attachment';
import SendIcon from '../icons/send';

class ChatView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            messageText: ""
        };

        this.messageInput = React.createRef();
    }

    messageWrite = (e) => {
        this.setState(state=>state.messageText = e.target.value);
    }

    messageSend = () => {
        const {messageText} = this.state;
        if (messageText.length > 0) {
            const text = this.state.messageText;
            this.setState(state=>state.messageText = "", () => {
                this.props.onSend(text);
            });
        }
        else {
            this.messageInput.current.focus();
        }
    }

    enterToSend = (e) => {
        if(e.keyCode == 13) {
            this.messageSend();
        }
    }

    openMessageSearch = () => {
        this.props.onMessageSearchClick();
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
                    <button
                        className="chat-viewHeader_searchButton"
                        title="Поиск по сообщениям"
                        onClick={()=>this.openMessageSearch()}
                    >
                        <IconSearch />
                    </button>
                </header>

                <div className="chat-viewMassages">
                    {
                        chatData.messages.map((message, i)=>(
                            <Message data={message} key={i} />
                        ))
                    }
                </div>

                <div className="chat-viewSendForm">
                    <button
                        className="chat-viewSendForm_attachmentsButton"
                        title="Прикрепить"
                        onClick={()=>this.props.onAttachment()}
                    >
                        <AttachmentsIcon />
                    </button>

                    <input
                        className="chat-viewSendForm_input"
                        type="text"
                        placeholder="Сообщение"
                        onChange={(e)=>this.messageWrite(e)}
                        value={this.state.messageText}
                        ref={this.messageInput}
                        onKeyUp={(e)=>this.enterToSend(e)}
                    />

                    <button
                        className="chat-viewSendForm_sendButton" 
                        title="Отправить"
                        onClick={()=>this.messageSend()}>
                        <SendIcon />
                    </button>
                </div>
            </div>
        )
    }
}

export default ChatView;