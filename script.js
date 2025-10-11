// Interações básicas + placeholders de checkout/login
const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

function handleCheckout(plan){
  // Placeholder de integração Mercado Pago (substituir com suas credenciais/links)
  const links = {
    free: 'https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=SEU_ID_FREE',
    premium: 'https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=SEU_ID_PREMIUM'
  };
  const url = links[plan];
  if(!url){ alert('Plano inválido.'); return false; }
  window.location.href = url;
  return false;
}

function handleLogin(e){
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('password').value.trim();
  if(!email || !pass){ alert('Preencha e-mail e senha.'); return false; }
  // Simulação de login – futuramente: OAuth Google (Firebase/Auth0)
  alert('Login realizado (demo). Bem-vindo à OTIAdriver!');
  return false;
}
