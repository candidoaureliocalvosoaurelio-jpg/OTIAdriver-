import { Suspense } from "react";
import EntrarClient from "./EntrarClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function EntrarPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <EntrarClient />
    </Suspense>
  );
}
