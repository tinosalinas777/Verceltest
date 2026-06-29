# GT Soluciones — Landing Page

Página oficial de GT Soluciones: fibra óptica, cámaras IP e IVMS.

## 🚀 Deploy en Vercel (pasos)

### Opción A — Vercel CLI (recomendado)
```bash
npm install -g vercel
cd gt-soluciones
npm install
vercel --prod
```

### Opción B — GitHub + Vercel (más fácil)
1. Subir esta carpeta a un repositorio en GitHub
2. Ir a [vercel.com](https://vercel.com) → New Project → Import desde GitHub
3. Vercel detecta automáticamente Create React App
4. Click en **Deploy** — ¡listo!

---

## ⚙️ Personalización obligatoria

### 1. Número de WhatsApp
En `src/components/Contact.js` y `src/components/FloatingButtons.js`:
```js
const WHATSAPP_NUMBER = '5491112345678'; // reemplazar con tu número real
// Formato: código_país + código_área + número (sin + ni espacios)
// Ejemplo Argentina: 5491123456789
```

### 2. Usuario de Instagram
```js
const INSTAGRAM_USER = 'gtsoluciones'; // reemplazar con tu usuario real
```

### 3. Fotos de los CEOs
En `src/components/About.js` reemplazá los componentes `<Avatar>` con etiquetas `<img>`:
```jsx
// En lugar de: <Avatar initials="G" gradient={[...]} />
// Usá:
<img src="/ceo1.jpg" alt="CEO 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```
Colocá las fotos en la carpeta `public/`.

### 4. Nombres de los CEOs
En `src/components/About.js`, editá el array `CEOS`:
```js
{ name: 'Nombre Apellido', role: 'Cargo real', bio: 'Biografía...' }
```

### 5. Ubicación y datos de contacto
En `src/components/Contact.js`, actualizá los ítems de info (ubicación, teléfono, etc.)

---

## 📁 Estructura del proyecto
```
gt-soluciones/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── FiberCanvas.js    ← Animación de fibra óptica (hero bg)
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── About.js          ← Sección CEOs
│   │   ├── Contact.js        ← Formulario + botones sociales
│   │   ├── Footer.js
│   │   └── FloatingButtons.js ← Botones flotantes WhatsApp/Instagram
│   ├── App.js
│   ├── index.js
│   └── index.css
├── vercel.json
└── package.json
```
