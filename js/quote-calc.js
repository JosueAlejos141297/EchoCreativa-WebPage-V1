/* ==========================================================================
   ECHOCREATIVA — INTERACTIVE QUOTE BUILDER & PRICING FILTER
   Precios exactos tomados de la Propuesta Comercial Fijos 2026 oficial
   ========================================================================== */

const PRICING_CATALOG = {
  web: [
    {
      id: 'web_esencia',
      name: 'Página Web Esencia',
      category: 'Páginas Web',
      type: 'Pago Único',
      price: 3990,
      badge: 'Básico',
      description: 'One Page de hasta 5 secciones. Ideal para negocios que inician su presencia formal.',
      features: [
        'One Page de hasta 5 secciones dinámicas',
        'Inicio, Quiénes Somos y Servicios destacados',
        'Beneficios, galería y testimonios',
        'Formulario de contacto y botón WhatsApp directo',
        'Diseño 100% adaptable a celulares',
        'SEO técnico básico y 1 ronda de modificaciones'
      ],
      whatsappMsg: 'Hola EchoCreativa, me interesa el paquete de Página Web Esencia ($3,990 + IVA). ¿Cómo iniciamos?'
    },
    {
      id: 'web_impulso',
      name: 'Sitio Web Impulso',
      category: 'Páginas Web',
      type: 'Pago Único',
      price: 6490,
      badge: 'Más Popular',
      featured: true,
      description: 'Sitio informativo estructurado de 3 páginas para mayor claridad y autoridad.',
      features: [
        'Sitio informativo de 3 páginas completas',
        'Inicio y presentación corporativa',
        'Nosotros y catálogo de soluciones / servicios',
        'Contacto, mapa de ubicación y formulario',
        'Menú interactivo, WhatsApp y redes sociales',
        'Optimización SEO básica y responsive total'
      ],
      whatsappMsg: 'Hola EchoCreativa, me interesa contratar el Sitio Web Impulso ($6,490 + IVA). ¿Podemos platicarlo?'
    },
    {
      id: 'web_expansion',
      name: 'Sitio Web Expansión',
      category: 'Páginas Web',
      type: 'Pago Único',
      price: 7990,
      badge: 'Avanzado',
      description: 'Sitio corporativo completo de 5 páginas para empresas en crecimiento.',
      features: [
        'Sitio informativo de 5 páginas independientes',
        'Inicio, Nosotros, Servicios a detalle',
        'Galería, portafolio de proyectos o casos de éxito',
        'Contacto con mapa, WhatsApp y formulario directo',
        'Arquitectura interna preparada para SEO avanzado',
        'Integración con herramientas analíticas'
      ],
      whatsappMsg: 'Hola EchoCreativa, deseo informes sobre el Sitio Web Expansión ($7,990 + IVA). ¿Qué requerimientos necesitan?'
    }
  ],

  tienda: [
    {
      id: 'tienda_esencia',
      name: 'Tienda Esencia',
      category: 'Comercio Electrónico',
      type: 'Pago Único',
      price: 9990,
      badge: 'Inicial',
      description: 'Catálogo con carrito y cobros seguros para comenzar a vender en internet.',
      features: [
        'Carga inicial de hasta 10 productos con fotos y datos',
        'Categorías y fichas individuales de producto',
        'Carrito de compras y proceso de checkout fluido',
        'Integración estándar con pasarela Mercado Pago',
        'Configuración básica de costos de envío',
        'Prueba integral de compra'
      ],
      whatsappMsg: 'Hola EchoCreativa, quiero abrir mi tienda en línea con el paquete Tienda Esencia ($9,990 + IVA).'
    },
    {
      id: 'tienda_impulso',
      name: 'Tienda Impulso',
      category: 'Comercio Electrónico',
      type: 'Pago Único',
      price: 13990,
      badge: 'Recomendada',
      featured: true,
      description: 'Tienda con mayor capacidad de catálogo para negocios con inventario activo.',
      features: [
        'Carga de hasta 30 productos organizados',
        'Todas las funciones del nivel Esencia',
        'Filtros por categoría y búsqueda de productos',
        'Integración con Mercado Pago y confirmaciones',
        'Prueba de compra y validación de cobros',
        'Una ronda de modificaciones incluida'
      ],
      whatsappMsg: 'Hola EchoCreativa, me interesa el paquete Tienda Impulso ($13,990 + IVA) para vender mis productos en línea.'
    },
    {
      id: 'tienda_expansion',
      name: 'Tienda Expansión',
      category: 'Comercio Electrónico',
      type: 'Pago Único',
      price: 17990,
      badge: 'Completo',
      description: 'Plataforma de e-commerce robusta con hasta 50 productos y capacitación.',
      features: [
        'Carga inicial de hasta 50 productos detallados',
        'Todas las funciones del nivel Impulso',
        'Estructura para variaciones y catálogo extendido',
        'Pruebas completas de pasarelas y envíos',
        'Explicación básica y sesión de uso para tu equipo',
        'Soporte inicial tras el lanzamiento'
      ],
      whatsappMsg: 'Hola EchoCreativa, busco una tienda online con el paquete Tienda Expansión ($17,990 + IVA).'
    }
  ],

  redes: [
    {
      id: 'redes_esencia',
      name: 'Redes Esencia',
      category: 'Gestión de Redes',
      type: 'Mensualidad',
      price: 3290,
      badge: 'Mensual',
      description: 'Presencia constante y profesional en tu canal prioritario.',
      features: [
        'Gestión de 1 red social prioritaria (Facebook o Instagram)',
        '8 publicaciones mensuales diseñadas con copy profesional',
        '4 historias alineadas a la estrategia',
        'Calendario editorial mensual anticipado',
        'Programación y publicación automática',
        'Reporte básico mensual de métricas'
      ],
      whatsappMsg: 'Hola EchoCreativa, me interesa la gestión de redes con el plan Redes Esencia ($3,290/mes). ¿Cómo coordinamos?'
    },
    {
      id: 'redes_impulso',
      name: 'Redes Impulso',
      category: 'Gestión de Redes',
      type: 'Mensualidad',
      price: 5490,
      badge: 'Crecimiento',
      featured: true,
      description: 'Contenido multi-formato con Reels y 1 campaña publicitaria en Meta Ads.',
      features: [
        'Gestión de 2 redes sociales (ej. Instagram + Facebook)',
        '10 publicaciones mensuales + 2 Reels editados',
        '6 historias mensuales',
        '1 campaña publicitaria de Meta Ads (diseño, copy y segmentación)',
        'Calendario, copies y programación incluida',
        'Reporte estándar mensual de rendimiento'
      ],
      whatsappMsg: 'Hola EchoCreativa, me gustaría cotizar el plan Redes Impulso ($5,490/mes) que incluye Reels y pauta publicitaria.'
    },
    {
      id: 'redes_expansion',
      name: 'Redes Expansión',
      category: 'Gestión de Redes',
      type: 'Mensualidad',
      price: 8490,
      badge: 'Escalamiento',
      description: 'Estrategia agresiva de contenido y pauta para marcas que buscan liderar.',
      features: [
        'Gestión activa de 2 redes sociales',
        '12 publicaciones mensuales + 4 Reels dinámicos',
        '8 historias interactivas',
        'Hasta 2 campañas publicitarias en Meta Ads optimizadas',
        'Calendario estratégico, copies consultivos y programación',
        'Reporte ejecutivo completo con análisis de retorno'
      ],
      whatsappMsg: 'Hola EchoCreativa, me interesa el plan Redes Expansión ($8,490/mes) para escalar mi captación en redes.'
    }
  ],

  bots: [
    {
      id: 'bot_esencial',
      name: 'Plan Esencial',
      category: 'Chatbots WhatsApp IA',
      type: 'Suscripción Mensual Todo Incluido',
      price: 1900,
      badge: 'Nivel 01 · Atención 24/7',
      description: 'Respuestas automáticas FAQ y captura ordenada de prospectos las 24 horas.',
      features: [
        'Respuestas automáticas FAQ: Horarios, ubicación, catálogo y dudas frecuentes',
        'Captura de prospectos: Registro de nombre, contacto y motivo de consulta',
        'Canalización humana: Transferencia directa a un asesor de su equipo',
        'Soporte mensual: Revisión general y ajustes menores continuos',
        'Convenio 6 meses: Todo incluido en tu iguala mensual de servicio',
        'Entrega y puesta en marcha estimada en 5 a 7 días hábiles'
      ],
      whatsappMsg: 'Hola EchoCreativa, me interesa contratar el Plan Esencial de Chatbot con IA ($1,900 MXN/mes). ¿Cómo iniciamos?'
    },
    {
      id: 'bot_crecimiento',
      name: 'Plan Crecimiento',
      category: 'Chatbots WhatsApp IA',
      type: 'Suscripción Mensual Todo Incluido',
      price: 2500,
      badge: '★ Más Elegido · Comercial & IA',
      featured: true,
      description: 'IA entrenada con conocimiento propio del negocio y pre-calificación activa.',
      features: [
        'Todo lo del Plan Esencial + entrenamiento con base de conocimiento del negocio',
        'Cotizaciones y pre-calificación: Cálculos orientativos y filtrado de intención',
        'Seguimiento estructurado: Clasificación de conversaciones por etapa comercial',
        'Soporte prioritario: Ajustes menores mensuales y calibración continua de IA',
        'Convenio 6 meses: Todo incluido en tu iguala mensual de servicio',
        'Entrega y puesta en marcha estimada en 5 a 7 días hábiles'
      ],
      whatsappMsg: 'Hola EchoCreativa, me interesa contratar el Plan Crecimiento de Chatbot con IA ($2,500 MXN/mes, el más elegido). ¿Podemos coordinar la implementación?'
    },
    {
      id: 'bot_pro',
      name: 'Plan Pro Empresarial',
      category: 'Chatbots WhatsApp IA',
      type: 'Suscripción Mensual Todo Incluido',
      price: 3400,
      badge: 'Nivel 03 · Escala & Multi-Área',
      description: 'Flujos multi-área (Ventas, Soporte, Sucursales) y enrutamiento inteligente.',
      features: [
        'Todo lo del Plan Crecimiento + flujos personalizados por área (Ventas, Soporte, Sucursales)',
        'Enrutamiento inteligente: Asignación de chats a múltiples ejecutivos por especialidad',
        'Optimización continua: Revisión mensual de métricas de conversión y atención',
        'Soporte preferente: Bolsa mensual de ajustes menores y actualización de flujos',
        'Convenio 6 meses: Todo incluido en tu iguala mensual de servicio',
        'Entrega y puesta en marcha estimada en 5 a 7 días hábiles'
      ],
      whatsappMsg: 'Hola EchoCreativa, me interesa el Plan Pro Empresarial de Chatbot con IA ($3,400 MXN/mes con flujos por área y enrutamiento a ejecutivos).'
    }
  ]
};

// Filter tabs logic
function filterPricingCategory(catKey) {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(b => {
    if (b.dataset.category === catKey) {
      b.classList.add('active');
    } else {
      b.classList.remove('active');
    }
  });

  const cardsContainer = document.getElementById('pricingCardsGrid');
  if (!cardsContainer) return;

  const items = PRICING_CATALOG[catKey] || PRICING_CATALOG.web;

  cardsContainer.innerHTML = items.map(item => `
    <article class="pricing-card ${item.featured ? 'featured-card' : ''}">
      ${item.badge ? `<span class="featured-ribbon">${item.badge}</span>` : ''}
      <div>
        <h3 class="pricing-tier-name">${item.name}</h3>
        <span class="pricing-tier-type">${item.category} · ${item.type}</span>
        <div class="price-figure-wrap">
          <div class="price-main-line">
            <span class="price-from-label">Desde:</span>
            <span class="price-amount">$${item.price.toLocaleString('es-MX')}</span>
            <span class="price-currency">MXN ${item.type.includes('Mensual') || item.type.includes('Suscripción') || item.type.includes('Combinado') ? '/ mes' : '+ IVA'}</span>
          </div>
          <p class="price-notes">${item.description}</p>
        </div>
        <ul class="pricing-features-list">
          ${item.features.map(f => `
            <li>
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <a href="https://wa.me/525670069062?text=${encodeURIComponent(item.whatsappMsg)}" target="_blank" class="${item.featured ? 'btn-magenta' : 'btn-primary'}" style="justify-content: center; width: 100%;">
        Contratar este plan →
      </a>
    </article>
  `).join('');

  // Toggle chatbot conditions callout box
  const condBox = document.getElementById('pricingChatbotConditions');
  if (condBox) {
    if (catKey === 'bots') {
      condBox.style.display = 'block';
    } else {
      condBox.style.display = 'none';
    }
  }
}

// Interactive Custom Calculator (Cotizador Rápido)
const CALC_ITEMS = [
  { id: 'c_web_imp', name: 'Sitio Web Impulso (3 Páginas)', price: 6490, type: 'único' },
  { id: 'c_web_exp', name: 'Sitio Web Expansión (5 Páginas)', price: 7990, type: 'único' },
  { id: 'c_shop', name: 'Tienda en Línea con Mercado Pago', price: 9990, type: 'único' },
  { id: 'c_gprofile', name: 'Alta en Google Business Profile', price: 1190, type: 'único' },
  { id: 'c_bot_esencial', name: 'Chatbot IA Esencial (FAQ + Captura)', price: 1900, type: 'mensual' },
  { id: 'c_bot_crecimiento', name: 'Chatbot IA Crecimiento (Precalificación + IA)', price: 2500, type: 'mensual' },
  { id: 'c_bot_pro', name: 'Chatbot IA Pro Empresarial (Multi-Área)', price: 3400, type: 'mensual' },
  { id: 'c_redes_imp', name: 'Redes Sociales Impulso (10 posts + Reels + Ads)', price: 5490, type: 'mensual' },
  { id: 'c_bi', name: 'Dashboards BI sobre SQL / Firebird / Aspel', price: 8500, type: 'único' }
];

let selectedCalcItems = new Set(['c_web_imp', 'c_gprofile', 'c_bot_crecimiento']);

function renderCalculator() {
  const container = document.getElementById('calcOptionsContainer');
  if (!container) return;

  container.innerHTML = CALC_ITEMS.map(item => {
    const isChecked = selectedCalcItems.has(item.id);
    return `
      <div class="calc-option-item ${isChecked ? 'selected' : ''}" onclick="toggleCalcOption('${item.id}')">
        <input type="checkbox" class="calc-checkbox" ${isChecked ? 'checked' : ''} onclick="event.stopPropagation(); toggleCalcOption('${item.id}')">
        <div class="calc-opt-info">
          <h5>${item.name}</h5>
          <span class="calc-opt-price">Desde: $${item.price.toLocaleString('es-MX')} MXN <small>(${item.type})</small></span>
        </div>
      </div>
    `;
  }).join('');

  updateCalcTotal();
}

function toggleCalcOption(id) {
  if (selectedCalcItems.has(id)) {
    selectedCalcItems.delete(id);
  } else {
    selectedCalcItems.add(id);
  }
  renderCalculator();
}

function updateCalcTotal() {
  let totalOnce = 0;
  let totalMonthly = 0;
  const chosenNames = [];

  CALC_ITEMS.forEach(item => {
    if (selectedCalcItems.has(item.id)) {
      chosenNames.push(item.name);
      if (item.type === 'mensual') {
        totalMonthly += item.price;
      } else {
        totalOnce += item.price;
      }
    }
  });

  const totalEl = document.getElementById('calcTotalVal');
  const detailsEl = document.getElementById('calcDetailsText');
  const sendBtn = document.getElementById('calcSendBtn');

  if (totalEl) {
    totalEl.textContent = `Desde: $${(totalOnce + totalMonthly).toLocaleString('es-MX')}`;
  }

  if (detailsEl) {
    detailsEl.textContent = `Pago inicial estimado: $${totalOnce.toLocaleString('es-MX')} MXN + IVA | Mensualidad: $${totalMonthly.toLocaleString('es-MX')} MXN + IVA`;
  }

  if (sendBtn) {
    const msg = `Hola EchoCreativa, utilicé el cotizador interactivo en su web. Seleccioné los siguientes servicios:\n• ${chosenNames.join('\n• ')}\n\nInversión inicial estimada: $${totalOnce.toLocaleString('es-MX')} MXN\nMensualidad: $${totalMonthly.toLocaleString('es-MX')} MXN\n¿Podemos revisarlo juntos?`;
    sendBtn.href = `https://wa.me/525670069062?text=${encodeURIComponent(msg)}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  filterPricingCategory('web');
  renderCalculator();
});
