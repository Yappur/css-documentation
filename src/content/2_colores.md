# 🎨 Colores en CSS

CSS permite aplicar colores a:

- texto
- fondos
- bordes
- sombras

**Ejemplo:**

```css
h1 {
  color: blue;
}
```

Esto cambia el color del texto.

## 🎨 Color de fondo

```css
body {
  background-color: lightgray;
}
```

Esto cambia el fondo de toda la página.

## 🎨 Formas de definir colores

Existen varias formas.

### 1️⃣ Colores por nombre

```css
p {
  color: red;
}
```

**Ejemplos comunes:** `red`, `blue`, `green`, `black`, `white`, `gray`

- ✔ Fácil para comenzar
- ❌ Poco preciso

### 2️⃣ Colores HEX

Muy usados en diseño web.

**Ejemplo:**

```css
h1 {
  color: #ff0000;
}
```

**Formato:** `#RRGGBB`

Cada par representa: rojo, verde, azul.

**Ejemplos:**

| HEX       | Color        |
| --------- | ------------ |
| `#000000` | negro        |
| `#ffffff` | blanco       |
| `#3498db` | azul moderno |

### 3️⃣ Colores RGB

Permite definir colores con números.

```css
p {
  color: rgb(255, 0, 0);
}
```

Cada número va de **0** a **255**.

## 💡 Consejo profesional

En proyectos reales se usan más:

- ✔ **HEX**
- ✔ **RGB**
