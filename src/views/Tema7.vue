<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Tema 7

    img(data-aos="fade-up")(src="@/assets/curso/tema7/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Las estrategias para crear valor económico agregado permiten a las organizaciones fortalecer su rentabilidad, optimizar recursos y mejorar el desempeño financiero y operativo. Su aplicación contribuye al crecimiento empresarial mediante decisiones orientadas a incrementar la productividad y la competitividad dentro de la cadena logística.
    
    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Concepto

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema7/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de información de oferta y demanda permite a las organizaciones identificar las necesidades del mercado, el comportamiento de los consumidores y la capacidad de respuesta de las empresas frente a los productos y servicios ofrecidos. Este proceso facilita la toma de decisiones relacionadas con abastecimiento, inventarios, distribución y nivel de servicio al cliente.

    .row.justify-content-center.align-items-center.z-2
      .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema7/3.png", alt="")
      .col-lg-11
        .p-4.py-3.bg-secundario-s5
          p.mb-0 Por ejemplo, Amazon implementa estrategias tecnológicas y logísticas para optimizar tiempos de entrega, reducir costos operativos y fortalecer la satisfacción del cliente.


    separador
    
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Aplicabilidad

    p.mb-4 Las organizaciones pueden implementar diferentes estrategias para generar valor económico agregado de acuerdo con sus objetivos y necesidades operativas. 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Tipos de estrategias para crear valor económico agregado 
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. SENA, (2016). 
        thead
          tr(style="background-color: #ECF8FF")
            th Tipo de estrategia 
            th(colspan="2") Finalidad 
            th(colspan="2") Ejemplo empresarial 
        tbody
          tr
            td Optimización de costos 
            td(colspan="2") Busca reducir ineficiencias y gastos innecesarios, aprovechando mejor los recursos sin afectar la calidad ni el nivel de servicio. 
            td(colspan="2") Una distribuidora reorganiza rutas para reducir kilómetros, combustible y tiempos de entrega. 

          tr(style="background-color: #F6F6F6")
            td Innovación tecnológica 
            td(colspan="2") Incorpora tecnologías para automatizar actividades y mejorar el control, la productividad, la información y la trazabilidad logística. 
            td(colspan="2") Un centro de distribución implementa un WMS y códigos de barras para controlar inventarios y reducir errores.  
          tr
            td Mejora del servicio al cliente 
            td(colspan="2") Aumenta la disponibilidad, oportunidad, exactitud, calidad y costos asociados con la atención a los requerimientos del cliente. 
            td(colspan="2") Un operador logístico ofrece entregas en 24 horas para productos de alta rotación y establece tiempos diferentes para referencias especiales, evitando asumir costos innecesarios en toda su operación. 
          tr(style="background-color: #F6F6F6")
            td Mejoramiento del servicio 
            td(colspan="2") Fortalece la respuesta al cliente mediante mejoras en disponibilidad, oportunidad, exactitud, información y condiciones de entrega. 
            td(colspan="2") Una empresa implementa seguimiento de pedidos y reorganiza despachos para disminuir retrasos. 
          tr
            td Expansión operativa 
            td(colspan="2") Amplía de manera planificada la capacidad logística para atender mayores volúmenes, clientes o mercados, considerando los recursos y beneficios esperados. 
            td(colspan="2") Una comercializadora abre un centro de distribución regional para ampliar cobertura y reducir distancias de entrega. 

    separador
    
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.3 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las estrategias para crear valor económico agregado se aplican en organizaciones industriales, comerciales y de servicios para fortalecer la competitividad y mejorar la toma de decisiones estratégicas. Su implementación facilita la optimización de procesos relacionados con abastecimiento, almacenamiento, transporte y distribución.
        .row.justify-content-center.align-items-center.z-2
          .col-3.col-sm-2.d-none.d-lg-block
            figure
              img.mb-4.mb-lg-0.imgw-84(data-aos="fade-down", src="@/assets/curso/tema5/3.png", alt="")
          .col-lg-10
            .p-4.py-3.bg-secundario-s5
              p.mb-0 Por ejemplo, Grupo Nutresa desarrolla estrategias de eficiencia logística y sostenibilidad para fortalecer su productividad y generar mayor valor empresarial.

</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
