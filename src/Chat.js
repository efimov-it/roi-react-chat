import React from "react";

import SearchInput from "./components/SearchInput";
import ContactList from "./components/ContactList";
import ChatView from './components/ChatView';
import MessageSerch from "./components/MessageSearch";

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

    // componentDidUpdate () {
    //     console.log(this.state);
    // }

    selectChat (chatId) {
        this.setState(state=>state.selectedChat = chatId);
    }

    attachments () {
        alert("Прикрепить файлы");
    }

    sendMessage (text) {
        const currentTime = new Date();
        this.setState(state=>{
            state.chats.find(chat=>chat.id === state.selectedChat)
            .messages.splice(0, 0, {
                type: "rm",
                text,
                date: currentTime.getHours()+":"+currentTime.getMinutes(),
                isReaded: false
            });

            return state;
        })
    }

    changeMessageSerchState (searchState) {
        this.setState(state=>state.isMessageSearchActive = searchState);
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
                    <ChatView
                        className="chat-Area"
                        chatData={chats.find(chat=>chat.id===selectedChat)}
                        onMessageSearchClick={()=>this.changeMessageSerchState(true)}
                        onAttachment={()=>this.attachments()}
                        onSend={(text)=>this.sendMessage(text)} />
                )}
                <MessageSerch
                    className={"chat-MessageSearch"+(isMessageSearchActive ? " chat-MessageSearch__active" : "")}
                    onClose={()=>this.changeMessageSerchState(false)}
                />
            </div>
        );
    }
}

export default Chat;
