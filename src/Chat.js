import React from "react";

import SearchInput from "./components/SearchInput";
import ContactList from "./components/ContactList";
import ChatView from './components/ChatView';

import contactList from './data/contactList';
import chats from "./data/chats";

class Chat extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            selectedChat: -1,
            isMessageSearchActive: false,
            contactsList: contactList,
            chats: chats
        }
    }

    componentDidUpdate () {
        console.log(this.state);
    }

    selectChat (chatId) {
        this.setState(state=>state.selectedChat = chatId);
    }

    render () {
        const {selectedChat, chats, isMessageSearchActive} = this.state;
        
        return (
            <div className="chat-Wrapper">
                <div className="chat-Contacts">
                    <div className="chat-Contacts_search">
                        <SearchInput />
                    </div>
                    <ContactList
                        contacts={this.state.contactsList}
                        onChatSelect={(id)=>this.selectChat(id)}
                    />
                </div>
                {selectedChat === -1 ? (
                    <div className="chat-Area"></div>
                ) : (
                    <ChatView className="chat-Area" chatData={chats.find(chat=>chat.id===selectedChat)} />
                )}
                <div className={"chat-MessageSearch"+(isMessageSearchActive ? "chat-MessageSearch__active" : "")}>
                    123
                </div>
            </div>
        );
    }
}

export default Chat;
