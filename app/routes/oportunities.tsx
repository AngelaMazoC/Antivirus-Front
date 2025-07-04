
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import ServiceSearchFilters from "../components/ServiceSearchFilters";
import { servicesData } from "../data/servicesData";
import styles from "../styles/services.module.css";
import FiltroOportunidades from "~/components/OportunidadesFilter/OportunitiesFilter";

/**
 * Componente principal para la página de servicios.
 * Muestra una lista de tarjetas de servicios filtradas según los criterios del usuario.
 */
export default function Oportunities() {
  return (
    <section className={styles.background}>
      <FiltroOportunidades />
    </section>
  );
}