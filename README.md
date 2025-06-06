# 📦 Incrustación de Assets en HTML y CSS

Este proyecto demuestra cómo incrustar distintos tipos de **assets (recursos estáticos)** dentro de una página web utilizando **HTML, CSS y _un poco_ de JavaScript**.

---

## 🧱 Estructura del proyecto

```
/assets/
  /images/example.jpg        ← Imagen JPG
  /videos/video.mp4          ← Video MP4 (también se reutiliza como audio)
  /docs/example.pdf          ← Documento PDF incrustado
  /data/ejemplo.json         ← Archivo de datos en formato JSON
  /icons/star.svg            ← Icono en formato SVG
/favicon.ico                 ← Icono del sitio
index.html                   ← Archivo principal HTML
styles.css                   ← Estilos CSS
script.js                    ← Lógica JS para cargar el JSON
README.md                    ← Este archivo
```

---

## 🔍 ¿Qué se incluye?

| Tipo de Asset     | Descripción                                                          |
| ----------------- | -------------------------------------------------------------------- |
| 🖼️ Imagen        | Imagen estática JPG con etiqueta `<img>`                             |
| 🎞️ Video         | Video en formato `.mp4` usando la etiqueta `<video>`                 |
| 🔊 Audio          | Audio reproducido con `<audio>` (usa el mismo `.mp4`)                |
| 🔤 Fuente externa | Fuente de Google Fonts (`Roboto`) cargada con `<link>`               |
| 📄 PDF            | Documento embebido con `<iframe>`                                    |
| 📊 JSON           | Datos cargados dinámicamente en JS con `fetch()`                     |
| ⭐ Icono SVG       | Imagen vectorial incrustada como `<img>`                             |
| 🌐 Favicon        | Ícono del sitio (`favicon.ico`) mostrado en la pestaña del navegador |

---

## 🧠 ¿Cómo funciona?

* El archivo HTML central (`index.html`) organiza todo el contenido en secciones.
* El CSS externo (`styles.css`) define estilos generales y aplica la fuente `Roboto`.
* El script (`script.js`) usa `fetch()` para cargar un archivo `.json` e imprimir los datos en consola.
* Todos los assets están organizados en carpetas según su tipo para mantener el orden y facilitar su reutilización.
