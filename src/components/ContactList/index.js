import React from "react";

import './style.scss';

class ContactList extends React.Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            contacts: props.contacts ? props.contacts : []
        };
    }

    render () {

        const {onChatSelect} = this.props;

        return (
            <div>
                {
                    this.state.contacts.map((contact, i)=>(
                        <div className="chat-contact" key={i} onClick={()=>onChatSelect(contact.id)}>
                            {
                                contact.img ? (
                                    <img className="chat-contact_avatar" src={contact.img} alt={contact.name} />
                                ):(
                                    <div className="chat-contact_avatar">
                                        {contact.name[0].toUpperCase()}
                                    </div>
                                )
                            }
                            
                            <div className="chat-contact_info chat-contactInfo">
                                <p className="chat-contactInfo_name">{contact.name}</p>
                                <p className={"chat-contactInfo_lastMessage"+(contact.unreadedMessageCount > 0 ? " chat-contactInfo_lastMessage__unreaded" : "")}>{contact.lastMessage}</p>
                            </div>
                            <div className="chat-contact_messageInfo chat-messageInfo">
                                <p className="chat-messageInfo_time">{contact.lastMessageTime}</p>
                                {
                                    contact.unreadedMessageCount > 0 ? (
                                        <p className="chat-messageInfo_count">{contact.unreadedMessageCount}</p>
                                    ):(
                                        ""
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default ContactList;