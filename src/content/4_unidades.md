# 📏 Unidades de Tamaño en CSS

##  1️⃣ px (píxeles)

Es la unidad más simple.

```css
p {
  font-size: 16px;
}
```

- ✔ Fácil de entender
- ❌ No siempre adaptable

## 📊 2️⃣ %

Es relativo al elemento padre.

```css
div {
  width: 50%;
}
```

**Significa:** 👉 ocupar la mitad del contenedor.

## 📐 3️⃣ rem (muy importante)

**Significa:** *Root EM* — es relativo al tamaño del `html`.

**Ejemplo:**

```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem;
}
```

**Resultado:** 2 × 16px = **32px**

- ✔ Muy usado en diseño moderno.

## 📐 4️⃣ em

Depende del tamaño del elemento **padre**.

**Ejemplo:**

```css
div {
  font-size: 20px;
}

p {
  font-size: 2em;
}
```

**Resultado:** 2 × 20px = **40px**

## ⚠️ Diferencia clave

| Unidad | Depende de     |
| ------ | -------------- |
| `rem`  | tamaño raíz    |
| `em`   | tamaño del padre |

## 🧪 Ejemplo práctico

**HTML:**

```html
<h1>Mi página</h1>
<p>Aprendiendo CSS</p>
```

**CSS:**

```css
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f5;
}

h1 {
  color: #2c3e50;
  font-size: 2rem;
}

p {
  color: #555;
  font-size: 1rem;
}
```

## Aprendimos:

-  cómo funcionan las unidades de medida

