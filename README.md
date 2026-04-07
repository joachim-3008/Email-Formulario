# 📋 Formulario de Registro con Validaciones Dinámicas

Este proyecto consiste en un sistema de registro interactivo desarrollado con **JavaScript**. Implementa validaciones en tiempo real mediante expresiones regulares (RegEx) para asegurar que los datos del usuario sigan los estándares de seguridad y formato antes de permitir el envío.

## 🚀 Características Principales

* **Validación en Tiempo Real:** Los campos cambian su estilo visual (`correct` / `incorrect`) y muestran mensajes informativos mientras el usuario escribe.
* **Seguridad de Contraseñas (Efecto Espejo):** Sistema de doble verificación que asegura que la contraseña cumpla con requisitos de complejidad y coincida exactamente con el campo de confirmación.
* **Sincronización de Estados:** Si el usuario modifica la contraseña principal, el campo de confirmación se re-valida automáticamente para evitar inconsistencias.
* **Selector de Países Dinámico:** Formatea y extrae automáticamente los códigos telefónicos del menú desplegable.
* **Botón de Envío Inteligente:** El botón se habilita únicamente cuando todos los campos del formulario han pasado las validaciones lógicas.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **CSS3:** Diseño responsivo y estados visuales para validación.
* **JavaScript (ES6+):** Manipulación del DOM, manejo de eventos y lógica de validación asíncrona.

## 🔍 Reglas de Validación (RegEx)

El sistema garantiza la integridad de los datos mediante los siguientes patrones:

| Campo | Regla / Patrón |
| :--- | :--- |
| **Usuario** | 3 a 16 caracteres (letras, números y guiones bajos). |
| **Email** | Formato de correo electrónico estándar. |
| **Teléfono** | Soporta prefijos internacionales y entre 7 a 12 dígitos numéricos. |
| **Contraseña** | 6 a 12 caracteres, requiere al menos una mayúscula, una minúscula y un número. |

## 📂 Lógica del Script

El archivo `script.js` está organizado para mantener la escalabilidad:

1.  **Gestión de Clases:** Uso de `classList` para feedback visual inmediato.
2.  **Validación de Passwords:** Función `passwordsValidation()` dedicada a sincronizar ambos campos de clave.
3.  **Control de Flujo:** Función `checkForm()` que actúa como guardián del estado global del formulario.

---

### 👤 Autor
**Joachim Pérez** *Estudiante de Informática y Computación - Enfocado en Desarrollo Web Frontend.*

---

> **Nota:** Este proyecto forma parte de mi portafolio de prácticas en lógica de programación y manipulación del DOM con JavaScript.