// Substitua a função requestOtp por esta:
async function requestOtp() {
  setMsg(null); // ✅ Isso limpa o erro da tarja azul da foto

  if (cpfDigits.length !== 11) return setMsg("CPF inválido. Digite 11 números.");
  if (phoneDigits.length < 10) return setMsg("Celular inválido. Digite com DDD.");

  setLoading(true);
  try {
    const r = await fetch("/api/auth/request-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cpf: cpfDigits,
        phone: phoneE164, 
      }),
    });

    const data = await r.json().catch(() => ({}));
    if (!r.ok) return setMsg(data?.error || "Erro ao enviar código.");

    setStep("verify");
    setCooldown(30);
    setMsg("Código enviado por SMS!");
  } catch (err) {
    setMsg("Erro de conexão.");
  } finally {
    setLoading(false);
  }
}
