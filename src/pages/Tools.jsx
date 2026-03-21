import React from "react";
import Navbar from "../components/Navbar";

const Tools = () => {
  const tools = [
    {
      nombre: "CSS-Tricks",
      url: "https://css-tricks.com/",
      descripcion:
        "CSS-Tricks es un sitio web dedicado a compartir trucos, consejos y recursos relacionados con CSS. Ofrece una amplia variedad de artículos, tutoriales y ejemplos prácticos para ayudar a los desarrolladores a mejorar sus habilidades en CSS.",
    },
    {
      nombre: "MDN Web Docs",
      url: "https://developer.mozilla.org/es/docs/Web/CSS",
      descripcion:
        "Documentación oficial de Mozilla para CSS, con referencias completas, guías y ejemplos para todas las propiedades y selectores de CSS.",
    },
    {
      nombre: "Can I Use",
      url: "https://caniuse.com/",
      descripcion:
        "Herramienta que muestra la compatibilidad de las características de CSS y HTML con diferentes navegadores web.",
    },
    {
      nombre: "Flexbox Froggy",
      url: "https://flexboxfroggy.com/",
      descripcion:
        "Juego interactivo para aprender Flexbox de una manera divertida y práctica.",
    },
    {
      nombre: "CSS Grid Garden",
      url: "https://cssgridgarden.com/",
      descripcion:
        "Juego educativo para aprender CSS Grid Layout a través de niveles progresivos.",
    },
    {
      nombre: "CSS Battle",
      url: "https://cssbattle.dev/",
      descripcion:
        "Juego de programación CSS donde los jugadores compiten creando diseños con el mínimo código posible.",
    },
    {
      nombre: "Animated Backgrounds",
      url: "https://animatedbackgrounds.me/",
      descripcion:
        "Colección de fondos animados en CSS que puedes usar en tus proyectos para agregar un toque visual atractivo.",
    },
    {
      nombre: "Gradient Magic",
      url: "https://www.gradientmagic.com/",
      descripcion:
        "Generador de gradientes CSS que permite crear y personalizar gradientes lineales, radiales y cónicos de manera visual.",
    },
    {
      nombre: "Waves SVG",
      url: "https://getwaves.io/",
      descripcion:
        "Generador de ondas SVG que permite crear formas de onda personalizadas para usar como fondos o elementos decorativos en tus diseños web.",
    },
    {
      nombre: "Magic Patterns",
      url: "https://www.magicpattern.design/tools/css-backgrounds",
      descripcion:
        "Colección de patrones CSS que puedes usar en tus proyectos para agregar un toque visual atractivo.",
    },
    {
      nombre: "Random Background Generator",
      url: "https://random.css-pattern.com/",
      descripcion:
        "Generador de fondos aleatorios en CSS que permite crear patrones únicos para usar en tus proyectos.",
    },
    {
      nombre: "Paletas de Colores",
      url: "https://coolors.co/",
      descripcion:
        "Generador de paletas de colores que te ayuda a encontrar combinaciones de colores armoniosas para tus diseños web.",
    },
    {
      nombre: "Crear Combinacion de colores",
      url: "https://htmlcolorcodes.com/es/",
      descripcion:
        "Herramienta para crear combinaciones de colores y obtener los códigos HEX correspondientes.",
    },
    {
      nombre: "CSS Gradientes",
      url: "https://cssgradient.io/",
      descripcion:
        "Generador de gradientes CSS que permite crear y personalizar gradientes lineales, radiales y cónicos de manera visual.",
    },
    {
      nombre: "Sombras para texto y cajas",
      url: "https://cssgenerator.org",
      descripcion:
        "Generador de sombras para texto y cajas en CSS que permite crear efectos de profundidad y realismo en tus diseños web.",
    },
    {
      nombre: "Fuentes de letras",
      url: "https://fonts.google.com/",
      descripcion:
        "Biblioteca de fuentes de Google que ofrece una amplia variedad de tipografías gratuitas para usar en tus proyectos web.",
    },
    {
      nombre: "Fuentes Personalizadas",
      url: "https://www.dafont.com/es/",
      descripcion:
        "Sitio web que ofrece una amplia colección de fuentes personalizadas gratuitas para descargar y usar en tus proyectos de diseño gráfico y web.",
    },
    {
      nombre: "Animaciones CSS",
      url: "https://animista.net/",
      descripcion:
        "Generador de animaciones CSS que permite crear y personalizar animaciones para usar en tus proyectos web.",
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#0f0f0f] text-white overflow-hidden">
      <Navbar transparent />

      <div className="flex flex-col overflow-hidden max-w-6xl mx-auto p-4">
        <h1 className=" text-white text-2xl tracking-[0.2em] text-center uppercase mt-16 mb-4">
          Mejores herramientas para CSS y Diseño
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border-2 border-blue-800/20 p-4 rounded-lg shadow-md shadow-blue-800/20 hover:shadow-blue-800/50 hover:border-blue-800/50 transition-colors duration-200 "
            >
              <h2 className="text-xl mb-2">{tool.nombre}</h2>
              <p className="mb-2">{tool.descripcion}</p>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Visitar sitio
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
