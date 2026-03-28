# 📚 Pseudo-clases en CSS

Las **pseudo-clases** se escriben con **`:algo`** y aplican estilos según el **estado** o la **posición** del elemento en el documento.

> En otra lección vemos los **pseudo-elementos** (`::before`, `::after`, etc.).

## 🎯 Objetivos de la clase

- Entender qué son las **pseudo-clases**
- Aplicar efectos **interactivos**
- Mejorar la **experiencia visual** y la accesibilidad
- Crear detalles de diseño **profesionales**

## 🧠 Idea clave

CSS no solo “pinta” elementos estáticos: puede reaccionar a **estados** (`:hover`, `:focus`) y a la **estructura** (`:first-child`, `:nth-child`).

## 🧩 Diferencia principal

| Tipo              | Qué hace                          |
| ----------------- | --------------------------------- |
| **Pseudo-clases** | Estilos según estado o posición   |
| **Pseudo-elementos** | Partes nuevas del elemento (`::`) |

## 🎯 Pseudo-clases comunes

Se escriben con **`:algo`**.

### 🖱️ 1️⃣ `:hover` — cuando pasamos el mouse

La más famosa.

```css
button:hover {
  background: black;
  color: white;
}
```

🎯 El botón cambia al pasar el cursor.

### ✨ Ejemplo con transición

```css
.card {
  transition: 0.3s;
}

.card:hover {
  transform: scale(1.05);
}
```

👉 La tarjeta crece suavemente. Parece una animación compleja; son **pocas líneas**.

### 🖱️ 2️⃣ `:active` — mientras hacemos clic

```css
button:active {
  transform: scale(0.95);
}
```

💡 Sensación de botón **presionado**.

### ⌨️ 3️⃣ `:focus` — cuando un input está enfocado

```css
input:focus {
  border: 2px solid blue;
  outline: none;
}
```

🎯 Mejora la experiencia de **formularios** (y conviene no quitar el foco sin reemplazo accesible).

### 🔗 4️⃣ Estados de enlaces

```css
a:link    { color: blue; }
a:visited { color: purple; }
a:hover   { color: red; }
a:active  { color: green; }
```

### 🧱 5️⃣ `:first-child`

Selecciona el **primer hijo** dentro de su padre.

```css
li:first-child {
  color: red;
}
```

### 🧱 6️⃣ `:last-child`

```css
li:last-child {
  font-weight: bold;
}
```

### 🧠 7️⃣ `:nth-child()` — por posición

```css
li:nth-child(2) {
  color: blue;
}
```

### 🎨 Filas pares e impares (tabla)

```css
tr:nth-child(even) {
  background: #f2f2f2;
}
```

🔥 Tabla con aspecto **pro** en segundos.

## 🎓 Resumen

- **`:hover`**, **`:active`**, **`:focus`** → interacción y formularios.
- **`:link`**, **`:visited`** → enlaces.
- **`:first-child`**, **`:last-child`**, **`:nth-child()`** → selección por posición.
