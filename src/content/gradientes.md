# 🌈 Gradientes en CSS

Un **gradiente** mezcla dos o más colores de forma continua. Se usa sobre todo en **fondos** y efectos visuales sin depender de archivos de imagen.

## 🎯 Objetivos

- Distinguir gradiente **lineal** y **radial**
- Escribir **linear-gradient** y **radial-gradient** en **background**
- Controlar dirección, cantidad de colores y paradas

## Dónde se declara

La propiedad **color** solo admite un color sólido. Los gradientes van en **background** o **background-image**:

```css
.caja {
  background: linear-gradient(#3498db, #9b59b6);
}
```

## Parte 1: gradiente lineal (linear-gradient)

Los colores se distribuyen en **línea recta**. La dirección se indica con un **ángulo en grados** o con palabras clave (**to right**, **to bottom**, etc.).

### Forma básica

```css
background: linear-gradient(dirección, color1, color2);
```

**Ejemplos:**

```css
/* Vertical (valor por defecto: de arriba hacia abajo) */
.caja {
  background: linear-gradient(#3498db, #9b59b6);
}

/* Ángulo: 90° = hacia la derecha */
.caja {
  background: linear-gradient(90deg, #ff6b6b, #feca57);
}

/* Palabras clave */
.banner {
  background: linear-gradient(to right, #1e3c72, #2a5298);
}
```

| Dirección | Recorrido típico |
| --------- | ---------------- |
| to top | de abajo hacia arriba |
| to bottom | de arriba hacia abajo |
| to left | de derecha a izquierda |
| to right | de izquierda a derecha |
| to bottom right | diagonal |

### Varios colores y paradas

Varios colores en la misma función:

```css
.arcoiris {
  background: linear-gradient(90deg, red, orange, yellow, green, blue);
}
```

**Paradas con porcentaje** fijan dónde termina cada tramo (útil para franjas o mitades):

```css
.banda {
  background: linear-gradient(
    90deg,
    #3498db 0%,
    #3498db 50%,
    #e74c3c 50%,
    #e74c3c 100%
  );
}
```

## Parte 2: gradiente radial (radial-gradient)

El color se expande **desde un centro** hacia afuera.

```css
background: radial-gradient(circle, color-inicio, color-fin);
```

```css
.foco {
  background: radial-gradient(circle, #fff 0%, #3498db 40%, #2c3e50 100%);
}
```

- **circle**: forma circular  
- **ellipse**: elipse (comportamiento por defecto si no se indica forma)

```css
.elipse {
  background: radial-gradient(ellipse at center, #667eea, #764ba2);
}
```

## Aplicaciones habituales

**Botón con relieve:**

```css
.boton {
  background: linear-gradient(to bottom, #5dade2, #2874a6);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
}
```

**Imagen con velo oscuro** (primera capa el gradiente, segunda la imagen):

```css
.hero {
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("fondo.jpg");
  background-size: cover;
}
```

## Errores frecuentes

| Error | Qué hacer |
| ----- | --------- |
| Usar **color** para el gradiente | Declararlo en **background** / **background-image** |
| Demasiados tonos sin criterio | Reducir a 2–3 colores para resultados más limpios |

## Referencia rápida

| Función | Uso principal |
| ------- | --------------- |
| **linear-gradient** | Transición en línea (ángulo o palabras **to …**) |
| **radial-gradient** | Transición desde un centro |
