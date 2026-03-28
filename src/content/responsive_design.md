# 📱 ¿Qué es Responsive Design?

Es **diseñar sitios** que:

👉 Se adapten a **distintos tamaños de pantalla**

- 📱 Celulares
- 💻 Notebooks
- 🖥️ Monitores grandes

## ❌ Web no responsive

Todo se ve pequeño o desordenado.

## ✅ Web responsive

El contenido se **reorganiza automáticamente**.

## 📏 Media Queries (introducción)

Permiten aplicar estilos según el **tamaño de pantalla**.

### Sintaxis básica

```css
@media (max-width: 768px) {
  /* estilos para pantallas chicas */
}
```

## 🧪 Ejemplo práctico

```css
.grid {
  display: flex;
  gap: 20px;
}

.card {
  flex: 1;
}
```

**En celular:**

```css
@media (max-width: 768px) {
  .grid {
    flex-direction: column;
  }
}
```

**En pantallas pequeñas** (esquema):

```text
[ Card ]
[ Card ]
[ Card ]
```

## 📱 Breakpoints comunes

| Dispositivo | Ancho habitual |
| ----------- | -------------- |
| Celular     | ≤ 480px        |
| Tablet      | ≤ 768px        |
| Laptop      | ≤ 1024px       |

## ⭐ Ejemplo real: cards responsive

**Desktop:**

```text
[ Card ][ Card ][ Card ]
```

**Mobile:**

```text
[ Card ]
[ Card ]
[ Card ]
```

## 🧠 Idea clave

- **Flexbox** organiza elementos dentro del contenedor.
- **Responsive** adapta el layout al **ancho disponible** (media queries, unidades relativas, etc.).
