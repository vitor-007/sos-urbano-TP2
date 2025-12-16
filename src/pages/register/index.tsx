import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseConfig";

type RegisterForm = {
  completeName: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterForm>({
    completeName: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterForm, string>>>({});
  const [loading, setLoading] = useState(false);

  const isValid = useMemo(() => {
    // validação rápida só para habilitar/desabilitar botão
    return (
      form.completeName.trim().length >= 3 &&
      /^\S+@\S+\.\S+$/.test(form.email) &&
      /^\d{11}$/.test(form.cpf.replace(/\D/g, "")) &&
      form.phone.replace(/\D/g, "").length >= 10 &&
      form.password.length >= 6 &&
      form.password === form.confirmPassword
    );
  }, [form]);

  function validateAll() {
    const e: Partial<Record<keyof RegisterForm, string>> = {};

    if (form.completeName.trim().length < 3) e.completeName = "Informe seu nome completo";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "E-mail inválido";
    if (!/^\d{11}$/.test(form.cpf.replace(/\D/g, ""))) e.cpf = "CPF deve ter 11 dígitos";
    if (form.phone.replace(/\D/g, "").length < 10) e.phone = "Telefone inválido";
    if (form.password.length < 6) e.password = "Mínimo 6 caracteres";
    if (form.confirmPassword !== form.password) e.confirmPassword = "As senhas não conferem";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validateAll()) return;

    setLoading(true);
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      if (cred.user && form.completeName.trim()) {
        await updateProfile(cred.user, { displayName: form.completeName.trim() });
      }
      navigate("/login");
    } catch (err: any) {
      const code: string | undefined = err?.code;
      let message = "Não foi possível cadastrar.";
      if (code === "auth/email-already-in-use") message = "E-mail já cadastrado.";
      else if (code === "auth/invalid-email") message = "E-mail inválido.";
      else if (code === "auth/weak-password") message = "Senha muito fraca (mín. 6).";
      alert(message);
    } finally {
      setLoading(false);
    }
  }

  const set = (k: keyof RegisterForm) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Cadastrar-se</h1>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <input
            className={styles.input}
            type="text"
            placeholder="Nome Completo"
            value={form.completeName}
            onChange={(e) => set("completeName")(e.target.value)}
          />
          {errors.completeName && <span className={styles.error}>{errors.completeName}</span>}

          <input
            className={styles.input}
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <input
            className={styles.input}
            type="text"
            placeholder="CPF"
            value={form.cpf}
            onChange={(e) => set("cpf")(e.target.value)}
          />
          {errors.cpf && <span className={styles.error}>{errors.cpf}</span>}

          <input
            className={styles.input}
            type="tel"
            placeholder="Telefone"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}

          <input
            className={styles.input}
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={(e) => set("password")(e.target.value)}
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}

          <input
            className={styles.input}
            type="password"
            placeholder="Confirmar Senha"
            value={form.confirmPassword}
            onChange={(e) => set("confirmPassword")(e.target.value)}
          />
          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}

          <button className={styles.button} type="submit" disabled={loading || !isValid}>
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>

          <div className={styles.meta}>
            <span>Já tem uma conta?</span>{" "}
            <Link to="/login" className={styles.link}>Entrar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
