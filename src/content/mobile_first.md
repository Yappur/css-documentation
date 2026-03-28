# 📱 Mobile first

**Mobile first** es una forma de pensar el CSS: primero diseñás para **pantallas chicas** y después **ampliás** el diseño para tablets y escritorio con **media queries** que usan **`min-width`**.

## 🎯 Objetivos

- Entender la diferencia entre **mobile first** y **desktop first**
- Escribir CSS que **escale** hacia arriba (más ancho), no solo “se achique”
- Combinar **flex/grid**, **unidades relativas** y **breakpoints** con criterio

## 🧠 Idea clave

- **Desktop first:** estilos por defecto para pantalla grande y luego **`max-width`** para achicar.
- **Mobile first:** estilos base para **móvil** y luego **`min-width`** para **añadir** complejidad cuando hay más espacio.

👉 No es obligatorio en todos los proyectos, pero es muy habitual en equipos que priorizan **rendimiento** y **UX** en celular.

## ✅ Ventajas típicas

- El CSS base suele ser **más simple** (una columna, menos efectos costosos).
- Cargás **lo mínimo** para móvil y **refinás** en breakpoints mayores.
- Encaja bien con **progressive enhancement** (mejorar la experiencia cuando el contexto lo permite).

## 📏 Sintaxis: `min-width`

**Mobile first** usa reglas del tipo:

```css
/* Estilos base: móvil (por defecto) */
.container {
  padding: 1rem;
}

/* A partir de tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    max-width: 720px;
    margin-inline: auto;
  }
}

/* A partir de escritorio */
@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}
```

Cada breakpoint **suma** o **sobrescribe** lo anterior, no “achica” desde un layout enorme.

## 🧪 Ejemplo: navegación

**Base (móvil):** menú en **columna** o botón hamburguesa.

```css
.nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

**Tablet en adelante:** fila y más aire.

```css
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }
}
```

## 📊 Breakpoints de referencia

No hay un estándar único; estos valores son **orientativos**:

| Nombre   | `min-width` típico |
| -------- | ------------------ |
| Tablet   | 768px              |
| Laptop   | 1024px             |
| Desktop  | 1280px o más       |

Ajustalos al **diseño** y al **contenido**, no al dispositivo concreto (hay muchos anchos distintos).

## ⚠️ Errores comunes

1. **Copiar breakpoints sin probar** — conviene mirar el diseño en **anchos reales**, no solo en “iPhone vs desktop”.
2. **Demasiadas media queries** — a veces basta con **2–3** cortes bien pensados.
3. **Olvidar el contenido** — el “corte” correcto depende de **cuándo** se rompe el layout, no de un número mágico.

## 🔗 Relación con otras lecciones

- **Responsive design:** concepto general de adaptar layout al viewport.
- **Media queries:** mecanismo (`@media`) para aplicar reglas según condiciones.
- **Flexbox avanzado:** `flex-wrap`, `flex-basis` y grillas adaptables encajan muy bien con mobile first.

## 🎓 Resumen

- **Mobile first** = CSS **base para móvil** + mejoras con **`min-width`**.
- Es una **estrategia**; lo importante es que el código sea **claro**, **mantenible** y probado en **varios anchos**.
