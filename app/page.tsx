import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="text-center mt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Bem-vindo à{" "}
          <span className="bg-gradient-to-r from-blue-800 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
            OTIAdriver
          </span>
        </h1>

        <p className="mt-4 text-2xl md:text-3xl font-extrabold text-gray-900">
          Conhecimento Inteligente para Motoristas
        </p>
      </main>
    </>
  );
}
