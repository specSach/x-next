import { Header } from "@/components/Header";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4 py-8">{children}</div>
    </div>
  );
}
