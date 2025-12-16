import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});
  const [loading, setLoading] = useState(false);

  function validate() {
    const e: typeof errors = {};
    if (!form.email) e.email = "E-mail é obrigatório";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "E-mail inválido";

    if (!form.password) e.password = "Senha é obrigatória";
    else if (form.password.length < 6) e.password = "Mínimo 6 caracteres";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, form.email, form.password);
      if (cred.user) {
        navigate("/");
      }
    } catch (err: any) {
      let message = "Falha ao entrar. Tente novamente.";
      const code: string | undefined = err?.code;
      if (code === "auth/invalid-credential" || code === "auth/wrong-password") message = "E-mail ou senha incorretos.";
      else if (code === "auth/too-many-requests") message = "Muitas tentativas. Tente mais tarde.";
      else if (code === "auth/user-not-found") message = "Usuário não encontrado.";
      setErrors((p) => ({ ...p, general: message }));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Entrar</h1>
        {errors.general && <div className={styles.alert}>{errors.general}</div>}

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <input
            className={styles.input}
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <input
            className={styles.input}
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}

          <button className={styles.button} type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <div className={styles.meta}>
            <span>Ainda não tem conta?</span>{" "}
            <Link to="/register" className={styles.link}>
              Cadastrar-se
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
