"use server";
import { compileWelcomeTemplate, sendMail } from "./mail";

export const send = async (email: string) => {
    await sendMail({
      to: email,
      name: "Pedro",
      subject: "Test Mail",
      body: compileWelcomeTemplate("Pedro", "www.youtube.com/watch?v=sENM2wA_FTg&list=RD5CcZ4ULT1Eo&index=9"),
    });
  };