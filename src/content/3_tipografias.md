# 🔤 Tipografías en CSS

Las tipografías cambian completamente el estilo de una página.

**Propiedad principal:** `font-family`

**Ejemplo:**

```css
body {
  font-family: Arial;
}
```

## 🔤 Tipografías seguras (Web Safe Fonts)

Son fuentes que están en casi todas las computadoras.

**Ejemplos:**

- Arial
- Verdana
- Georgia
- Times New Roman
- Courier New

## 🌐 3. Usar Google Fonts

La forma más común de usar tipografías modernas.

**Sitio:** [Google Fonts](https://fonts.google.com)

### Paso 1

Elegir una fuente.

**Ejemplo:** Roboto

### Paso 2

Copiar el `<link>` que proporciona Google.

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

### Paso 3

Aplicar la fuente en CSS.

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

## Diferencia entre `<link>` y `@import` para cargar Google Fonts

Ambos sirven para cargar una fuente externa, pero funcionan en lugares distintos y tienen implicaciones diferentes en rendimiento.

| Método   | Dónde se usa | Cómo funciona                          |
| -------- | ------------ | ---------------------------------------- |
| `<link>` | En el HTML   | El navegador carga la fuente directamente |
| `@import`| Dentro de CSS| El archivo CSS importa la fuente         |

### 1️⃣ Usar `<link>` (forma recomendada)

Se coloca dentro del `<head>` del HTML.

**Ejemplo de Google Fonts:**

```html
<head>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
```

Luego se usa en CSS:

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

**Ventajas**

- ✔ Carga más rápida
- ✔ Mejor rendimiento
- ✔ Es la forma recomendada por Google

### 2️⃣ Usar `@import`

Se coloca dentro del archivo CSS.

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

### ⚠️ Problema con `@import`

El navegador primero debe:

1. descargar el CSS
2. leer el CSS
3. recién después importar la fuente

Esto puede retrasar la carga.

### Comparación visual

**Con `<link>`** — El navegador carga todo en paralelo.

```text
HTML
 ├── CSS
 └── Google Font
```

**Con `@import`** — Primero carga el CSS, luego la fuente.

```text
HTML
 └── CSS
      └── Google Font
```

## 📊 Resumen rápido

| Método   | Rendimiento | Recomendación |
| -------- | ----------- | ------------- |
| `<link>` | rápido      | ✅ usar       |
| `@import`| más lento   | ⚠️ evitar     |

## 🧠 Regla simple

👉 Siempre usar **`<link>`** para Google Fonts.

`@import` solo se usa cuando:

- no podemos modificar el HTML, o
- trabajamos dentro de un framework específico

## 🧑‍🏫 Tip didáctico

Podés decir algo así:

- `<link>` es como ir directamente a buscar algo.
- `@import` es pedirle a otra persona que vaya a buscarlo por vos.

El resultado es el mismo, pero uno tarda más.

## 🧠 Qué significa sans-serif

Las fuentes se dividen en familias.

| Tipo         | Característica           |
| ------------ | ------------------------ |
| serif        | con terminaciones        |
| sans-serif   | sin terminaciones        |
| monospace    | todas las letras del mismo ancho |

**Ejemplos:**

- serif → Times
- sans-serif → Arial
- monospace → Courier

## 📏 4. Tamaño de texto

**Propiedad:** `font-size`

**Ejemplo:**

```css
h1 {
  font-size: 40px;
}
```
