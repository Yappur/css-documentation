# 🧩 Cómo conectar CSS con HTML

Hay **3 formas**.

### 🔹 1️⃣ CSS inline

Dentro del HTML.

```html
<h1 style="color: blue;">Hola Mundo</h1>
```

⚠️ No se recomienda en proyectos reales.

### 🔹 2️⃣ CSS interno

Dentro de `<style>` en el HTML.

```html
<style>
  h1 {
    color: blue;
  }
</style>
```

### 🔹 3️⃣ CSS externo (la forma profesional)

Se crea un archivo `.css`.

```html
<link rel="stylesheet" href="styles.css">
```

**Ejemplo del archivo:**

```css
h1 {
  color: blue;
}
```

✔ Esta es la forma que usaremos.