<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Tecnologías de apoyo en la cadena de abastecimiento
    img(src="@/assets/curso/tema10/1.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Las tecnologías de apoyo en la cadena de abastecimiento permiten optimizar los procesos relacionados con abastecimiento, almacenamiento, transporte y distribución dentro de las organizaciones. Su implementación facilita el control de operaciones, mejora la toma de decisiones y fortalece la eficiencia logística mediante el uso de herramientas tecnológicas y sistemas de información.
          
    separador
    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 10.1 Concepto

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema10/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las tecnologías de apoyo en la cadena de abastecimiento son el conjunto de herramientas, sistemas y recursos tecnológicos utilizados para gestionar y controlar las actividades logísticas de una organización. Estas tecnologías permiten mejorar el flujo de información, optimizar procesos operativos y fortalecer el seguimiento de productos dentro de la cadena logística. Asimismo, facilitan el control de inventarios, monitoreo de transporte, automatización de procesos y análisis de información logística para aumentar la productividad y reducir costos operativos
          
    .row.justify-content-center.align-items-center.z-2
      .col-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema10/3.png", alt="")
      .col-lg-10
        .p-4.py-3.bg-secundario-s5
          p.mb-0 Por ejemplo, Amazon utiliza sistemas tecnológicos y automatización en sus centros de distribución para optimizar inventarios, clasificar productos y agilizar entregas. 

    separador
    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 10.2 Tipos

    p.mb-4.mb-lg-5 Las organizaciones implementan diferentes tecnologías de acuerdo con las necesidades operativas y logísticas de la cadena de abastecimiento. Entre las más comunes se encuentran: 

    .row.justify-content-center.cursor-pointer.mb-5
      .col-xl-3.col-lg-5.col-md-6.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema10/4.png", alt="")
          .crd_hover_txt--body.crd_hover_txt--body--custom.crd_hover_txt--body--custom-1
            h4.mb-0 Sistemas ERP.
            h5.mb-4 Planificación de recursos empresariales
            p.mb-0 Integra información de compras, inventarios, ventas, costos y demás áreas para facilitar la coordinación de las operaciones
            p.mb-0 Función principal: consultar existencias antes de generar una orden de compra.
      .col-xl-3.col-lg-5.col-md-6.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema10/5.png", alt="")
          .crd_hover_txt--body
            h4.mb-0 Sistemas WMS.
            h5.mb-4 Gestión de Almacenes
            p.mb-0 Administra recepción, ubicación, almacenamiento, #[em picking], inventarios y despacho, mejorando el control de las operaciones de bodega.
            p.mb-0 Función principal: asignar automáticamente la ubicación de una mercancía recibida.
      .col-xl-3.col-lg-5.col-md-6.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema10/6.png", alt="")
          .crd_hover_txt--body
            h4.mb-0 Sistemas TMS.
            h5.mb-4 Gestión de transporte
            p.mb-0 Apoya la planificación y control del transporte mediante rutas, vehículos, cargas, tiempos, costos y seguimiento de entregas.
            p.mb-0 Función principal: seleccionar una ruta considerando distancia, capacidad del vehículo y puntos de entrega.
      .col-xl-3.col-lg-5.col-md-6.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema10/7.png", alt="")
          .crd_hover_txt--body.crd_hover_txt--body--custom-1
            h4.mb-0 Tecnología RFID.
            h5.mb-4 Identificación por radiofrecuencia
            p.mb-0 Permite identificar y registrar productos mediante etiquetas electrónicas, incluso sin requerir lectura visual directa de cada elemento.
            p.mb-0 Función principal: controlar automáticamente el ingreso de mercancías etiquetadas a una zona del almacén.












</template>

<script>
export default {
  name: 'Tema10',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
