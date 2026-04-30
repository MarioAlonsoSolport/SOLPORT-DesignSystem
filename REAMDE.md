# 🎨 @my-org/shared-ui

Repositorio compartido de **estilos globales y componentes UI** reutilizables.

Este paquete está diseñado para ser consumido por múltiples aplicaciones (monorepo o repos independientes), centralizando:

* 🎨 Estilos globales (`globals.css`)
* 🧩 Componentes React
* ⚙️ Configuración base de Tailwind

---

## 🗂️ Estructura

```bash
src/
├── components/        # Componentes reutilizables
├── styles/
│   └── globals.css    # Estilos globales (Tailwind + custom)
├── index.ts           # Exportaciones de componentes
tailwind.config.js     # Config compartida de Tailwind
```

---

## 📦 Build del paquete

Antes de usar este paquete en otros repos:

```bash
pnpm install
pnpm build
```

Esto genera la carpeta:

```bash
dist/
```

---

## 📤 Exports (IMPORTANTE)

Asegúrate de que tu `package.json` tiene esto:

```json
{
  "name": "@my-org/shared-ui",
  "version": "0.1.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": "./dist/index.js",
    "./globals.css": "./src/styles/globals.css",
    "./tailwind": "./tailwind.config.js"
  }
}
```

---

# 🔗 Cómo usar este paquete en otro repositorio

## ✅ OPCIÓN 1 — Link local (recomendado en desarrollo)

### 1. En este repo (shared-ui)

```bash
pnpm build
pnpm link --global
```

---

### 2. En el repo consumidor (ej: web)

```bash
pnpm link --global @my-org/shared-ui
```

---

## ✅ OPCIÓN 2 — Instalación por ruta local

Desde el repo consumidor:

```bash
pnpm add ../ruta/a/shared-ui
```

---

## 🎨 Uso en el proyecto consumidor

### 1. Importar estilos globales

En tu app (ej: `main.tsx`, `layout.tsx`):

```ts
import '@my-org/shared-ui/globals.css';
```

---

### 2. Configurar Tailwind

En `tailwind.config.js` del proyecto consumidor:

```js
module.exports = {
  presets: [require('@my-org/shared-ui/tailwind')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@my-org/shared-ui/**/*.{js,ts,jsx,tsx}'
  ],
};
```

---

### 3. Usar componentes

```tsx
import { Button } from '@my-org/shared-ui';

<Button>Click</Button>
```

---

## 🔁 Flujo de trabajo recomendado

Cada vez que cambies algo en `shared-ui`:

```bash
pnpm build
```

👉 Los cambios se reflejarán automáticamente en el repo consumidor si usas `link`

---

## ⚠️ Problemas comunes

### ❌ No encuentra globals.css

* Revisar `exports` en `package.json`
* Asegurarse de usar:

```ts
import '@my-org/shared-ui/globals.css';
```

---

### ❌ Estilos no aplicados

* Asegurar que Tailwind incluye:

```js
'./node_modules/@my-org/shared-ui/**/*.{js,ts,jsx,tsx}'
```

---

### ❌ Errores de dependencias infinitas

* No instalar el paquete dentro de sí mismo
* Evitar rutas incorrectas tipo:

```bash
pnpm add ./ (dentro del mismo repo)
```

---

### ❌ Git errores con node_modules

Añadir `.gitignore`:

```bash
node_modules
dist
```

---

## 🚀 Objetivo

Centralizar diseño y UI para:

* Mantener consistencia visual
* Evitar duplicación
* Escalar fácilmente múltiples aplicaciones

---

## 📄 Licencia

MIT
