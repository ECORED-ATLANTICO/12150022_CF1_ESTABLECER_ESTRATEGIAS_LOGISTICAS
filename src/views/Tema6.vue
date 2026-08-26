<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Gerencia basada en valor, GBV o #[em Value Based Management]

    img(src="@/assets/curso/tema4/1.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La gerencia basada en valor corresponde a un enfoque administrativo orientado a maximizar el valor económico de las organizaciones mediante la adecuada toma de decisiones estratégicas y operativas. Su aplicación permite fortalecer la competitividad empresarial, optimizar recursos y mejorar el desempeño financiero y logístico.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto de gerencia basada en valor

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p La gerencia basada en valor, también conocida como GBV o Value Based Management, es un modelo de gestión enfocado en generar valor económico para la organización mediante la integración de estrategias, procesos y recursos orientados al cumplimiento de objetivos empresariales. Este enfoque permite evaluar el impacto de las decisiones relacionadas con costos, inversiones, productividad y servicio al cliente dentro de la cadena logística. Asimismo, facilita el análisis de indicadores financieros y operativos para mejorar la rentabilidad y sostenibilidad organizacional.
        .p-4.py-3.rounded-4.bg-primario-p10
          p.mb-0 Por ejemplo, Amazon implementa estrategias basadas en valor mediante inversiones tecnológicas y optimización logística para fortalecer la eficiencia operativa y mejorar la experiencia del cliente.

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Aplicabilidad

    p La gerencia basada en valor se aplica en organizaciones industriales, comerciales y de servicios para optimizar procesos, fortalecer la competitividad y mejorar la toma de decisiones estratégicas. Su implementación facilita el control de costos, la evaluación de inversiones y el mejoramiento continuo de la cadena logística.

    p.mb-4 En logística, Los elementos de aplicación son los siguientes:

    AcordionA(tipo="a" clase-tarjeta="tarjeta color-acento-botones").mb-5
      .row.justify-content-center.align-items-center(titulo="Generación de valor")
        .col-lg-7.col-xl-6
          p.mb-1 Comprende la contribución que realizan las actividades logísticas al cumplimiento de los objetivos empresariales, mediante mejoras en productividad, oportunidad, calidad, rentabilidad y satisfacción de las necesidades del cliente.
          p.mb-4.mb-lg-0 Ejemplo aplicado: una distribuidora reorganiza sus rutas y logra realizar más entregas por vehículo, disminuyendo recorridos innecesarios y manteniendo los horarios acordados con sus clientes.
        .col-sm-8.col-lg-5
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema6/3.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Uso eficiente de recursos")
        .col-lg-7.col-xl-6
          p.mb-1 Se relaciona con el aprovechamiento adecuado de infraestructura, equipos, vehículos, inventarios, tecnología y talento humano, procurando disminuir tiempos improductivos, desperdicios y recursos utilizados sin generar resultados relevantes.
          p.mb-4.mb-lg-0 Ejemplo aplicado: un centro de distribución reubica los productos de mayor rotación cerca del área de despacho, reduciendo recorridos de los operarios y tiempos de preparación de pedidos.
        .col-sm-8.col-lg-5
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema6/4.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Análisis de costos y beneficios")
        .col-lg-7.col-xl-6
          p.mb-1 Permite establecer la conveniencia de una alternativa comparando los recursos económicos requeridos con los ahorros, mejoras operativas o beneficios que podrían obtenerse durante su implementación y funcionamiento. 
          p.mb-4.mb-lg-0 Ejemplo aplicado: una empresa compara el costo de adquirir lectores de código de barras con la reducción esperada de errores, reprocesos y diferencias de inventario antes de realizar la inversión. 
        .col-sm-8.col-lg-5
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema6/5.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Nivel de servicio")
        .col-lg-7.col-xl-6
          p.mb-1 Representa las condiciones de atención que la organización establece para responder a los requerimientos del cliente, procurando un equilibrio entre disponibilidad, oportunidad, exactitud, calidad y costos asociados con su cumplimiento. 
          p.mb-4.mb-lg-0 Ejemplo aplicado: una comercializadora ofrece entregas en 24 horas para productos de alta rotación y establece tiempos diferentes para referencias especiales, evitando asumir costos innecesarios en toda su operación. 
        .col-sm-8.col-lg-5
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema6/6.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Medición del desempeño")
        .col-lg-7.col-xl-6
          p.mb-1 Proporciona información cuantitativa y cualitativa sobre los resultados de la operación, facilitando reconocer desviaciones, tendencias y oportunidades mediante indicadores relacionados con costos, tiempos, productividad, inventarios y cumplimiento. 
          p.mb-4.mb-lg-0 Ejemplo aplicado: un operador logístico controla mensualmente entregas a tiempo, ocupación de vehículos y costo por entrega para detectar rutas con bajo desempeño y establecer mejoras. 
        .col-sm-8.col-lg-5
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema6/7.png", alt="")
      .row.justify-content-center.align-items-center(titulo="Toma de decisiones")
        .col-lg-7.col-xl-6
          p.mb-1 Integra información operativa, económica y de servicio para comparar alternativas y seleccionar aquella que contribuya favorablemente a los resultados presentes y futuros de la organización.
          p.mb-4.mb-lg-0 Ejemplo aplicado: una empresa decide contratar transporte tercerizado para zonas de baja demanda después de comprobar que mantener vehículos propios en esas rutas genera baja utilización y mayores costos.
        .col-sm-8.col-lg-5
          figure
            img.mb-4.mb-lg-0(src="@/assets/curso/tema6/8.png", alt="")

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-3.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema6/9.png", alt="")
      .col-lg-11
        .p-4.py-3.bg-secundario-s5
          p.mb-0 Por ejemplo, DHL utiliza tecnologías y procesos de automatización para optimizar operaciones logísticas, reducir costos y aumentar el valor ofrecido a sus clientes a nivel internacional.

    .row.justify-content-center.align-items-center
      .col-lg-10.col-xl-8
        .tarjeta.bg-botones-a5.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2
              img.imgw-72(src="@/assets/curso/tema3/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Gerencia basada en valor (GBV) 
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con la gerencia basada en valor (GBV) y su aplicación en la toma de decisiones organizacionales y logísticas:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=LLXRHBMkFng" target="_blank")
                    span Ir al recurso
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
