<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/intro.png", alt="")
      .col-lg-7
        p El componente formativo Diagnóstico y documentación de procesos logísticos aborda el análisis de los procesos relacionados con abastecimiento, almacenamiento, distribución y servicio al cliente dentro de las organizaciones. En un entorno empresarial altamente competitivo, la logística se ha convertido en un elemento estratégico para optimizar recursos, reducir costos y mejorar el nivel de servicio ofrecido a los clientes.
        .p-4.py-3.rounded-4.bg-botones-a5
          p.mb-0 Su importancia radica en que permite identificar fortalezas, debilidades y oportunidades de mejora mediante el análisis de diagnósticos logísticos, costos operativos, comportamiento de la oferta y demanda, desempeño de la cadena de abastecimiento y aplicación de tecnologías logísticas. Asimismo, facilita la toma de decisiones orientadas a fortalecer la productividad, competitividad y sostenibilidad de las operaciones empresariales.
    
    .p-4.py-3.rounded-4.bg-secundario-s5
      p.mb-0 El tema se abordará de manera progresiva, iniciando con el análisis de resultados diagnósticos y las unidades estratégicas de negocio, continuando con el estudio de costos logísticos, cadena logística y gerencia basada en valor. Posteriormente, se desarrollarán aspectos relacionados con diseño y mejora de procesos logísticos, tecnologías aplicadas a la cadena de abastecimiento, operaciones cross docking, fijación de precios y técnicas de respuesta eficiente al consumidor.




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
