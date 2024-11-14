"use client";
import { useState } from "react";
import { send } from "@/lib/testeMail"; // Importe a função de envio de email

export default function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [passwordFocused, setPasswordFocused] = useState(false); // Novo estado para controle do foco

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const passwordRequirements = {
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const handleSubmit = async () => {
    const newErrors = [];

    if (!fullName) newErrors.push("fullName");
    if (!email) newErrors.push("email");
    if (email && !isValidEmail(email)) newErrors.push("invalidEmail");
    if (!password) newErrors.push("password");
    if (!confirmPassword) newErrors.push("confirmPassword");
    if (password !== confirmPassword) newErrors.push("passwordMismatch");

    setErrors(newErrors);

    if (newErrors.length === 0) {
      // Todos os campos estão preenchidos corretamente, enviando o e-mail
      try {
        await send(email, fullName); // Envia o e-mail com o nome completo do usuário
        alert("Email de confirmação enviado com sucesso!");
      } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        alert("Erro ao enviar o e-mail de confirmação.");
      }
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  const isFieldInvalid = (field: string) => errors.includes(field);
  const isPasswordMismatch = password !== confirmPassword && confirmPassword !== "";

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-1/2 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Cadastro</h2>

        <div className="mb-4">
          <label>Nome</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full p-2 border rounded mt-1 ${isFieldInvalid("fullName") ? "border-red-500" : "border-gray-300"}`}
          />
          {isFieldInvalid("fullName") && (
            <div className="text-red-500 text-sm">Por favor, informe seu nome.</div>
          )}
        </div>

        <div className="mb-4">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border rounded mt-1 ${isFieldInvalid("email") || isFieldInvalid("invalidEmail") ? "border-red-500" : "border-gray-300"}`}
            placeholder="email@exemplo.com"
          />
          {isFieldInvalid("email") && (
            <div className="text-red-500 text-sm">Por favor, informe seu email.</div>
          )}
          {isFieldInvalid("invalidEmail") && (
            <div className="text-red-500 text-sm">Email inválido. Verifique o formato do email.</div>
          )}
        </div>

        <div className="mb-4">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)} // Foco ativado ao clicar no campo
            onBlur={() => setPasswordFocused(false)} // Foco removido ao sair do campo
            className={`w-full p-2 border rounded mt-1 ${isFieldInvalid("password") ? "border-red-500" : "border-gray-300"}`}
          />
        </div>

        <div className="mb-4">
          <label>Repetir Senha</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-2 border rounded mt-1 ${isFieldInvalid("confirmPassword") || isPasswordMismatch ? "border-red-500" : "border-gray-300"}`}
          />
        </div>

        {isPasswordMismatch && (
          <div className="text-red-500 text-sm mb-4">
            As senhas não coincidem.
          </div>
        )}

        {/* Mostrar requisitos de senha apenas quando o usuário começar a digitar */}
        {passwordFocused && (
          <div className="mt-2 p-2 bg-green-100 rounded text-green-700 text-sm">
            <p>
              A senha deve conter:
              <ul className="list-disc pl-5">
                <li className={passwordRequirements.hasUppercase ? "text-green-700" : "text-red-500"}>
                  Uma letra maiúscula
                </li>
                <li className={passwordRequirements.hasLowercase ? "text-green-700" : "text-red-500"}>
                  Uma letra minúscula
                </li>
                <li className={passwordRequirements.hasNumber ? "text-green-700" : "text-red-500"}>
                  Um número
                </li>
                <li className={passwordRequirements.hasSpecialChar ? "text-green-700" : "text-red-500"}>
                  Um caractere especial
                </li>
              </ul>
            </p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-3 rounded w-full mt-4 hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
