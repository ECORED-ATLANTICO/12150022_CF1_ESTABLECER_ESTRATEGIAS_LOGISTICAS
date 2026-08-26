<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Diseño y mejora de procesos logísticos 
    img(src="@/assets/curso/tema9/1.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El diseño y mejora de procesos logísticos permite a las organizaciones optimizar actividades relacionadas con abastecimiento, almacenamiento, transporte y distribución. Su aplicación contribuye al fortalecimiento de la productividad, reducción de costos y mejoramiento del nivel de servicio al cliente dentro de la cadena logística.

    separador
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.1 Definición

    .row.justify-content-center.align-items-center
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema9/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El diseño de procesos logísticos corresponde a la planificación y estructuración de actividades orientadas al flujo eficiente de bienes, servicios e información dentro de la organización. Este proceso incluye la definición de procedimientos, recursos, tecnologías y responsabilidades necesarias para el cumplimiento de los objetivos empresariales.
        .p-4.bg-botones-a5.py-3.rounded-4
          p.mb-0 La mejora de procesos logísticos consiste en la implementación de acciones orientadas a corregir fallas, optimizar recursos y aumentar la eficiencia operativa de la cadena logística. Por ejemplo, Amazon diseña y mejora constantemente sus procesos logísticos mediante automatización, control de inventarios y optimización de centros de distribución para agilizar las entregas.

    separador
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.2 Análisis

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p El análisis de procesos logísticos permite evaluar el desempeño operativo de las actividades relacionadas con transporte, almacenamiento, abastecimiento y distribución. Este análisis facilita la identificación de oportunidades de mejora orientadas a reducir tiempos, costos y errores operativos. Asimismo, el análisis de procesos permite establecer indicadores de desempeño para medir productividad, cumplimiento de entregas y nivel de servicio al cliente.
        .p-4.bg-secundario-s5.py-3.rounded-4.mb-4.mb-lg-0
          p.mb-0 El análisis de procesos logísticos requiere una serie de pasos orientados a evaluar el desempeño operativo y establecer acciones de mejora dentro de la cadena logística:
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema9/4.png", alt="")
    

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Pasos para el análisis de procesos logísticos
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema9/3-mob.png", alt="La figura muestra de manera cíclica el análisis y mejoramiento continuo de los procesos logísticos. La secuencia integra la identificación de las operaciones, recopilación y análisis de información, evaluación del desempeño, detección de oportunidades, medición de resultados y formulación de acciones de mejora. Su estructura evidencia que el proceso requiere seguimiento permanente y retroalimentación, permitiendo ajustar las operaciones, optimizar los recursos y fortalecer progresivamente la productividad, eficiencia y calidad del servicio logístico.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema9/3.png", alt="La figura muestra de manera cíclica el análisis y mejoramiento continuo de los procesos logísticos. La secuencia integra la identificación de las operaciones, recopilación y análisis de información, evaluación del desempeño, detección de oportunidades, medición de resultados y formulación de acciones de mejora. Su estructura evidencia que el proceso requiere seguimiento permanente y retroalimentación, permitiendo ajustar las operaciones, optimizar los recursos y fortalecer progresivamente la productividad, eficiencia y calidad del servicio logístico.")
        figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center
      .col-lg-10.col-xl-8
        .tarjeta.bg-botones-a5.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2
              img.imgw-72(src="@/assets/curso/tema3/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Diseño de una Red Logística
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con el diseño de procesos logísticos y su aplicación en la optimización de operaciones dentro de la cadena de abastecimiento: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=nJYhtOGsOjs" target="_blank")
                    span Ir al recurso

</template>

<script>
export default {
  name: 'Tema9',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
