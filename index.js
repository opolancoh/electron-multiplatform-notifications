function basicNotification() {
    const notification = {
        title: 'Basic Notification',
        body: 'This is a basic Electron notification'
    }
    const myNotification = new window.Notification(notification.title, notification);
}