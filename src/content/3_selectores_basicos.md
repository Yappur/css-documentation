# 🎯 Selectores CSS

Los selectores indican qué elementos queremos estilizar.

### 🔹 Selector por etiqueta

```css
p {
  color: red;
}
```

Todos los párrafos serán rojos.

### 🔹 Selector por clase

**HTML:**

```html
<p class="destacado">Texto importante</p>
```

**CSS:**

```css
.destacado {
  color: orange;
}
```

📌 Las clases se usan muchísimo.

### 🔹 Selector por id

**HTML:**

```html
<h1 id="titulo">Mi página</h1>
```

**CSS:**

```css
#titulo {
  color: green;
}
```

⚠️ El id debería ser único.

### 📊 Resumen de selectores

| Selector  | Ejemplo   |
| --------- | --------- |
| etiqueta  | `p`       |
| clase     | `.card`   |
| id        | `#header` |

## 🌊 5. ¿Qué significa “Cascada”?

La cascada define qué estilo gana cuando hay conflictos.

**Ejemplo:**

```css
p {
  color: red;
}

p {
  color: blue;
}
```

**Resultado:** 👉 El texto será **azul**, porque el último estilo sobrescribe al anterior.

### 🧠 Regla importante

Cuando dos estilos compiten:

1. Gana el más **específico**
2. Si tienen la misma especificidad → gana el **último**