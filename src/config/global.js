export default {
  global: {
    Name: 'Diagnóstico y documentación de procesos logísticos',
    Description:
      'El componente formativo desarrolla competencias relacionadas con el análisis y documentación de los procesos logísticos mediante la evaluación de costos, oferta y demanda, desempeño de la cadena logística y tecnologías aplicadas en la cadena de abastecimiento. Asimismo, fortalece la capacidad para interpretar diagnósticos logísticos, identificar oportunidades de mejora y documentar procesos de aprovisionamiento, distribución y transporte de acuerdo con los objetivos organizacionales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Procedimiento para el análisis de resultados sobre los diagnósticos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aplicabilidad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Unidades estratégicas de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Definición',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Costos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptualización',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Análisis',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Evaluación de relación beneficio-costo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Establecimiento de niveles de servicio al cliente',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Concepto de oferta y demanda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de oferta y demanda',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Concepto de servicios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Análisis de información',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Eslabones de cadena logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Aplicabilidad',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Gerencia basada en valor, GBV o <em>Value Based Management</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Aplicabilidad',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Estrategias para crear valor económico agregado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Aplicabilidad',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'EVA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Concepto',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Aplicabilidad',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Diseño y mejora de procesos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Definición',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Análisis',
            hash: 't_9_2',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Tecnologías de apoyo en la cadena de abastecimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Concepto',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Tipos',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Aplicabilidad',
            hash: 't_10_3',
          },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Diseño de operaciones en <em>cross docking</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Concepto',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Aplicabilidad',
            hash: 't_11_2',
          },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Fijación de precio y establecimiento de cláusulas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '12.1',
            titulo: 'Concepto',
            hash: 't_12_1',
          },
          {
            numero: '12.2',
            titulo: 'Métodos',
            hash: 't_12_2',
          },
          {
            numero: '12.3',
            titulo: 'Aplicabilidad',
            hash: 't_12_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/12150022_CF01_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },

  glosario: [
    {
      termino: 'Abastecimiento',
      significado:
        'Proceso mediante el cual una organización adquiere productos, materiales o servicios necesarios para su operación.',
    },
    {
      termino: 'Cadena de abastecimiento',
      significado:
        'Conjunto de procesos y actividades relacionadas con el flujo de bienes, servicios e información desde el proveedor hasta el cliente final.',
    },
    {
      termino: 'Cadena logística',
      significado:
        'Secuencia de actividades relacionadas con almacenamiento, transporte, distribución y entrega de productos.',
    },
    {
      termino: '<em>Cross docking</em>',
      significado:
        'Estrategia logística donde los productos son recibidos y enviados rápidamente sin permanecer largos periodos en almacenamiento.',
    },
    {
      termino: 'Costos logísticos',
      significado:
        'Gastos generados en actividades de transporte, almacenamiento, inventarios y distribución.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de productos o servicios solicitados por los consumidores en el mercado.',
    },
    {
      termino: 'Distribución',
      significado:
        'Proceso logístico encargado de trasladar productos hacia puntos de venta o clientes finales.',
    },
    {
      termino: 'ECR (<em>Efficient Consumer Response</em>)',
      significado:
        'Técnica orientada a mejorar la respuesta de la cadena de abastecimiento frente a las necesidades del consumidor.',
    },
    {
      termino: 'ERP (<em>Enterprise Resource Planning</em>)',
      significado:
        'Sistema tecnológico utilizado para integrar información y procesos de diferentes áreas de la organización.',
    },
    {
      termino: 'Estrategia logística',
      significado:
        'Conjunto de acciones orientadas a optimizar procesos relacionados con abastecimiento, almacenamiento y distribución.',
    },
    {
      termino: 'EVA (<em>Economic Value Added</em>)',
      significado:
        'Indicador financiero utilizado para medir el valor económico generado por una organización.',
    },
    {
      termino: 'GBV (Gerencia Basada en Valor)',
      significado:
        'Modelo administrativo enfocado en maximizar el valor económico y financiero de la organización.',
    },
    {
      termino: 'Indicador logístico',
      significado:
        'Herramienta utilizada para medir desempeño, productividad y eficiencia de procesos logísticos.',
    },
    {
      termino: 'Inventario',
      significado:
        'Cantidad de productos o materiales almacenados para atender necesidades operativas o comerciales.',
    },
    {
      termino: 'Oferta',
      significado:
        'Cantidad de productos o servicios que una empresa pone a disposición del mercado.',
    },
    {
      termino: 'Proveedor',
      significado:
        'Persona o empresa encargada de suministrar productos, materiales o servicios a una organización.',
    },
    {
      termino: 'RFID (<em>Radio Frequency Identification</em>)',
      significado:
        'Tecnología utilizada para identificar y rastrear productos mediante señales de radiofrecuencia.',
    },
    {
      termino: 'TMS (<em>Transportation Management System</em>)',
      significado:
        'Sistema tecnológico utilizado para gestionar operaciones y rutas de transporte.',
    },
    {
      termino: 'WMS (<em>Warehouse Management System</em>)',
      significado:
        'Sistema utilizado para administrar inventarios y operaciones dentro de centros de almacenamiento.',
    },
    {
      termino: '<em>Value-Based Management</em> (VBM)',
      significado:
        'Modelo de gestión orientado a generar valor económico mediante decisiones estratégicas y operativas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, D., & Sánchez, R. (2022). <em>Sistemas logísticos flexibles: Cadenas de suministro inteligentes en América Latina</em>. Comisión Económica para América Latina y el Caribe (CEPAL).',
      link: 'https://www.cepal.org/es/publicaciones/48515-sistemas-logisticos-flexibles-cadenas-suministro-inteligentes-america-latina',
    },
    {
      referencia:
        'Anaya Tejero, J. J. (2011). <em>Logística integral: la gestión operativa de la empresa</em> (5.ª ed.). ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Ballou, R. H. (2004). <em>Logística: administración de la cadena de suministro</em> (5.ª ed.). Pearson Educación.',
      link: 'https://laclassedotblog.wordpress.com/wp-content/uploads/2018/05/logistica_administracion_de_la_cadena_de_suministro_5ta_edicion_-_ronald_h-_ballou.pdf',
    },
    {
      referencia:
        'Fernández Díez, M. C., & Puig Gabarró, P. (2020). <em>Los desafíos del comercio electrónico para las PyME: Principales claves en el proceso de digitalización</em>. Banco Interamericano de Desarrollo.',
      link: 'https://publications.iadb.org/es/los-desafios-del-comercio-electronico-para-las-pyme-principales-claves-en-el-proceso-de',
    },
    {
      referencia:
        'IBM. (s. f.). <em>¿Qué es la gestión de la cadena de suministro?</em> IBM Think.',
      link: 'https://www.ibm.com/es-es/think/topics/supply-chain-management',
    },
    {
      referencia:
        'Mecalux. (2022, 28 de noviembre). <em>Cross-docking indirecto: ¿en qué consiste?</em>',
      link: 'https://www.mecalux.com.co/blog/cross-docking-indirecto',
    },
    {
      referencia:
        'Mora García, L. A. (2016). <em>Gestión logística integral: las mejores prácticas en la cadena de abastecimiento</em> (3.ª ed.). Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Torres, M. M. (2015). <em>Logística</em>. Ediciones Díaz de Santos.',
      link: 'https://www.editdiazdesantos.com/wwwdat/pdf/9788490523124.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sergio Andrés Quintero Guzmán',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Enrique Coll Gallardo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
