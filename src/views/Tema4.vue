<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Proceso de análisis de información de oferta y demanda, servicios 
    
    img(src="@/assets/curso/tema4/1.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El análisis de información de oferta y demanda permite a las organizaciones identificar las necesidades del mercado, el comportamiento de los consumidores y la capacidad de respuesta de las empresas frente a los productos y servicios ofrecidos. Este proceso facilita la toma de decisiones relacionadas con abastecimiento, inventarios, distribución y nivel de servicio al cliente.

    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto de oferta y demanda 

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema4/3.png", alt="")
      .col-lg-7
        p La oferta y la demanda representan dos elementos fundamentales para comprender el comportamiento del mercado y anticipar las necesidades que pueden afectar la planeación de las operaciones. En el contexto logístico, su análisis permite tomar decisiones relacionadas con inventarios, abastecimiento, almacenamiento, transporte y capacidad de distribución.
        .p-4.py-3.rounded-4.bg-contenido-a5
          p.mb-0 La oferta corresponde a la cantidad de productos o servicios que una empresa, proveedor o conjunto de participantes del mercado está en disposición de proporcionar durante un periodo determinado, considerando factores como precio, capacidad productiva, disponibilidad de recursos y condiciones del mercado.

    p.mb-5 La demanda hace referencia a la cantidad de productos o servicios que los clientes requieren o están dispuestos a adquirir durante un periodo determinado, de acuerdo con sus necesidades y con factores como precio, preferencias, temporada y condiciones del mercado.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.svg")
        h3.titulo-con-imagen__texto Relación con la logística

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Pasos para analizar los costos logísticos.
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema4/5-mob.png", alt="La figura representa la relación entre oferta y demanda mediante su punto de equilibrio y muestra cómo sus variaciones pueden generar excedentes, faltantes y cambios en los precios. En logística, esta información permite anticipar necesidades de abastecimiento, inventario, almacenamiento y distribución. Los escenarios presentados integran el comportamiento del mercado con las decisiones operativas, facilitando la identificación de posibles efectos sobre la disponibilidad de productos y orientando la planificación de recursos para responder oportunamente a las necesidades de los clientes. ")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema4/5.png", alt="La figura representa la relación entre oferta y demanda mediante su punto de equilibrio y muestra cómo sus variaciones pueden generar excedentes, faltantes y cambios en los precios. En logística, esta información permite anticipar necesidades de abastecimiento, inventario, almacenamiento y distribución. Los escenarios presentados integran el comportamiento del mercado con las decisiones operativas, facilitando la identificación de posibles efectos sobre la disponibilidad de productos y orientando la planificación de recursos para responder oportunamente a las necesidades de los clientes. ")
        figcaption <strong>Fuente:</strong> SENA, 2026

    .row.justify-content-center.align-items-center
      .col-lg-10.col-xl-8
        .tarjeta.bg-botones-a5.p-4.p-lg-3.mb-5
          .row.justify-content-around.align-items-center
            .col-sm-3.col-lg-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema3/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Conceptos, oferta y demanda
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con el análisis de información de oferta, demanda y servicios en los procesos logísticos:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=j33Q8KiaWiw" target="_blank")
                    span Ir al recurso

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Concepto de servicios 

    p.mb-5 Los servicios corresponden a actividades orientadas a satisfacer necesidades de los clientes mediante procesos de atención, distribución, transporte o soporte empresarial. En el contexto logístico, los servicios se relacionan con la manera en que la organización facilita el flujo de productos, materiales e información a lo largo de la cadena de suministro. Incluyen actividades como transporte, almacenamiento, preparación de pedidos, distribución, trazabilidad, gestión de inventarios, atención de devoluciones y entrega al cliente. 

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema4/6.png", alt="")
      .col-lg-8
        .p-4.bg-slider
          SlyderA(tipo="b").p-4.tarjeta.tarjeta--blanca
            div
              h4.mb-4 Transporte y distribución
              p.mb-0 Trasladar productos de un lugar a otro de manera segura y oportuna.
            div
              h4.mb-4 Almacenamiento
              p.mb-0 Almacenar productos en condiciones adecuadas para conservar su calidad y disponibilidad.
            div
              h4.mb-4 Preparación de pedidos
              p.mb-0 Seleccionar, verificar y alistar los productos según lo solicitado por el cliente.
            div
              h4.mb-4 Gestión de inventarios
              p.mb-0 Controlar existencias para tener lo que el cliente necesita en el momento adecuado.
            div
              h4.mb-4 Distribución
              p.mb-0 Distribuir pedidos a los diferentes puntos de entrega de forma planificada y eficiente.
            div
              h4.mb-4 Trazabilidad
              p.mb-0 Hacer seguimiento al recorrido y estado del pedido en tiempo real para informar con transparencia.
            div
              h4.mb-4 Entrega al cliente
              p.mb-0 Entregar el pedido al cliente cumpliendo las condiciones acordadas de tiempo, cantidad y calidad.
            div
              h4.mb-4 Atención de devoluciones
              p.mb-0 Gestionar devoluciones de manera ágil y efectiva, ofreciendo soluciones que generan confianza y mejoran el servicio.

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/3.png", alt="")
      .col-lg-11
        .p-4.py-3.bg-secundario-s5.rounded-3
          p.mb-0 Por ejemplo, Servientrega ofrece servicios logísticos enfocados en transporte, distribución y mensajería para empresas y consumidores.

    .row.justify-content-center.align-items-center
      .col-lg-10.col-xl-8
        .tarjeta.bg-botones-a5.p-4.p-lg-3.mb-5
          .row.justify-content-around.align-items-center
            .col-sm-3.col-lg-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema3/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Logística y sus funciones
                  p.mb-0 A continuación, se invita a ir a los siguientes videos para fortalecer los conocimientos relacionados con los servicios, la logística y sus funciones como servicio: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=PsAhMpLZinM" target="_blank")
                    span Ir al recurso
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=z9aZvrVK8L8" target="_blank")
                    span Ir al recurso

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Análisis de información 

    p.mb-4.mb-lg-5 El análisis de información permite interpretar datos relacionados con comportamiento del mercado, necesidades del cliente y desempeño de los procesos logísticos. Su aplicación facilita la planeación estratégica y la optimización de recursos organizacionales.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Tipos de información analizados en los procesos de oferta, demanda y servicios
    .tabla-a.color-acento-contenido.tabla-a--text-left.mb-5
      table
        caption Nota. Adaptada de Ballou, (2004); Mora García, (2016). 
        thead
          tr(style="background-color: #ECF8FF")
            th Tipo de información
            th(colspan="2") Finalidad del análisis
            th(colspan="2") Ejemplo empresarial
        tbody
          tr
            td Información de oferta 
            td(colspan="2") Evaluar disponibilidad de productos y capacidad operativa. 
            td(colspan="2") Amazon analiza inventarios y capacidad de abastecimiento en centros logísticos. 
          tr(style="background-color: #F6F6F6")
            td Información de demanda 
            td(colspan="2") Identificar necesidades y comportamiento de los consumidores. 
            td(colspan="2") Mercado Libre analiza tendencias de compra y frecuencia de pedidos. 
          tr
            td Información de servicios 
            td(colspan="2") Medir niveles de atención, entrega y satisfacción del cliente. 
            td(colspan="2") DHL evalúa tiempos de entrega y calidad del servicio logístico. 
          tr(style="background-color: #F6F6F6")
            td Información operativa 
            td(colspan="2") Controlar tiempos, costos y desempeño logístico. 
            td(colspan="2") FedEx monitorea rutas y operaciones de distribución en tiempo real. 

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
