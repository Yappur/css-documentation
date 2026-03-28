# 📦 El Box Model (Modelo de Caja)

Todo elemento HTML es una caja.

Siempre tiene:

```text
+-------------------+
| margin            |
| +-------------+   |
| | border      |   |
| | +---------+ |   |
| | | padding | |   |
| | | content | |   |
| | +---------+ |   |
| +-------------+   |
+-------------------+
```

### 📌 Las partes del Box Model

| Parte     | Función          |
| --------- | ---------------- |
| content   | contenido        |
| padding   | espacio interno  |
| border    | borde            |
| margin    | espacio externo  |

### 🎨 Ejemplo práctico

```css
.card {
  padding: 20px;
  border: 1px solid black;
  margin: 30px;
}
```

**Resultado:**

- 20px espacio interno
- borde visible
- 30px separación exterior

### ⚠️ Error típico de principiantes

Confundir **margin** con **padding**.

### 🎯 Explicación simple

- **Padding:** espacio **dentro** de la caja.
- **Margin:** espacio **fuera** de la caja.

### 🧩 Ejemplo práctico completo

**HTML:**

```html
<section class="card">
  <h2>Juan Pérez</h2>
  <p>Desarrollador web en formación</p>
</section>
```

**CSS:**

```css
.card {
  background: lightgray;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
}
```

## 🧠 Mini desafío

Crear una card de perfil con:

- imagen
- nombre
- descripción
- botón

## 🎓 Resumen de la clase

Aprendimos:

- ✔ Qué es CSS
- ✔ Cómo aplicar estilos
- ✔ Selectores
- ✔ Cascada
- ✔ Especificidad
- ✔ Box Model

Este es el primer paso real para diseñar interfaces.