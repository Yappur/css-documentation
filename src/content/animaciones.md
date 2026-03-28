# ✨ Transiciones y animaciones en CSS

En CSS, **transición** y **animación** no son lo mismo:

- **transition** suaviza el paso **entre dos estados** (por ejemplo, antes y después de **:hover**).
- **@keyframes** más la propiedad **animation** describen una **secuencia de estados** que puede repetirse y controlarse con más precisión.

## 🎯 Objetivos

- Declarar **transition** en el estado base y cambios en el estado activo
- Definir **@keyframes** y vincularlos con **animation**
- Elegir transición para interacciones simples y animación para secuencias o bucles

## Transiciones

### Requisitos

1. Una propiedad que cambie entre dos reglas (por ejemplo **background-color**, **opacity**, **transform**).
2. Un disparador: **:hover**, **:focus**, clase alternada, etc.
3. **transition** declarada en el **estado inicial** (si solo está en **:hover**, la vuelta al estado base será brusca).

### Ejemplo mínimo

```css
.boton {
  background: #3498db;
  color: white;
  transition: background 0.3s ease;
}

.boton:hover {
  background: #2980b9;
}
```

### Varias propiedades y **transition: all**

```css
.card {
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
```

Usar **transition: all** con una duración corta es válido en prototipos; en producción conviene **enumerar propiedades** para evitar animar de más y mejorar rendimiento.

### Funciones de tiempo (timing-function)

| Valor | Comportamiento |
| ----- | -------------- |
| ease | Aceleración suave al inicio y al final (valor por defecto) |
| linear | Velocidad constante |
| ease-in | Más lento al inicio |
| ease-out | Más lento al final (frecuente en interfaces) |

## Animaciones con @keyframes

Se definen **fotogramas** con porcentajes o con **from** / **to**, y luego se asignan con la propiedad **animation**.

### Ciclo repetido (pulso)

```css
@keyframes pulso {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.logo {
  animation: pulso 2s ease-in-out infinite;
}
```

### Entrada única

```css
@keyframes entrar {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.aviso {
  animation: entrar 0.5s ease-out forwards;
}
```

**forwards** conserva el estilo del último fotograma al finalizar.

### Forma larga y atajo

Forma explícita:

```css
.elemento {
  animation-name: entrar;
  animation-duration: 0.6s;
  animation-timing-function: ease-out;
  animation-delay: 0.2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
```

Equivalente en una línea:

```css
animation: entrar 0.6s ease-out 0.2s 1 forwards;
```

## Criterios prácticos

| Situación | Herramienta recomendada |
| --------- | ------------------------ |
| Hover, focus, cambio de clase entre dos apariencias | **transition** |
| Entradas complejas, loaders, bucles, varios pasos | **@keyframes** + **animation** |

**Rendimiento:** priorizar **transform** y **opacity** frente a propiedades que disparen mucho repintado (anchos, altos, **top**, etc.).  
**Duración:** en feedback de interfaz, rangos habituales entre **150 ms y 400 ms**; animaciones decorativas pueden ser más largas.  
**Moderación:** demasiados elementos en movimiento fatigan la lectura.
