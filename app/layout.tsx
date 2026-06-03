export const dynamic = "force-dynamic";
import "./globals.css";
import { AppShell } from "@/components/ui/AppShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/cita", label: "Citas" }, { href: "/especialidad", label: "Especialidad" }, { href: "/horario", label: "Horario" }, { href: "/paciente", label: "Pacientes" }, { href: "/profesional", label: "Profesionales" }];

export const metadata = { title: "Sistema de Agenda de Citas", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AppShell items={NAV} title="Sistema de Agenda de Citas">{children}</AppShell>
      </body>
    </html>
  );
}
