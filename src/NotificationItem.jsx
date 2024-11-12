import React from 'react';

const NotificationItem = ({ notification, onClear }) => {
  return (
    <div className="notification-item">
      <h4>{notification.name}</h4>
      <p>{notification.message}</p>
      <button onClick={() => onClear(notification.id)}>delete</button>
    </div>
  );
};

export default NotificationItem;