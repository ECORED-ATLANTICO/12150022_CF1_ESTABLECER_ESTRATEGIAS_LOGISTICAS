<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 EVA

    img(data-aos="fade-up")(src="@/assets/curso/tema8/1.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El EVA (#[em Economic value added]) o valor económico agregado, es un indicador financiero utilizado por las organizaciones para medir la rentabilidad y determinar si las operaciones generan valor económico. Su aplicación facilita la evaluación del desempeño empresarial y el análisis de decisiones estratégicas relacionadas con costos, inversiones y productividad logística.

    separador

    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Concepto

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema8/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es un es un indicador de medición financiera que permite determinar si las decisiones y operaciones de una organización generan valor económico después de considerar los costos y los recursos utilizados. En logística, facilita evaluar si las estrategias implementadas en procesos como abastecimiento, almacenamiento, transporte y distribución contribuyen a mejorar los resultados mediante un uso eficiente de los recursos, manteniendo condiciones adecuadas de operación y servicio al cliente. 

    .row.justify-content-center.align-items-center.z-2.bg-secundario-s5.p-4.mb-4.mb-lg-5
      .col-3.col-sm-2.col-xl-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0.imgw-84(data-aos="fade-down", src="@/assets/curso/tema8/3.png", alt="")
      .col-lg-10.col-xl-11
        p.mb-0 #[strong Ejemplo]: Coca-Cola utiliza indicadores financieros y operativos para analizar la rentabilidad de sus procesos de distribución, almacenamiento y transporte, permitiendo identificar oportunidades de mejora en la cadena logística. A través del análisis de costos, tiempos de entrega y productividad operativa, la organización optimiza recursos logísticos y fortalece la eficiencia en la distribución de sus productos a nivel nacional e internacional.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Formula del valor económico agregado (EVA)
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema8/4-mob.png", alt="")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema8/4.png", alt="")
        figcaption Nota. SENA, (2026).

    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El EVA se aplica en organizaciones industriales, comerciales y de servicios para evaluar el desempeño financiero y operativo de las diferentes áreas de negocio. Su implementación permite controlar costos, optimizar inversiones y fortalecer la competitividad empresarial. 
        .p-4.py-3.rounded-4.bg-botones-a5
          p.mb-0 En los procesos logísticos, este indicador facilita la evaluación de actividades relacionadas con inventarios, transporte, almacenamiento y servicio al cliente, permitiendo identificar oportunidades de mejora y generación de valor económico agregado. Además, puede aplicarse principalmente para: 

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8.mb-4.mb-lg-0
        .p-5.bg-slider.rounded-4
          SlyderA(tipo="b").p-5.tarjeta.tarjeta--blanca
            div
              h4.mb-4 Evaluación de inversiones logísticas
              p.mb-0 Permite determinar si los beneficios económicos esperados de inversiones en infraestructura, vehículos, equipos o tecnología compensan el capital utilizado y contribuyen efectivamente a la creación de valor.
            div
              h4.mb-4 Análisis de inventarios 
              p.mb-0 Facilita evaluar si los recursos económicos comprometidos en las existencias son adecuados frente a las necesidades operativas, identificando excesos, baja rotación o capital inmovilizado que pueda afectar la generación de valor. 
            div
              h4.mb-4 Valoración de activos logísticos 
              p.mb-0 Examina el aprovechamiento económico de bodegas, vehículos, maquinaria y equipos, relacionando su utilización y resultados con los recursos invertidos para establecer si contribuyen favorablemente al desempeño de la operación. 
            div
              h4.mb-4 Comparación de alternativas 
              p.mb-0 Proporciona un criterio económico para contrastar diferentes opciones logísticas, considerando los resultados esperados, la inversión requerida y el costo del capital antes de seleccionar la alternativa con mayor potencial de generación de valor. 
            div
              h4.mb-4 Orientación de mejoras 
              p.mb-0 Favorece la identificación de operaciones con altos costos, recursos subutilizados o resultados insuficientes, proporcionando información para establecer acciones que incrementen la productividad y mejoren el rendimiento económico. 
            div
              h4.mb-4 Apoyo a decisiones estratégicas 
              p.mb-0 Aporta información económica para sustentar decisiones relacionadas con expansión, tercerización, automatización, renovación de activos o cambios operativos, considerando su impacto sobre la rentabilidad y la generación sostenible de valor. 
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema8/6.png", alt="")

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema8/7.png", alt="")
      .col-lg-11
        .p-4.py-3.bg-secundario-s5
          p.mb-0 Por ejemplo, DHL analiza indicadores de rentabilidad y eficiencia operativa para optimizar sus procesos logísticos y mejorar el desempeño empresarial.

    .row.justify-content-center.align-items-center
      .col-lg-10.col-xl-8
        .tarjeta.bg-botones-a5.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2
              img.imgw-72(src="@/assets/curso/tema3/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 EVA Valor Económico Agregado
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con el EVA (Valor Económico Agregado) y su aplicación en la evaluación financiera y estratégica de las organizaciones: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=ug33PRS7ODk" target="_blank")
                    span Ir al recurso









</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
