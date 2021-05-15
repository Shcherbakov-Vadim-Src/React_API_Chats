import React, { PureComponent } from 'react';
import { getData } from '../helper/api';
import { getDataSub } from '../helper/api';

class Fetch extends PureComponent {
    state = {
        chats: [],
        chatsMassages: [],
        count: ''
    }

    componentDidMount() {
        getData().then((data) => {
            this.setState({ chats: data })
        })
    }

    handleGetId = (chatId) => {
        getDataSub(chatId).then((data) => {
            this.setState({ chatsMassages: data, count: chatId })
        })
    }


    render() {
        return (
            <div className="appConteiner">
                <div className="app" scrolling="yes">
                    <h2>CHATS</h2>
                    {this.state.chats.map((chat) => {
                        return <div className={ this.state.count !== chat.id ? 'chatConteiner': 'chatConteinerSub' } onClick={() => this.handleGetId(chat.id)}>
                            <img src={chat.avatar} className="chatAvatar" />
                            <div>
                                <div className="timeMiniCont">
                                    <p className="chatTitle" key={chat.id}>{chat.title}</p>
                                    <p className="time" align="right">2:09 PM</p>
                                </div>
                                <p className="chatText">There is sometime a conversation...</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className="message">
                    <p className="todayTime">Today, 5:38</p>
                    <hr className="horisontLine" />
                    {this.state.chatsMassages.map((chatsMassage) => {
                        return <div className="userMassege" >
                            <p className="nameUser" key={chatsMassage.id}>{chatsMassage.name}:</p>
                            <p className="textUser">{chatsMassage.text}</p>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default Fetch;