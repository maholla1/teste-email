"use server";
import { compileWelcomeTemplate, sendMail } from "./mail";

export const send = async (email: string) => {
    await sendMail({
      to: email,
      name: "Pedro",
      subject: "Test Mail",
      body: compileWelcomeTemplate("Pedro", "youtube.com/@sakuradev"),
    });
  };