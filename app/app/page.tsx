// app/app/page.tsx
import HomePage from "../page";

export const dynamic = "force-dynamic";

export default function AppHome() {
  // Reaproveita a mesma Home (caminhões) como área interna pós-login
  return <HomePage />;
}
