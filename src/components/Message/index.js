import React from "react";

import IsReadedIcon from "../icons/isReaded";

import './style.scss';

class Message extends React.Component {
    render () {
        const data = this.props.data;
        const type = data.type;

        return (
            type === "lm" ? (
                <div className="chat-message">
                    <p className="chat-message_text" dangerouslySetInnerHTML={{__html: data.text}} />
                    <div className="chat-message_info">
                        <span className="chat-messageTime">{data.date}</span>
                    </div>
                </div>
            ) : (
                type === "rm" ? (
                    <div className="chat-message chat-message__right" >
                        <p className="chat-message_text" dangerouslySetInnerHTML={{__html: data.text}} />
                        <div className="chat-message_info">
                            <span className="chat-messageTime">{data.date}</span>
                            {
                                data.isReaded ? (
                                    <IsReadedIcon />
                                ) : (
                                    ""
                                )
                            }
                        </div>
                    </div>
                ) : (
                    type === "i" ? (
                        <div className="chat-message chat-message__info">
                            {data.text}
                        </div>
                    ) : (
                        ""
                    )
                )
            )
        )
    }
}

export default Message;