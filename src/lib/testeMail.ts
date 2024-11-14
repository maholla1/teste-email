"use server";
import { compileWelcomeTemplate, sendMail } from "./mail";

export const send = async (email: string, fullName: string) => {
    const firstName = fullName.split(" ")[0]; // Extrai o primeiro nome
    await sendMail({
      to: email,
      name: firstName,
      subject: "Test Mail",
      body: compileWelcomeTemplate(firstName, "github.com/maholla1/teste-email"),
    });
  };