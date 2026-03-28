# 🚀 Introducción a Flexbox

## 🎯 Objetivos de la clase

Al finalizar la clase los estudiantes podrán:

- Entender qué es **Flexbox**
- Crear **layouts flexibles**
- Alinear elementos **horizontal y verticalmente**
- **Distribuir espacio** entre elementos
- Crear componentes comunes como **cards** y **barras de navegación**

## 🤔 ¿Qué problema viene a resolver Flexbox?

Antes de Flexbox, organizar elementos en una página era difícil.

Se usaban técnicas como:

- `float`
- `position`
- “hacks” de CSS

Esto generaba muchos problemas. **Flexbox** fue creado para **alinear y distribuir** elementos de forma sencilla.

## 🧠 Idea clave

Flexbox sirve para ordenar elementos **dentro de un contenedor**.

Siempre hay dos partes:

- **contenedor** (flex container)
- **elementos** (flex items)

## 🧱 Activar Flexbox

Para usar Flexbox debemos aplicar:

```css
display: flex;
```

**Ejemplo:**

```css
.container {
  display: flex;
}
```

**HTML:**

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Ahora los elementos se acomodan **uno al lado del otro** (por defecto en fila).

## 📐 El eje principal y el eje cruzado

Flexbox trabaja con dos ejes:

- **Main axis** → eje principal
- **Cross axis** → eje cruzado

Por defecto:

- Main axis → **horizontal**
- Cross axis → **vertical**

```text
[ item ][ item ][ item ]
        →
   main axis
```

## 📏 `flex-direction`

Define la dirección del **eje principal**.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

| Valor            | Resultado              |
| ---------------- | ---------------------- |
| `row`            | horizontal             |
| `column`         | vertical               |
| `row-reverse`    | horizontal invertido   |
| `column-reverse` | vertical invertido     |

## 📦 `justify-content`

Controla la distribución en el **eje principal**.

```css
.container {
  display: flex;
  justify-content: center;
}
```

| Valor             | Resultado                |
| ----------------- | ------------------------ |
| `flex-start`      | inicio                   |
| `center`          | centro                   |
| `flex-end`        | final                    |
| `space-between`   | espacio entre elementos  |
| `space-around`    | espacio alrededor        |

**Ejemplo visual (`space-between`):**

```text
[Item]      [Item]      [Item]
```

## 📐 `align-items`

Alinea elementos en el **eje cruzado**.

```css
.container {
  display: flex;
  align-items: center;
}
```

| Valor        | Resultado (eje cruzado típico) |
| ------------ | ------------------------------ |
| `flex-start` | arriba                         |
| `center`     | centrado                       |
| `flex-end`   | abajo                          |
| `stretch`    | estirar para ocupar espacio  |

## ⭐ El truco más famoso: centrar en el contenedor

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Si el contenedor tiene altura, por ejemplo:

```css
height: 100vh;
```

…el contenido queda **centrado** en el centro del contenedor.

## 🧩 `gap`

Permite agregar espacio **entre** elementos sin depender solo de `margin`.

```css
.container {
  display: flex;
  gap: 20px;
}
```

## 🧪 Ejemplo práctico completo

**HTML:**

```html
<div class="cards">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
</div>
```

**CSS:**

```css
.cards {
  display: flex;
  gap: 20px;
}

.card {
  background: lightgray;
  padding: 20px;
  border-radius: 8px;
}
```

**Resultado (esquema):**

```text
[HTML]   [CSS]   [JS]
```

## 🎨 Ejemplo: barra de navegación

**HTML:**

```html
<nav class="menu">
  <a href="#">Inicio</a>
  <a href="#">Proyectos</a>
  <a href="#">Contacto</a>
</nav>
```

**CSS:**

```css
.menu {
  display: flex;
  gap: 20px;
}
```

## 🧠 Mini desafío

Crear una sección de **3 cards** con:

- título
- descripción
- botón

…y alinearlas usando Flexbox.

## ⚠️ Errores comunes

1. **Olvidar `display: flex`** — sin eso, `justify-content` y `align-items` no aplican al layout flex.
2. **Usar solo `margin` para separar** — muchas veces conviene **`gap`**.
3. **Confundir ejes:**

| Propiedad           | Eje        |
| ------------------- | ---------- |
| `justify-content`   | principal  |
| `align-items`       | cruzado    |

## 🎓 Cierre de la clase

Hoy aprendimos:

- ✔ qué es Flexbox
- ✔ cómo organizar elementos
- ✔ cómo centrar contenido
- ✔ cómo distribuir espacio

Con Flexbox ya podemos empezar a construir **layouts modernos**.
