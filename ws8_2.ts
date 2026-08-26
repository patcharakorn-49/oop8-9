export
class Notification {
  send(message: string): void {
    console.log(`Notification: ${message}`);
  }
}

class EmailNotification extends Notification {
  override send(message: string): void {
    console.log(`Email Notification: ${message}`);
  }
}

class SMSNotification extends Notification {
  override send(message: string): void {
    console.log(`SMS Notification: ${message}`);
  }
}

class PushNotification extends Notification {
  override send(message: string): void {
    console.log(`Push Notification: ${message}`);
  }
}

const notifications: Notification[] = [
  new EmailNotification(),
  new SMSNotification(),
  new PushNotification()
];

notifications.forEach((notification) => {
  notification.send("Hello Everyone");
});