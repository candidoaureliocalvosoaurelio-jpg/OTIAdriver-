import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "OTIAdriver – Conhecimento Inteligente Avançado",
  description: "IA e inovação digital para motoristas profissionais – OTIAdriver Global.",
};

export default function Home() {
  return (
    <main>
      <Header />
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Bem-vindo à OTIAdriver</h1>
        <p>Conhecimento Inteligente para Motoristas 🚛💡</p>
      </section>
      <Footer />
    </main>
  );
}
