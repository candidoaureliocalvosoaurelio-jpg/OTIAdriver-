import type { Lang } from "./useLang";

export type TranslationDict = Record<string, string>;
export type TranslationsMap = Record<Lang, TranslationDict>;

export const translations: TranslationsMap = {
  pt: {
    "brand.officialPlatform": "Plataforma Oficial",

    "nav.home": "Início",
    "nav.purpose": "Propósito",
    "nav.electricTrucks": "Caminhões Elétricos ⚡",
    "nav.plans": "Planos",
    "nav.tires": "Pneus",
    "nav.inspectionMaintenance": "Inspeção e Manutenção",
    "nav.training": "Treinamentos",
    "nav.dashboardSymbols": "Símbolos do Painel",
    "nav.ebook": "Ebook Driver Economy",

    "nav.openMenu": "Abrir menu",
    "nav.closeMenu": "Fechar menu",
  },

  en: {
    "brand.officialPlatform": "Official Platform",

    "nav.home": "Home",
    "nav.purpose": "Purpose",
    "nav.electricTrucks": "Electric Trucks ⚡",
    "nav.plans": "Plans",
    "nav.tires": "Tires",
    "nav.inspectionMaintenance": "Inspection & Maintenance",
    "nav.training": "Training",
    "nav.dashboardSymbols": "Dashboard Symbols",
    "nav.ebook": "Driver Economy Ebook",

    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
  },

  es: {
    "brand.officialPlatform": "Plataforma Oficial",

    "nav.home": "Inicio",
    "nav.purpose": "Propósito",
    "nav.electricTrucks": "Camiones Eléctricos ⚡",
    "nav.plans": "Planes",
    "nav.tires": "Neumáticos",
    "nav.inspectionMaintenance": "Inspección y Mantenimiento",
    "nav.training": "Entrenamientos",
    "nav.dashboardSymbols": "Símbolos del Panel",
    "nav.ebook": "Ebook de Economía del Conductor",

    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",
  },
};
