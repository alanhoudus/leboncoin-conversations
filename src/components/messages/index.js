import './messages.scss';

const Messages = () => (
  <div className="messages">
    <div className="messages-sender">
      <div className="messages-sender--name">Jean</div>
      <div className="messages-sender--message">Premier message de la conversation</div>
    </div>
    <div className="messages-recipient">
      <div className="messages-recipient--name">Pierre</div>
      <div className="messages-recipient--message">Second message de la conversation</div>
    </div>
    <div className="messages-recipient">
      <div className="messages-recipient--name">Pierre</div>
      <div className="messages-recipient--message">Second message de la conversation</div>
    </div>
    <div className="messages-sender">
      <div className="messages-sender--name">Jean</div>
      <div className="messages-sender--message">Premier message de la conversation</div>
    </div>
    <div className="messages-sender">
      <div className="messages-sender--name">Jean</div>
      <div className="messages-sender--message">Premier message de la conversation</div>
    </div>
  </div>
);

export default Messages;
