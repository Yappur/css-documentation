# 🚀 Flexbox avanzado + responsive básico

## 🎯 Objetivos de la clase

Al finalizar la clase los estudiantes podrán:

- Entender cómo se comportan los elementos **flexibles**
- Controlar el **tamaño** y el **crecimiento** de los ítems
- Permitir que los elementos **bajen de línea** (`flex-wrap`)
- Crear layouts **adaptables**
- Tener una idea clara de **diseño responsive** y **media queries** básicas

## 🧠 Repaso rápido

Flexbox nos permite:

- ✔ Ordenar elementos
- ✔ Alinear contenido
- ✔ Centrar con facilidad

Falta dominar **cómo se adaptan** los ítems al espacio disponible.

## 📦 1️⃣ `flex-wrap`

Por defecto, Flexbox intenta mantener todo en **una sola línea**.

```css
.container {
  display: flex;
}
```

Si no entra… los ítems se **comprimen**.

### Permitir salto de línea

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

Ahora los elementos pueden **bajar** a la siguiente fila.

### Ejemplo visual

**Sin wrap:**

```text
[ Item ][ Item ][ Item ][ Item ]
(se comprimen)
```

**Con wrap:**

```text
[ Item ][ Item ]
[ Item ][ Item ]
```

## 📏 2️⃣ `flex-grow`

Define **cuánto puede crecer** un elemento si sobra espacio.

```css
.item {
  flex-grow: 1;
}
```

Significa: *“Si sobra espacio, repartilo según este número.”*

### Ejemplo

```css
.item1 { flex-grow: 1; }
.item2 { flex-grow: 1; }
.item3 { flex-grow: 1; }
```

**Resultado:** los tres tienden a **crecer por igual**.

### Crecimiento proporcional

```css
.item1 { flex-grow: 2; }
.item2 { flex-grow: 1; }
```

`item1` reclama el **doble** de espacio extra que `item2`.

## 📐 3️⃣ `flex-basis`

Define el **tamaño inicial** antes de crecer o encoger.

```css
.item {
  flex-basis: 200px;
}
```

*“Arrancá midiendo esto; después vemos si crecés o te reducís.”*

## 🧩 4️⃣ Propiedad abreviada: `flex`

Combina crecimiento, encogimiento y base:

```css
/* flex: grow shrink basis; */
```

**Ejemplo muy común:**

```css
.item {
  flex: 1;
}
```

Equivale a algo como **`flex: 1 1 0`** (según el navegador), muy usado para **columnas que reparten el espacio**.

## 🧪 Ejemplo práctico: grilla adaptable

**HTML:**

```html
<section class="grid">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
</section>
```

**CSS:**

```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 200px;
}
```

**Significado:**

- Cada card **intenta** tener al menos **200px** de base.
- Si hay lugar, **crecen** para repartir la fila.
- Si no entra, **bajan** gracias a `flex-wrap: wrap`.

## 📱 Responsive y media queries (puente)

Para cambiar reglas según el ancho de pantalla:

```css
@media (max-width: 768px) {
  .grid {
    flex-direction: column;
  }
}
```

(En la lección de **Responsive design** y **Mobile first** profundizamos en estrategias y breakpoints.)

## 🎓 Cierre de la clase

Hoy vimos:

- ✔ `flex-wrap` para **varias filas**
- ✔ `flex-grow`, `flex-basis` y la forma corta **`flex`**
- ✔ un patrón típico: **`flex: 1 1 200px`** + **`gap`** + **media queries**

Con esto podés armar **grillas flexibles** sin depender solo de anchos fijos.
