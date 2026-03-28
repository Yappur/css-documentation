# ✨ Pseudo-elementos

Se escriben con **`::algo`** y crean partes **virtuales** del elemento (no existen en el HTML).

## ✍️ 1️⃣ `::first-letter`

```css
p::first-letter {
  font-size: 2rem;
  color: crimson;
}
```

🎯 Estilo tipo **revista** (capitular).

## 📄 2️⃣ `::first-line`

```css
p::first-line {
  font-weight: bold;
}
```

## ➕ 3️⃣ `::before`

Agrega contenido **antes** del contenido del elemento.

```css
h2::before {
  content: "🔥 ";
}
```

Sin tocar el HTML (el texto se define en `content`).

## ➕ 4️⃣ `::after`

Agrega contenido **después**.

```css
h2::after {
  content: " 🚀";
}
```

### Ejemplo en enlaces

```css
a::after {
  content: " ↗";
}
```

👉 Todos los links pueden parecer “externos”.

## 🎨 Subrayado animado profesional

```css
a {
  text-decoration: none;
  position: relative;
}

a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: black;
  transition: width 0.3s;
}

a:hover::after {
  width: 100%;
}
```

💣 Efecto de subrayado animado estilo portfolio.

## 🎯 Botón moderno con brillo

```css
button {
  position: relative;
  overflow: hidden;
}

button::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transition: left 0.4s;
}

button:hover::after {
  left: 100%;
}
```

✨ Efecto “shiny”.

## 🧠 Combinando pseudo-clase + pseudo-elemento

```css
.card:hover::before {
  content: "Nuevo";
  position: absolute;
  background: red;
  color: white;
}
```

**Pseudo-clase** (`:hover`) + **pseudo-elemento** (`::before`).

## 🧩 Resumen visual

| Tipo           | Se usa para              |
| -------------- | ------------------------ |
| `:hover`       | interacción              |
| `:focus`       | formularios              |
| `:nth-child()` | posición en la lista     |
| `::before`     | agregar contenido antes  |
| `::after`      | agregar contenido después|

## 🏋️ Ejercicios en clase

### 🧪 Ejercicio 1

Botones con efecto hover.

### 🧪 Ejercicio 2

Lista con colores alternados (podés combinar con `:nth-child`).

### 🧪 Ejercicio 3

Agregar íconos con `::before`.

## 🧪 Mini desafío

Tarjeta que:

- ✔ crece al pasar el mouse
- ✔ muestra etiqueta “Nuevo” con `::before` o `::after`
- ✔ tiene subrayado animado en links
