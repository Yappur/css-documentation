# ⚖️ Especificidad

No todos los selectores tienen el mismo peso.

| Selector  | Prioridad |
| --------- | --------- |
| etiqueta  | baja      |
| clase     | media     |
| id        | alta      |

**Ejemplo:**

```css
p {
  color: red;
}

.destacado {
  color: blue;
}

#titulo {
  color: green;
}
```

Si un elemento tiene todos, gana el **id**.