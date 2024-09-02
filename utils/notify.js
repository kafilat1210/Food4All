// utils/notify.js
const notifier = require('node-notifier');

const sendNotification = (message) => {
  notifier.notify({
    title: 'Food4All Notification',
    message: message,
  });
};

module.exports = sendNotification;
