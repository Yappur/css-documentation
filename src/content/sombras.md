# 🌑 Sombras en CSS

Las sombras sugieren **profundidad**: un elemento puede parecer elevado, hundido o destacarse del fondo. Hay dos propiedades distintas: **box-shadow** (caja) y **text-shadow** (texto). Ninguna modifica el flujo del documento: solo dibujan alrededor o detrás.

## 🎯 Objetivos

- Configurar **box-shadow** para componentes (cards, botones, modales)
- Configurar **text-shadow** para legibilidad o efectos sobre texto
- Interpretar cada valor de la sombra sin memorizar recetas fijas

## box-shadow

### Orden de valores

```css
box-shadow: offset-x offset-y blur spread color;
```

| Valor | Función |
| ----- | ------- |
| offset-x | Desplazamiento horizontal (positivo: hacia la derecha) |
| offset-y | Desplazamiento vertical (positivo: hacia abajo) |
| blur | Difuminado; 0 produce borde nítido |
| spread | (Opcional) Expande o contrae la silueta de la sombra |
| color | Color, habitualmente negro con transparencia (**rgba**) |

**Ejemplo base:**

```css
.card {
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
}
```

**Sombra solo hacia abajo** (muy usada en interfaces):

```css
.panel {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
```

**Sombra interior** (**inset**): se pinta hacia dentro del borde.

```css
.inset {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

**Varias sombras** (se separan con coma; la primera se superpone encima de las siguientes):

```css
.elevado {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 4px 12px rgba(0, 0, 0, 0.1);
}
```

## text-shadow

Misma lógica de desplazamiento y desenfoque, aplicada al **dibujo del texto**:

```css
text-shadow: offset-x offset-y blur color;
```

**Legibilidad sobre imagen:**

```css
.titulo-hero {
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
}
```

**Brillo suave (doble capa):**

```css
.resaltado {
  color: #fff;
  text-shadow:
    0 0 8px #3498db,
    0 0 16px #3498db;
}
```

## Ejemplo: card con hover

La sombra puede reforzar el feedback al pasar el cursor:

```css
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
}
```

## Errores frecuentes

| Problema | Nota |
| -------- | ---- |
| Opacidad excesiva | Probar valores **rgba** entre 0,08 y 0,2 antes que negro opaco |
| Blur alto en texto | Riesgo de borronear letras; probar 2px–6px |
| Confundir con **border** | El borde ocupa espacio en el modelo de caja; la sombra no |

## Referencia rápida

| Propiedad | Ámbito | Uso típico |
| --------- | ------ | ---------- |
| **box-shadow** | Contenedor | Cards, botones, ventanas |
| **text-shadow** | Texto | Títulos sobre fotos, efectos decorativos |
