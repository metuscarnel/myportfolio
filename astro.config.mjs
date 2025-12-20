// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.metuscarnel.fr', // ton nom de domaine
  output: 'static', // très important pour le déploiement statique
});
