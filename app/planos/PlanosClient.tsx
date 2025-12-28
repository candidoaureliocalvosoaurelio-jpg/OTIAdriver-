"use client";

type Plano = "basico" | "pro" | "premium";

export default function PlanosClient({ cpf }: { cpf: string }) {
  async function assinarPlano(plano: Plano) {
    try {
      const res = await fetch("/api/pagamentos/criar-preferencia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpf, plano }),
      });

      const data = await res.json();

      if (!res.ok || (!data?.init_point && !data?.sandbox_init_point)) {
        throw new Error(data?.error || "Erro ao iniciar pagamento");
      }

      const redirectUrl =
        data.init_point || data.sandbox_init_point;

      window.location.href = redirectUrl;
    } catch (err: any) {
      alert(err?.message || "Não foi possível iniciar o pagamento.");
    }
  }

  return (
    <>
      {/* BÁSICO */}
      <button onClick={() => assinarPlano("basico")}>
        Assinar Básico
      </button>

      {/* PRO */}
      <button onClick={() => assinarPlano("pro")}>
        Assinar PRO
      </button>

      {/* PREMIUM */}
      <button onClick={() => assinarPlano("premium")}>
        Assinar Premium
      </button>
    </>
  );
}
