import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "__neza Mern project",
};

//TODO:the recipients will be dynamic(like user.email) and the email to be sent to the recipient will an html
// const recipients = [{ email: "anzagwaneza@gmail.com", name: "Anaclet NZG" }];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: `Hey ${recipients[0].name}, Congrats for sending test email with Mailtrap!`,
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
