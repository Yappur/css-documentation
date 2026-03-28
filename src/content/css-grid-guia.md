# 🔲 CSS Grid

**CSS Grid** organiza el contenido en **filas y columnas** a la vez. Es adecuado para **estructuras de página** y **rejillas de componentes**. **Flexbox** sigue siendo útil para alinear contenido en **una sola dirección** dentro de una celda; en la práctica se combinan ambos.

## 🎯 Objetivos

- Activar una cuadrícula con **display: grid**
- Definir columnas, filas y separación entre celdas
- Colocar ítems por líneas o por **áreas** con nombre

## 1. Activación y comportamiento inicial

```css
.contenedor {
  display: grid;
}
```

Sin más reglas, cada hijo directo tiende a ocupar **una fila** y se forma **una columna** por defecto.

## 2. Columnas y unidades

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
}
```

| Unidad | Rol |
| ------ | --- |
| px, % | Tamaños fijos o relativos al contenedor |
| fr | Reparte el **espacio libre** en fracciones (1fr, 2fr, …) |

**Repetición:**

```css
grid-template-columns: repeat(3, 1fr);
```

## 3. Grilla adaptable con minmax y auto-fit

Patrón frecuente para tarjetas: el número de columnas se ajusta al ancho disponible **sin** media queries explícitas:

```css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
```

- **minmax(260px, 1fr)**: ancho mínimo por columna y reparto del sobrante.  
- **auto-fit**: colapsa columnas vacías y reasigna el espacio.

## 4. Filas

```css
.hero {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

Útil para esquemas cabecera–contenido–pie con el centro flexible.

## 5. Espaciado: gap

```css
.grilla {
  gap: 16px;
}
```

Filas y columnas por separado:

```css
gap: 16px 24px; /* filas | columnas */
```

## 6. Ubicación de ítems

### Por líneas numeradas

Las líneas de la grilla se cuentan desde 1.

```css
.sidebar {
  grid-column: 1 / 2;
}

.main {
  grid-column: 2 / 4;
}
```

### Por áreas con nombre

El diseño se lee de un vistazo:

```css
.pagina {
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
```

```css
header { grid-area: header; }
aside  { grid-area: sidebar; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

## 7. Ejemplo mínimo de dos columnas

```css
.contenedor {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
```

## Errores frecuentes

| Error | Consecuencia |
| ----- | ------------ |
| Usar **grid-column** sin definir columnas suficientes | Desbordamiento o comportamiento confuso |
| Abusar de **position: absolute** dentro de la grilla | Suele ser innecesario si bastan celdas y alineación |
| Solo valores en px | Layout rígido; combinar **fr** y **minmax** mejora la adaptación |

## Referencia rápida

| Propiedad / recurso | Función |
| ------------------- | ------- |
| display: grid | Activa el modelo de rejilla |
| grid-template-columns / rows | Estructura de la cuadrícula |
| gap | Separación entre celdas |
| repeat, minmax, fr | Patrones responsive |
| grid-column, grid-area | Posición de cada ítem |
