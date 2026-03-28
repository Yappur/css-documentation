# 📍 Position en CSS

La propiedad **position** indica **cómo** se coloca un elemento y **respecto de qué referencia** funcionan **top**, **right**, **bottom** y **left**.

## 🎯 Objetivos

- Usar **static**, **relative**, **absolute**, **fixed** y **sticky** con criterio
- Evitar desplazamientos inesperados con **absolute** y contenedores sin referencia

## Panorama de valores

| Valor | ¿Participa del flujo normal? | Referencia para top / left / … |
| ----- | ---------------------------- | ----------------------------------- |
| **static** | Sí | No aplica desplazamiento con esas propiedades |
| **relative** | Sí (conserva su hueco) | Su posición original en el documento |
| **absolute** | No | Ancestro posicionado más cercano, o el contenedor inicial |
| **fixed** | No | Ventana (viewport) |
| **sticky** | Híbrido | Depende del scroll y del contenedor bloque |

## Flujo normal: static y relative

**static** es el valor por defecto. El elemento sigue el orden natural del documento; **top** y **left** no lo desplazan de manera útil.

**relative** mantiene el espacio que ocuparía en flujo normal y permite **desplazarlo** desde ahí:

```css
.ajuste {
  position: relative;
  top: -8px;
  left: 4px;
}

.marco {
  position: relative;
}
```

**relative** en un padre suele usarse para que los hijos **absolute** se midan **dentro de ese padre**.

## Fuera del flujo: absolute y fixed

**absolute** saca el elemento del flujo: el resto del contenido se comporta como si no ocupara sitio. Se posiciona respecto al **primer ancestro con position distinto de static**. Si no existe, la referencia sube hasta el área de visualización pertinente.

```css
.card {
  position: relative;
}

.etiqueta {
  position: absolute;
  top: 12px;
  right: 12px;
}
```

Casos habituales: etiquetas sobre imágenes, botones de cierre, capas superpuestas.

**fixed** también sale del flujo, pero la referencia es **siempre la ventana**, sin depender del padre:

```css
.barra {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: #2c3e50;
  color: white;
}
```

Uso típico: barras fijas, accesos flotantes. En navegadores móviles pueden existir matices con la barra de URL; no suele ser relevante en los primeros proyectos.

## Comportamiento pegajoso: sticky

Combina desplazamiento con el documento hasta un límite; a partir de ahí se mantiene **fija** respecto al scroll, **dentro de su contenedor**:

```css
.menu-lateral {
  position: sticky;
  top: 0;
}
```

Suele requerir **top** u otra propiedad de borde definida y un contenedor con altura suficiente para observar el efecto.

## Ejemplo: etiqueta sobre imagen

```html
<article class="card">
  <img src="foto.jpg" alt="" />
  <span class="pill">Nuevo</span>
  <h2>Título</h2>
</article>
```

```css
.card {
  position: relative;
  max-width: 320px;
}

.card img {
  width: 100%;
  display: block;
}

.pill {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #e74c3c;
  color: white;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
}
```

## Errores frecuentes y z-index

| Problema | Causa habitual |
| -------- | --------------- |
| **absolute** en una esquina del documento | Ningún ancestro con **position** no estático |
| Contenido tapado por barras **fixed** | Falta de margen o relleno en el cuerpo o en el área de scroll |
| Elementos superpuestos en orden incorrecto | **z-index** sin contexto de apilamiento claro; revisar **position** y orden en el DOM |

Para la maquetación general de página suelen bastar **Flexbox** y **Grid**; **position** encaja en **capas puntuales** (badges, modales, elementos fijos).
