import type { Station, TestQuestion, BlogPost, Event } from '@/types';

export const stations: Station[] = [
  {
    id: 1,
    slug: 'el-ritmo-justo',
    name: 'El Ritmo Justo',
    subtitle: 'Para el alma del Tipo 1',
    enneatype: 1,
    essence: 'La acción ética que se vuelve fluidez',
    colors: {
      primary: '#4A6FA5',
      secondary: '#B8B8B8',
      tertiary: '#F5F7FA',
      accent: '#2E4A6F',
      text: '#333333'
    },
    icon: 'Scale',
    wings: { left: 9, right: 2 },
    arrows: { integration: 7, disintegration: 4 },
    triad: 'instinctive',
    emotion: 'Ira → Serenidad',
    gift: 'La sabiduría de la acción correcta',
    description: 'Transforma tu relación con la perfección, desde la rigidez hacia la fluidez consciente.',
    manifesto: 'El Ritmo Justo no busca la perfección como castigo, sino la excelencia como expresión. Aquí aprendemos que la ética no es una jaula, sino una danza.',
    content: {
      articles: [
        {
          id: '1-1',
          title: 'Cuando la perfección bloquea tu creatividad',
          excerpt: 'Descubre cómo la búsqueda obsesiva de lo perfecto puede paralizarte y qué hacer al respecto.',
          readTime: '5 min',
          tags: ['perfeccionismo', 'creatividad', 'bloqueos']
        },
        {
          id: '1-2',
          title: 'La belleza de lo suficientemente bueno',
          excerpt: 'Aprende a reconocer cuándo tu trabajo está completo sin caer en la sobre-exigencia.',
          readTime: '7 min',
          tags: ['aceptación', 'suficiencia', 'equilibrio']
        },
        {
          id: '1-3',
          title: 'Perfeccionismo vs. Excelencia consciente',
          excerpt: 'La diferencia crucial entre torturarte por la perfección y aspirar a la excelencia.',
          readTime: '6 min',
          tags: ['excelencia', 'consciencia', 'diferencias']
        }
      ],
      resources: [
        {
          id: '1-r1',
          title: 'Checklist: La organización consciente',
          type: 'pdf',
          description: 'Una guía práctica para organizarte sin perder la flexibilidad.'
        },
        {
          id: '1-r2',
          title: 'Meditación: Soltar el control',
          type: 'audio',
          description: 'Una meditación guiada para liberar la tensión del control excesivo.'
        },
        {
          id: '1-r3',
          title: 'Worksheet: De la crítica a la compasión',
          type: 'worksheet',
          description: 'Ejercicios para transformar tu voz interna crítica en compasiva.'
        }
      ]
    },
    leadMagnet: {
      title: '5 señales de que tu perfeccionismo te sabotea',
      description: 'Descubre si tu búsqueda de la perfección está trabajando en tu contra.',
      type: 'pdf'
    },
    testimonials: [
      {
        id: '1-t1',
        name: 'Ana P.',
        enneatype: 1,
        role: 'Coach',
        content: 'Por primera vez pude ver mi perfeccionismo como aliado, no enemigo. El curso me dio herramientas para organizarme sin torturarme.',
        rating: 5,
        hasVideo: true
      },
      {
        id: '1-t2',
        name: 'Carlos M.',
        enneatype: 1,
        role: 'Emprendedor',
        content: 'El concepto de "ritmo justo" cambió mi relación con el trabajo. Ahora produzco más y sufro menos.',
        rating: 5
      }
    ],
    products: [
      {
        id: '1-p1',
        name: 'El Ritmo Justo: Curso completo',
        description: '6 módulos para transformar tu relación con la perfección.',
        price: 97,
        type: 'course'
      },
      {
        id: '1-p2',
        name: 'Sesión individual de Ritmo Justo',
        description: '90 minutos de acompañamiento personalizado.',
        price: 150,
        type: 'session'
      }
    ]
  },
  {
    id: 2,
    slug: 'lazos-del-alma',
    name: 'Lazos del Alma',
    subtitle: 'Para el alma del Tipo 2',
    enneatype: 2,
    essence: 'El arte consciente del vínculo',
    colors: {
      primary: '#C67B5C',
      secondary: '#D4A5A5',
      tertiary: '#F5E6DC',
      accent: '#B85C3F',
      text: '#5C4033'
    },
    icon: 'Heart',
    wings: { left: 1, right: 3 },
    arrows: { integration: 4, disintegration: 8 },
    triad: 'emotional',
    emotion: 'Orgullo → Humildad auténtica',
    gift: 'La sabiduría del amor incondicional',
    description: 'Aprende a dar sin perderte, a amar sin agotarte. El arte de los vínculos conscientes.',
    manifesto: 'Lazos del Alma nos enseña que el verdadero amar no es sacrificio, sino presencia. Que dar no implica desaparecer, sino compartir desde la abundancia.',
    content: {
      articles: [
        {
          id: '2-1',
          title: '¿Das demasiado? Reconociendo el agotamiento empático',
          excerpt: 'Señales de alerta de que tu generosidad está trabajando en tu contra.',
          readTime: '6 min',
          tags: ['límites', 'agotamiento', 'empatía']
        },
        {
          id: '2-2',
          title: 'Cómo pedir ayuda sin sentir culpa',
          excerpt: 'Rompiendo el patrón de autosuficiencia que nos aísla.',
          readTime: '5 min',
          tags: ['recepción', 'ayuda', 'vulnerabilidad']
        },
        {
          id: '2-3',
          title: 'El amor que sana vs. el amor que agota',
          excerpt: 'Diferenciando el amor incondicional del amor codependiente.',
          readTime: '8 min',
          tags: ['amor', 'sanación', 'codependencia']
        }
      ],
      resources: [
        {
          id: '2-r1',
          title: 'Test del agotamiento empático',
          type: 'pdf',
          description: 'Evalúa si estás dando más de lo que puedes sustentar.'
        },
        {
          id: '2-r2',
          title: 'Ritual: La sanación del vínculo consigo mismo',
          type: 'video',
          description: 'Un ritual para reconectar contigo antes de dar a otros.'
        }
      ]
    },
    leadMagnet: {
      title: '¿Das demasiado? El test del agotamiento empático',
      description: 'Evalúa si tu generosidad está trabajando en tu contra.',
      type: 'quiz'
    },
    testimonials: [
      {
        id: '2-t1',
        name: 'María G.',
        enneatype: 2,
        role: 'Terapeuta',
        content: 'Aprendí que amar no significa desaparecer. Hoy doy desde mi plenitud, no desde mi carencia.',
        rating: 5
      }
    ],
    products: [
      {
        id: '2-p1',
        name: 'Lazos del Alma: Curso completo',
        description: 'Aprende el arte de los vínculos conscientes.',
        price: 97,
        type: 'course'
      }
    ]
  },
  {
    id: 3,
    slug: 'roles-y-sinergia',
    name: 'Roles y Sinergia',
    subtitle: 'Para el alma del Tipo 3',
    enneatype: 3,
    essence: 'El éxito con rostro auténtico',
    colors: {
      primary: '#2D8A6E',
      secondary: '#D4AF37',
      tertiary: '#A8E6CF',
      accent: '#1A5F4A',
      text: '#2C3E50'
    },
    icon: 'Trophy',
    wings: { left: 2, right: 4 },
    arrows: { integration: 6, disintegration: 9 },
    triad: 'emotional',
    emotion: 'Engaño/Vanidad → Verdad',
    gift: 'La sabiduría de la realización auténtica',
    description: 'Encuentra el éxito que no requiere sacrificar tu alma. La realización con rostro verdadero.',
    manifesto: 'Roles y Sinergia desafía la idea de que el éxito debe costarnos nuestra autenticidad. Aquí descubrimos que el verdadero logro es ser quienes somos mientras hacemos lo que amamos.',
    content: {
      articles: [
        {
          id: '3-1',
          title: 'Éxito vs. Realización: La diferencia crucial',
          excerpt: 'Por qué los logros externos no siempre traen satisfacción interna.',
          readTime: '6 min',
          tags: ['éxito', 'realización', 'propósito']
        },
        {
          id: '3-2',
          title: '¿Quién soy sin mis logros?',
          excerpt: 'Encontrando identidad más allá de los resultados.',
          readTime: '7 min',
          tags: ['identidad', 'autoestima', 'ser']
        }
      ],
      resources: [
        {
          id: '3-r1',
          title: 'Template: Mi definición de éxito auténtico',
          type: 'worksheet',
          description: 'Descubre qué significa realmente el éxito para ti.'
        }
      ]
    },
    leadMagnet: {
      title: '¿Éxito o realización? El diagnóstico',
      description: 'Descubre si estás persiguiendo el éxito correcto.',
      type: 'quiz'
    },
    testimonials: [
      {
        id: '3-t1',
        name: 'Pedro R.',
        enneatype: 3,
        role: 'Ejecutivo',
        content: 'Dejé de perseguir metas que no eran mías. Hoy mi éxito tiene mi firma.',
        rating: 5
      }
    ],
    products: [
      {
        id: '3-p1',
        name: 'Roles y Sinergia: Curso completo',
        description: 'Encuentra el éxito sin sacrificar tu alma.',
        price: 97,
        type: 'course'
      }
    ]
  },
  {
    id: 4,
    slug: 'devida-eleccion',
    name: 'Devida Elección',
    subtitle: 'Para el alma del Tipo 4',
    enneatype: 4,
    essence: 'La vocación que es huella digital',
    colors: {
      primary: '#6B4C7F',
      secondary: '#722F37',
      tertiary: '#E6E6FA',
      accent: '#4B0082',
      text: '#2F4F4F'
    },
    icon: 'Sparkles',
    wings: { left: 3, right: 5 },
    arrows: { integration: 1, disintegration: 2 },
    triad: 'emotional',
    emotion: 'Envidia → Equanimidad',
    gift: 'La sabiduría de la unicidad',
    description: 'Tu dolor no te define. Tu historia no es tu destino. Descubre la vocación que es huella digital.',
    manifesto: 'Devida Elección nos invita a ver que nuestra profundidad no es un problema, sino un camino. Que la envidia puede convertirse en inspiración cuando encontramos nuestra voz única.',
    content: {
      articles: [
        {
          id: '4-1',
          title: '¿Tu dolor te define? El mapa de tu historia',
          excerpt: 'Separando quién eres de lo que te ha pasado.',
          readTime: '8 min',
          tags: ['identidad', 'historia', 'sanación']
        },
        {
          id: '4-2',
          title: 'Encontrar tu voz única en medio del ruido',
          excerpt: 'Cómo expresar tu autenticidad sin compararte.',
          readTime: '6 min',
          tags: ['autenticidad', 'expresión', 'unicidad']
        }
      ],
      resources: [
        {
          id: '4-r1',
          title: 'Ejercicio: Encontrar tu voz única',
          type: 'worksheet',
          description: 'Descubre qué te hace único y cómo expresarlo.'
        }
      ]
    },
    leadMagnet: {
      title: '¿Tu dolor te define? El mapa de tu historia',
      description: 'Descubre si estás viviendo desde tu historia o desde tu esencia.',
      type: 'pdf'
    },
    testimonials: [
      {
        id: '4-t1',
        name: 'Laura S.',
        enneatype: 4,
        role: 'Artista',
        content: 'Aprendí que mi profundidad no es un problema, es un camino. Hoy creo desde mi unicidad.',
        rating: 5
      }
    ],
    products: [
      {
        id: '4-p1',
        name: 'Devida Elección: Curso completo',
        description: 'Descubre la vocación que es huella digital.',
        price: 97,
        type: 'course'
      }
    ]
  },
  {
    id: 5,
    slug: 'patrones-invisibles',
    name: 'Patrones Invisibles',
    subtitle: 'Para el alma del Tipo 5',
    enneatype: 5,
    essence: 'El código fuente de tu psique',
    colors: {
      primary: '#1E3A5F',
      secondary: '#B87333',
      tertiary: '#00BFFF',
      accent: '#191970',
      text: '#4A5568'
    },
    icon: 'Brain',
    wings: { left: 4, right: 6 },
    arrows: { integration: 8, disintegration: 7 },
    triad: 'mental',
    emotion: 'Avaricia → Conocimiento no poseído',
    gift: 'La sabiduría de la comprensión profunda',
    description: 'Descifra el código de tu funcionamiento interno. El conocimiento que libera en lugar de aislar.',
    manifesto: 'Patrones Invisibles nos muestra que el conocimiento no es para acumular, sino para compartir. Que la observación puede convertirse en participación cuando el saber encuentra su propósito.',
    content: {
      articles: [
        {
          id: '5-1',
          title: 'El mapa de tu psique: Guía de autoanálisis',
          excerpt: 'Herramientas para observar tus patrones sin juzgarlos.',
          readTime: '10 min',
          tags: ['análisis', 'patrones', 'observación']
        },
        {
          id: '5-2',
          title: 'Cuando el conocimiento nos aísla',
          excerpt: 'De la observación segura a la participación vulnerable.',
          readTime: '7 min',
          tags: ['aislamiento', 'participación', 'vulnerabilidad']
        }
      ],
      resources: [
        {
          id: '5-r1',
          title: 'Guía de autoanálisis',
          type: 'pdf',
          description: 'Un marco para observar tus patrones internos.'
        }
      ]
    },
    leadMagnet: {
      title: 'El mapa de tu psique: Guía de autoanálisis',
      description: 'Descifra el código de tu funcionamiento interno.',
      type: 'pdf'
    },
    testimonials: [
      {
        id: '5-t1',
        name: 'Roberto K.',
        enneatype: 5,
        role: 'Investigador',
        content: 'Aprendí que el conocimiento no es para acumular, sino para compartir. Hoy participo desde mi saber.',
        rating: 5
      }
    ],
    products: [
      {
        id: '5-p1',
        name: 'Patrones Invisibles: Curso completo',
        description: 'Descifra el código fuente de tu psique.',
        price: 97,
        type: 'course'
      }
    ]
  },
  {
    id: 6,
    slug: 'el-centro-de-mando',
    name: 'El Centro de Mando',
    subtitle: 'Para el alma del Tipo 6',
    enneatype: 6,
    essence: 'La soberanía de la decisión',
    colors: {
      primary: '#36454F',
      secondary: '#FFBF00',
      tertiary: '#C0C0C0',
      accent: '#434B4D',
      text: '#1C1C1C'
    },
    icon: 'Compass',
    wings: { left: 5, right: 7 },
    arrows: { integration: 9, disintegration: 3 },
    triad: 'mental',
    emotion: 'Miedo → Coraje',
    gift: 'La sabiduría de la confianza',
    description: 'Encuentra tu brújula interna. La seguridad que no depende de certezas externas.',
    manifesto: 'El Centro de Mando nos enseña que la verdadera seguridad no viene de controlar el futuro, sino de confiar en nuestra capacidad de responder. Que la duda puede convertirse en discernimiento.',
    content: {
      articles: [
        {
          id: '6-1',
          title: '¿Duda o intuición? El test de tus decisiones',
          excerpt: 'Aprendiendo a diferenciar la parálisis del discernimiento.',
          readTime: '6 min',
          tags: ['decisiones', 'duda', 'intuición']
        },
        {
          id: '6-2',
          title: 'Framework: Toma de decisiones conscientes',
          excerpt: 'Un proceso para decidir desde la claridad, no desde el miedo.',
          readTime: '8 min',
          tags: ['decisiones', 'framework', 'claridad']
        }
      ],
      resources: [
        {
          id: '6-r1',
          title: 'Framework de decisiones conscientes',
          type: 'pdf',
          description: 'Un proceso paso a paso para decisiones claras.'
        }
      ]
    },
    leadMagnet: {
      title: '¿Duda o intuición? El test de tus decisiones',
      description: 'Aprende a diferenciar la parálisis del discernimiento.',
      type: 'quiz'
    },
    testimonials: [
      {
        id: '6-t1',
        name: 'Diana M.',
        enneatype: 6,
        role: 'Consultora',
        content: 'Encontré mi brújula interna. Hoy decido desde la confianza, no desde el miedo.',
        rating: 5
      }
    ],
    products: [
      {
        id: '6-p1',
        name: 'El Centro de Mando: Curso completo',
        description: 'Encuentra la soberanía de tu decisión.',
        price: 97,
        type: 'course'
      }
    ]
  },
  {
    id: 7,
    slug: 'conciencia-energetica',
    name: 'Conciencia Energética',
    subtitle: 'Para el alma del Tipo 7',
    enneatype: 7,
    essence: 'La ecología de tu entusiasmo',
    colors: {
      primary: '#FF00FF',
      secondary: '#00FFFF',
      tertiary: '#FFD700',
      accent: '#FF6600',
      text: '#2D3748'
    },
    icon: 'Sun',
    wings: { left: 6, right: 8 },
    arrows: { integration: 5, disintegration: 1 },
    triad: 'mental',
    emotion: 'Gula → Sobriedad gozosa',
    gift: 'La sabiduría del gozo sostenible',
    description: 'Tu entusiasmo es un regalo cuando se sustenta. La ecología del placer consciente.',
    manifesto: 'Conciencia Energética nos invita a ver que el entusiasmo no necesita escape constante. Que el gozo profundo es sostenible cuando anclamos nuestra energía en el presente.',
    content: {
      articles: [
        {
          id: '7-1',
          title: '¿Huyes del dolor? El mapa de tus escapes',
          excerpt: 'Reconociendo los patrones de evitación que te agotan.',
          readTime: '6 min',
          tags: ['evitación', 'dolor', 'presencia']
        },
        {
          id: '7-2',
          title: 'El placer consciente: Disfrutar sin huir',
          excerpt: 'Aprendiendo a saborear sin necesidad de más.',
          readTime: '7 min',
          tags: ['placer', 'presencia', 'satisfacción']
        }
      ],
      resources: [
        {
          id: '7-r1',
          title: 'Lista: 50 experiencias significativas',
          type: 'pdf',
          description: 'Experiencias profundas que no requieren acumulación.'
        }
      ]
    },
    leadMagnet: {
      title: '¿Huyes del dolor? El mapa de tus escapes',
      description: 'Descubre si tu entusiasmo está sirviendo como evitación.',
      type: 'pdf'
    },
    testimonials: [
      {
        id: '7-t1',
        name: 'Elena V.',
        enneatype: 7,
        role: 'Emprendedora',
        content: 'Aprendí que el gozo profundo es sostenible. Hoy disfruto sin necesidad de más.',
        rating: 5
      }
    ],
    products: [
      {
        id: '7-p1',
        name: 'Conciencia Energética: Curso completo',
        description: 'Descubre la ecología de tu entusiasmo.',
        price: 97,
        type: 'course'
      }
    ]
  },
  {
    id: 8,
    slug: 'el-habito-de-la-personalidad',
    name: 'El Hábito de la Personalidad',
    subtitle: 'Para el alma del Tipo 8',
    enneatype: 8,
    essence: 'La encarnación del poder',
    colors: {
      primary: '#0D0D0D',
      secondary: '#8B6914',
      tertiary: '#4A0404',
      accent: '#FFD700',
      text: '#F5F5F5'
    },
    icon: 'Crown',
    wings: { left: 7, right: 9 },
    arrows: { integration: 2, disintegration: 5 },
    triad: 'instinctive',
    emotion: 'Lujuria → Inocencia',
    gift: 'La sabiduría del poder al servicio',
    description: 'Tu fuerza es un regalo cuando se encarna con ternura. El poder que protege sin controlar.',
    manifesto: 'El Hábito de la Personalidad nos muestra que el verdadero poder no necesita demostración. Que la vulnerabilidad no es debilidad, sino la otra cara de la fortaleza.',
    content: {
      articles: [
        {
          id: '8-1',
          title: '¿Control o protección? El test de tu poder',
          excerpt: 'Diferenciando el poder que cuida del poder que controla.',
          readTime: '7 min',
          tags: ['poder', 'control', 'protección']
        },
        {
          id: '8-2',
          title: 'La vulnerabilidad como fortaleza',
          excerpt: 'Por qué mostrar tu suavidad no te hace débil.',
          readTime: '6 min',
          tags: ['vulnerabilidad', 'fuerza', 'ternura']
        }
      ],
      resources: [
        {
          id: '8-r1',
          title: 'Guía: La vulnerabilidad como fortaleza',
          type: 'pdf',
          description: 'Cómo integrar tu suavidad sin perder tu fuerza.'
        }
      ]
    },
    leadMagnet: {
      title: '¿Control o protección? El test de tu poder',
      description: 'Descubre si tu poder está sirviendo o controlando.',
      type: 'quiz'
    },
    testimonials: [
      {
        id: '8-t1',
        name: 'Jorge L.',
        enneatype: 8,
        role: 'Líder',
        content: 'Aprendí que el verdadero poder no necesita demostración. Hoy protejo sin controlar.',
        rating: 5
      }
    ],
    products: [
      {
        id: '8-p1',
        name: 'El Hábito de la Personalidad: Curso completo',
        description: 'Encarna tu poder con ternura.',
        price: 97,
        type: 'course'
      }
    ]
  },
  {
    id: 9,
    slug: 'saber-consentido',
    name: 'Saber Consentido',
    subtitle: 'El mapa que reconcilia el todo',
    enneatype: 9,
    essence: 'El mapa que reconcilia el todo',
    colors: {
      primary: '#704214',
      secondary: '#C5B358',
      tertiary: '#F5F5DC',
      accent: '#8B4513',
      text: '#5C4A3A'
    },
    icon: 'Mandala',
    wings: { left: 8, right: 1 },
    arrows: { integration: 3, disintegration: 6 },
    triad: 'instinctive',
    emotion: 'Pereza → Acción correcta',
    gift: 'La sabiduría de la paz activa',
    description: 'El Eneagrama no es un test de personalidad. Es el mapa maestro que revela el "por qué" detrás de todo.',
    manifesto: 'Saber Consentido no es acumular información sobre tu tipo. Es consentir el mapa completo: tus alas, tus flechas, tus tríadas, tu camino de integración.',
    content: {
      articles: [
        {
          id: '9-1',
          title: 'Eneagrama sin dogmas: Una introducción',
          excerpt: 'Comprendiendo el Eneagrama como mapa, no como caja.',
          readTime: '8 min',
          tags: ['introducción', 'eneagrama', 'mapa']
        },
        {
          id: '9-2',
          title: 'Las 9 estaciones: Un sistema vivo',
          excerpt: 'Cómo las estaciones se nutren y transforman entre sí.',
          readTime: '10 min',
          tags: ['sistema', 'conexiones', 'integración']
        }
      ],
      resources: [
        {
          id: '9-r1',
          title: 'Mapa: Las 9 estaciones interactivo',
          type: 'pdf',
          description: 'Visualización de todas las conexiones del sistema.'
        },
        {
          id: '9-r2',
          title: 'Ebook: Eneagrama sin dogmas',
          type: 'pdf',
          description: 'Una introducción profunda pero accesible.'
        }
      ]
    },
    leadMagnet: {
      title: '¿Por dónde empiezo? Test de orientación',
      description: 'Descubre tu punto de entrada al ecosistema.',
      type: 'quiz'
    },
    testimonials: [
      {
        id: '9-t1',
        name: 'Carmen R.',
        enneatype: 9,
        role: 'Facilitadora',
        content: 'Finalmente entendí el Eneagrama como sistema. El mapa completo cambió mi comprensión.',
        rating: 5
      }
    ],
    products: [
      {
        id: '9-p1',
        name: 'Viaje Completo: Las 9 Estaciones',
        description: 'Acceso a todo el ecosistema de cursos.',
        price: 997,
        originalPrice: 2073,
        type: 'package'
      }
    ]
  }
];

export const testQuestions: TestQuestion[] = [
  {
    id: 1,
    question: '¿Qué área de tu vida te genera más fricción actualmente?',
    options: [
      { text: 'Mi relación con el tiempo y la organización', stations: [1] },
      { text: 'Mis relaciones personales y vínculos', stations: [2] },
      { text: 'Mi carrera y reconocimiento profesional', stations: [3] },
      { text: 'Mi sentido de propósito e identidad', stations: [4] },
      { text: 'Mi necesidad de entender cómo funciono', stations: [5] },
      { text: 'Mi capacidad de tomar decisiones', stations: [6] },
      { text: 'Mi relación con el placer y la moderación', stations: [7] },
      { text: 'Mi forma de usar el poder y la autoridad', stations: [8] },
      { text: 'Mi conexión con el todo y la paz interior', stations: [9] }
    ]
  },
  {
    id: 2,
    question: '¿Cuál de estas frases resuena más contigo?',
    options: [
      { text: 'Siento que debería ser mejor de lo que soy', stations: [1] },
      { text: 'A veces doy tanto que me olvido de mí', stations: [2] },
      { text: 'Me preocupa no ser lo suficientemente exitoso', stations: [3] },
      { text: 'Siento que algo me falta, que no soy completo', stations: [4] },
      { text: 'Necesito entender algo a fondo antes de actuar', stations: [5] },
      { text: 'La incertidumbre me paraliza a veces', stations: [6] },
      { text: 'Me cuesta quedarme quieto, siempre busco más', stations: [7] },
      { text: 'Prefiero controlar antes que sentirme vulnerable', stations: [8] },
      { text: 'A veces me pierdo para mantener la armonía', stations: [9] }
    ]
  },
  {
    id: 3,
    question: '¿Qué buscas principalmente en tu proceso de crecimiento?',
    options: [
      { text: 'Ser más efectivo sin ser tan duro conmigo', stations: [1] },
      { text: 'Aprender a recibir sin sentir culpa', stations: [2] },
      { text: 'Encontrar éxito que sea realmente mío', stations: [3] },
      { text: 'Descubrir quién soy realmente', stations: [4] },
      { text: 'Comprender mejor cómo funciono', stations: [5] },
      { text: 'Tomar decisiones con más confianza', stations: [6] },
      { text: 'Disfrutar más profundamente lo que tengo', stations: [7] },
      { text: 'Usar mi fuerza de manera más consciente', stations: [8] },
      { text: 'Encontrar paz sin perderme a mí mismo', stations: [9] }
    ]
  },
  {
    id: 4,
    question: '¿En qué tríada te sientes más identificado?',
    options: [
      { text: 'Prefiero pensar antes de sentir o actuar', stations: [5, 6, 7] },
      { text: 'Mis emociones guían gran parte de mi vida', stations: [2, 3, 4] },
      { text: 'Prefiero actuar y luego reflexionar', stations: [8, 9, 1] }
    ]
  },
  {
    id: 5,
    question: '¿Cuál es tu relación con el cambio?',
    options: [
      { text: 'Me cuesta, prefiero las cosas claras y correctas', stations: [1] },
      { text: 'Me adapto, pero me preocupa cómo afecto a otros', stations: [2] },
      { text: 'Lo busco si me lleva al éxito', stations: [3] },
      { text: 'Lo siento intensamente, a veces me abruma', stations: [4] },
      { text: 'Lo analizo mucho antes de decidirme', stations: [5] },
      { text: 'Me preocupa, prefiero lo probado', stations: [6] },
      { text: '¡Lo amo! Siempre busco nuevas experiencias', stations: [7] },
      { text: 'Lo impulso, no me gusta sentirme limitado', stations: [8] },
      { text: 'Me resisto, prefiero la armonía estable', stations: [9] }
    ]
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Cuando la perfección bloquea tu creatividad',
    excerpt: 'Descubre cómo la búsqueda obsesiva de lo perfecto puede paralizarte y qué hacer al respecto.',
    content: 'Contenido completo del artículo...',
    author: 'Facilitador',
    date: '2024-02-15',
    readTime: '5 min',
    primaryStation: 1,
    secondaryStations: [4, 5],
    triad: 'instinctive',
    level: 'intermediate',
    tags: ['perfeccionismo', 'creatividad', 'bloqueos', 'tipo1']
  },
  {
    id: 'blog-2',
    title: '¿Das demasiado? Reconociendo el agotamiento empático',
    excerpt: 'Señales de alerta de que tu generosidad está trabajando en tu contra.',
    content: 'Contenido completo del artículo...',
    author: 'Facilitador',
    date: '2024-02-10',
    readTime: '6 min',
    primaryStation: 2,
    secondaryStations: [4, 8],
    triad: 'emotional',
    level: 'beginner',
    tags: ['límites', 'agotamiento', 'empatía', 'tipo2']
  },
  {
    id: 'blog-3',
    title: 'Éxito vs. Realización: La diferencia crucial',
    excerpt: 'Por qué los logros externos no siempre traen satisfacción interna.',
    content: 'Contenido completo del artículo...',
    author: 'Facilitador',
    date: '2024-02-05',
    readTime: '6 min',
    primaryStation: 3,
    secondaryStations: [6, 9],
    triad: 'emotional',
    level: 'intermediate',
    tags: ['éxito', 'realización', 'propósito', 'tipo3']
  }
];

export const events: Event[] = [
  {
    id: 'event-1',
    title: 'El Centro de Mando: Taller de toma de decisiones',
    stationId: 6,
    date: '2024-03-15',
    time: '19:00',
    duration: '2 horas',
    modality: 'online',
    price: 30,
    spots: 20,
    spotsLeft: 12,
    description: 'Aprende a tomar decisiones desde la confianza, no desde el miedo.'
  },
  {
    id: 'event-2',
    title: 'Roles y Sinergia: Éxito consciente',
    stationId: 3,
    date: '2024-03-22',
    time: '19:00',
    duration: '2 horas',
    modality: 'online',
    price: 30,
    spots: 20,
    spotsLeft: 15,
    description: 'Encuentra el éxito que no requiere sacrificar tu alma.'
  },
  {
    id: 'event-3',
    title: 'Conciencia Energética: El placer consciente',
    stationId: 7,
    date: '2024-03-29',
    time: '19:00',
    duration: '2 horas',
    modality: 'online',
    price: 30,
    spots: 20,
    spotsLeft: 18,
    description: 'Descubre la ecología de tu entusiasmo.'
  }
];

export const getStationBySlug = (slug: string): Station | undefined => {
  return stations.find(s => s.slug === slug);
};

export const getStationById = (id: number): Station | undefined => {
  return stations.find(s => s.id === id);
};

export const getWingStations = (station: Station): Station[] => {
  return [
    getStationById(station.wings.left)!,
    getStationById(station.wings.right)!
  ];
};

export const getArrowStations = (station: Station): { integration: Station; disintegration: Station } => {
  return {
    integration: getStationById(station.arrows.integration)!,
    disintegration: getStationById(station.arrows.disintegration)!
  };
};
