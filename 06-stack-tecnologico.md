# ⚙️ STACK TECNOLÓGICO Y FUNCIONALIDADES

---

## 🎯 RECOMENDACIÓN PRINCIPAL: WordPress + Elementor Pro

### ¿Por qué WordPress?

| Ventaja | Descripción |
|---------|-------------|
| **Flexibilidad** | CMS maduro con infinitas posibilidades de personalización |
| **Escalabilidad** | Crece con tu proyecto, desde MVP hasta plataforma completa |
| **Ecosistema** | Plugins para prácticamente cualquier funcionalidad |
| **SEO nativo** | Mejor posicionamiento orgánico desde el inicio |
| **Autonomía** | Puedes gestionar contenido sin depender de desarrolladores |
| **Costo** | Open source, solo pagas hosting y plugins premium |

---

## 🏗️ ARQUITECTURA TÉCNICA

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ARQUITECTURA DEL SISTEMA                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         FRONTEND                                     │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │   │
│  │  │   Home      │  │ Estaciones  │  │   Tienda    │  │   Blog      │ │   │
│  │  │  (Matriz)   │  │   (1-8)     │  │             │  │             │ │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘ │   │
│  │                                                                     │   │
│  │  Tema: Hello Elementor + Elementor Pro                             │   │
│  │  Animaciones: GSAP + Lottie                                        │   │
│  │  Estilos: CSS personalizado por estación                           │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                         BACKEND (WordPress)                          │   │
│  │                                                                     │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │   │
│  │  │   Posts     │  │   Páginas   │  │  Productos  │  │   Usuarios  │ │   │
│  │  │   (Blog)    │  │(Estaciones) │  │  (WooCommerce)│  │ (Miembros)  │ │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘ │   │
│  │                                                                     │   │
│  │  Custom Post Types:                                                │   │
│  │  • Estaciones (con campos ACF)                                     │   │
│  │  • Eventos                                                         │   │
│  │  • Testimonios                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    PLUGINS ESENCIALES                                │   │
│  │                                                                     │   │
│  │  🛒 WooCommerce + WooCommerce Subscriptions                        │   │
│  │  👥 MemberPress / Restrict Content Pro                             │   │
│  │  📧 FluentCRM / Mailchimp                                          │   │
│  │  📅 Amelia / BookingPress                                          │   │
│  │  📝 Elementor Pro                                                  │   │
│  │  🔧 Advanced Custom Fields Pro                                     │   │
│  │  📊 RankMath SEO                                                   │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    INTEGRACIONES EXTERNAS                            │   │
│  │                                                                     │   │
│  │  💳 Stripe / PayPal                                                │   │
│  │  📧 ConvertKit / ActiveCampaign                                    │   │
│  │  📅 Calendly / Google Calendar                                     │   │
│  │  💬 Facebook Pixel / Google Analytics                              │   │
│  │  🎥 Zoom / YouTube                                                 │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📋 STACK DETALLADO

### 1. CMS Y CONSTRUCTOR

| Componente | Herramienta | Costo aprox. |
|------------|-------------|--------------|
| **CMS** | WordPress (self-hosted) | Gratis |
| **Tema base** | Hello Elementor | Gratis |
| **Constructor** | Elementor Pro | $59/año |
| **Theme Builder** | Elementor Pro | Incluido |

**Ventajas de Elementor Pro**:
- Theme Builder para templates personalizados
- Dynamic Content para campos personalizados
- Popup Builder para embudos
- Form Builder integrado
- Motion Effects avanzados

---

### 2. E-COMMERCE Y MEMBRESÍA

| Funcionalidad | Plugin | Costo aprox. |
|---------------|--------|--------------|
| **Tienda** | WooCommerce | Gratis |
| **Suscripciones** | WooCommerce Subscriptions | $199/año |
| **Membresía** | MemberPress | $179/año |
| **Contenido protegido** | MemberPress | Incluido |
| **Cursos** | MemberPress Courses | Incluido |

**Alternativa económica**: Restrict Content Pro ($99/año)

---

### 3. EMAIL MARKETING Y CRM

| Funcionalidad | Herramienta | Costo aprox. |
|---------------|-------------|--------------|
| **CRM integrado** | FluentCRM | $129/año (ilimitado) |
| **Alternativa** | Mailchimp | Gratis hasta 500 contactos |
| **Automaciones** | FluentCRM | Incluido |
| **Segmentación** | FluentCRM | Incluido |

**Por qué FluentCRM**:
- Self-hosted (tus datos son tuyos)
- Sin límites de contactos
- Integración nativa con WordPress
- Automaciones visuales

---

### 4. CALENDARIO Y RESERVAS

| Funcionalidad | Plugin | Costo aprox. |
|---------------|--------|--------------|
| **Reservas** | Amelia | $59/año |
| **Alternativa** | BookingPress | Gratis / $79/año Pro |
| **Pagos** | Integrado con WooCommerce | - |
| **Zoom** | Integración nativa | - |

---

### 5. CAMPOS PERSONALIZADOS

| Funcionalidad | Plugin | Costo aprox. |
|---------------|--------|--------------|
| **Custom Fields** | Advanced Custom Fields Pro | $49/año |
| **Taxonomías** | ACF + Custom Post Types UI | Gratis |

**Campos necesarios por Estación**:
- Color primario (color picker)
- Icono (image/svg)
- Esencia (textarea)
- Alas (relationship)
- Flechas (relationship)
- Contenido relacionado (relationship)

---

### 6. SEO Y ANALYTICS

| Funcionalidad | Plugin | Costo aprox. |
|---------------|--------|--------------|
| **SEO** | RankMath Pro | $59/año |
| **Analytics** | Google Analytics 4 | Gratis |
| **Tag Manager** | Google Tag Manager | Gratis |
| **Pixel FB** | PixelYourSite | Gratis / $150 una vez |

---

### 7. SEGURIDAD Y PERFORMANCE

| Funcionalidad | Plugin | Costo aprox. |
|---------------|--------|--------------|
| **Cache** | WP Rocket | $59/año |
| **Seguridad** | Wordfence | Gratis / $99/año Pro |
| **Backup** | UpdraftPlus | Gratis / $70/año Pro |
| **SSL** | Let's Encrypt | Gratis |

---

### 8. HOSTING RECOMENDADO

| Opción | Proveedor | Costo aprox. | Ideal para |
|--------|-----------|--------------|------------|
| **Premium WP** | Kinsta | $35/mes | Alto tráfico |
| **Balance** | WP Engine | $25/mes | Crecimiento |
| **Económico** | SiteGround | $15/mes | MVP |
| **Latinoamérica** | Banahosting | $8/mes | Inicio |

**Requisitos mínimos**:
- PHP 8.0+
- 512MB+ RAM
- SSL incluido
- CDN recomendado

---

## 🔧 FUNCIONALIDADES TÉCNICAS REQUERIDAS

### 1. Sistema de Diagnóstico / Test de Orientación

**Implementación**:
- Plugin: **Quiz Maker** (Gratis / $79 Pro) o **Formidable Forms** ($199/año)
- Lógica condicional para resultados
- Captura de email antes de mostrar resultado
- Tagging automático en CRM según resultado

**Flujo técnico**:
```
Usuario responde 5-7 preguntas
        ↓
Sistema calcula estación recomendada (1-2 opciones)
        ↓
Pide email para mostrar resultado
        ↓
Envía resultado + lead magnet específico
        ↓
Taggea en CRM: "Test completado", "Estación X recomendada"
        ↓
Entra en embudo de nurturing específico
```

---

### 2. Motor de Búsqueda y Filtrado

**Implementación**:
- Plugin: **SearchWP** ($99/año) o **FacetWP** ($99/año)
- Filtros por: estación, tríada, tipo de contenido, nivel
- Búsqueda en: posts, productos, páginas, campos personalizados

**Filtros visuales**:
```
[🔍 Buscar...]

Filtrar por:
[Estación ▼] [Tríada ▼] [Formato ▼] [Nivel ▼]

Etiquetas:
[#autoconocimiento] [#relaciones] [#tipo1] [#tríada-mental]
```

---

### 3. Integración con CRM (Etiquetado)

**Implementación**:
- FluentCRM con segmentación automática
- Tags dinámicos según comportamiento:
  - `pagina_entrada: estacion-X`
  - `test_resultado: estacion-X`
  - `compra: curso-X`
  - `evento: taller-X`

**Automatizaciones**:
- Bienvenida según estación de entrada
- Recomendaciones de contenido
- Recordatorios de eventos
- Recuperación de carritos abandonados

---

### 4. Embudos Automatizados por Página

**Implementación**:
- Elementor Popups + FluentCRM
- Condiciones: URL, tiempo en página, scroll
- Lead magnets específicos por estación

**Ejemplo de embudo para Estación 1**:
```
Usuario entra a /estaciones/el-ritmo-justo
        ↓
Scroll 50% → Popup con lead magnet
        ↓
"Guía: 5 señales de que tu perfeccionismo te sabotea"
        ↓
Captura email
        ↓
Envía PDF + serie de 5 emails de nurturing
        ↓
Ofrece curso de Estación 1
        ↓
Si compra → tag "cliente_estacion_1"
        ↓
Recomienda Estación 7 (integración)
```

---

### 5. Calendario Interactivo para Reservas

**Implementación**:
- Amelia o BookingPress
- Integración con Zoom para eventos online
- Pagos con WooCommerce
- Recordatorios automáticos (email + SMS)

**Funcionalidades**:
- Reserva de sesiones individuales
- Inscripción a talleres grupales
- Suscripción a eventos recurrentes
- Sincronización con Google Calendar

---

### 6. Área de Miembros

**Implementación**:
- MemberPress + MemberPress Courses
- Dashboard personalizado por usuario
- Progreso en cursos
- Contenido exclusivo por nivel de membresía

**Niveles de membresía**:
```
┌─────────────────────────────────────────────────────────────┐
│  🥉 GRATUITO                                                │
│  • Acceso a recursos básicos                                │
│  • Newsletter                                               │
│  • Comunidad pública                                        │
├─────────────────────────────────────────────────────────────┤
│  🥈 MIEMBRO ($19/mes)                                       │
│  • Todo lo gratuito +                                       │
│  • Contenido exclusivo                                      │
│  • Descuentos en cursos                                     │
│  • Eventos mensuales                                        │
├─────────────────────────────────────────────────────────────┤
│  🥇 VIAJERO ($49/mes)                                       │
│  • Todo lo anterior +                                       │
│  • Acceso a todos los cursos                                │
│  • Sesión grupal mensual                                    │
│  • Grupo privado                                            │
├─────────────────────────────────────────────────────────────┤
│  💎 INTEGRAL ($97/mes)                                      │
│  • Todo lo anterior +                                       │
│  • Sesión individual mensual                                │
│  • Acceso prioritario a eventos                             │
│  • Contenido avanzado                                       │
└─────────────────────────────────────────────────────────────┘
```

---

### 7. Blog con Etiquetado Múltiple

**Implementación**:
- Custom Taxonomies: estaciones, tríadas, niveles
- ACF para campos adicionales
- FacetWP para filtros
- Related Posts por taxonomía

**Estructura de etiquetado**:
```
Post: "Cuando la perfección bloquea la creatividad"
├── Estación primaria: El Ritmo Justo (1)
├── Estaciones secundarias: Devida Elección (4), Patrones Invisibles (5)
├── Tríada: Instintiva + Emocional
├── Tipo: Artículo
├── Nivel: Intermedio
└── Tags: autoconocimiento, creatividad, bloqueos
```

---

### 8. Galería de Recursos Descargables

**Implementación**:
- Custom Post Type: Recursos
- Campos ACF: archivo, tipo, estación
- Descarga con captura de email (opcional)
- Contador de descargas

---

### 9. Botones de Navegación Circular (Mandala)

**Implementación**:
- SVG interactivo con CSS/JS
- GSAP para animaciones
- Hover effects con información
- Click para navegación

**Especificaciones técnicas**:
```css
.mandala-nav {
  position: relative;
  width: 500px;
  height: 500px;
}

.mandala-nav .station {
  position: absolute;
  transition: all 0.3s ease;
}

.mandala-nav .station:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 0 10px currentColor);
}

.mandala-nav .station.active {
  animation: pulse 2s infinite;
}
```

---

### 10. Responsive Design

**Breakpoints**:
```css
/* Mobile first */
/* Default: < 640px */

/* sm: 640px+ */
@media (min-width: 640px) { }

/* md: 768px+ */
@media (min-width: 768px) { }

/* lg: 1024px+ */
@media (min-width: 1024px) { }

/* xl: 1280px+ */
@media (min-width: 1280px) { }
```

**Prioridades**:
- Mobile: 60%+ del tráfico esperado
- Touch-friendly targets (min 44px)
- Menú hamburguesa con animación
- Mandala simplificado en móvil

---

## 💰 PRESUPUESTO ESTIMADO (Año 1)

### Opción MVP (Mínimo Viable)

| Componente | Costo |
|------------|-------|
| Hosting (SiteGround) | $180 |
| Elementor Pro | $59 |
| ACF Pro | $49 |
| MemberPress | $179 |
| FluentCRM | $129 |
| RankMath Pro | $59 |
| **TOTAL** | **~$655/año** |

### Opción Completa (Recomendada)

| Componente | Costo |
|------------|-------|
| Hosting (Kinsta) | $420 |
| Elementor Pro | $59 |
| ACF Pro | $49 |
| MemberPress | $179 |
| WooCommerce Subscriptions | $199 |
| FluentCRM | $129 |
| Amelia | $59 |
| SearchWP | $99 |
| WP Rocket | $59 |
| RankMath Pro | $59 |
| **TOTAL** | **~$1,311/año** |

---

## 📊 CHECKLIST DE IMPLEMENTACIÓN

### Fase 1: Fundación (Semanas 1-2)
- [ ] Instalar WordPress y hosting
- [ ] Configurar SSL y CDN
- [ ] Instalar tema y plugins esenciales
- [ ] Configurar estructura de URLs
- [ ] Crear Custom Post Types

### Fase 2: Contenido (Semanas 3-4)
- [ ] Diseñar página matriz (Home)
- [ ] Crear template de estaciones
- [ ] Configurar sistema de colores por estación
- [ ] Implementar mandala navegable

### Fase 3: Funcionalidades (Semanas 5-6)
- [ ] Configurar WooCommerce
- [ ] Implementar MemberPress
- [ ] Crear test de orientación
- [ ] Configurar CRM y automatizaciones

### Fase 4: Optimización (Semanas 7-8)
- [ ] SEO y analytics
- [ ] Performance optimization
- [ ] Responsive testing
- [ ] Seguridad y backups

---

*Documento creado como parte del sistema de entregables para Eneagramas: Saber Consentido*
