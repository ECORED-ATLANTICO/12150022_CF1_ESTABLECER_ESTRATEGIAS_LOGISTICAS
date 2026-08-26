<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Diseño de operaciones en #[em cross docking]

    img(data-aos="fade-up")(src="@/assets/curso/tema11/1.png", alt="")
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El #[em cross docking] corresponde a una estrategia logística orientada a optimizar los procesos de recepción, clasificación y distribución de mercancías, reduciendo tiempos de almacenamiento y costos operativos. Su aplicación permite agilizar el flujo de productos dentro de la cadena de abastecimiento y mejorar la eficiencia en las operaciones logísticas. 

    separador
    
    #t_11_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 11.1 Concepto

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema11/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El diseño de operaciones en #[em cross docking] consiste en planificar y coordinar actividades logísticas donde los productos recibidos en un centro de distribución son clasificados y enviados rápidamente hacia su destino final, sin permanecer largos periodos en almacenamiento. Este modelo permite reducir inventarios, optimizar tiempos de entrega y fortalecer la eficiencia operativa mediante una adecuada coordinación entre proveedores, transporte y distribución.  

    .row.justify-content-center
      .col-xl-10
        .bg-adicional-1.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-sm-3.col-lg-2.d-none.d-lg-block
              figure
                img.mb-4.mb-lg-0.imgw-84(data-aos="fade-down", src="@/assets/curso/tema11/3.png", alt="")
            .col-lg-10
              p.mb-0 Por ejemplo, Walmart implementa operaciones de cross docking para agilizar el abastecimiento de productos hacia sus puntos de venta y reducir costos de almacenamiento.

    separador

    #t_11_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 11.2 Aplicabilidad

    p El cross docking se aplica en organizaciones comerciales, industriales y de servicios que requieren rapidez en la distribución de mercancías y optimización de recursos logísticos. Su implementación facilita el control del flujo de productos, disminuye tiempos operativos y mejora el nivel de servicio al cliente.  
    p.mb-4.mb-lg-5 Asimismo, este modelo es utilizado en procesos relacionados con: 
      
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema11/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-acento-botones")
          div(titulo="Distribución masiva")
            p.mb-4 Facilita consolidar y redistribuir grandes volúmenes de mercancía hacia diferentes destinos, disminuyendo almacenamiento intermedio y agilizando el abastecimiento de múltiples puntos de entrega.
            p.mb-4 #[strong Ejemplo práctico:]
            p.mb-0 Un fabricante envía bebidas a una plataforma donde se clasifican por rutas y se despachan directamente hacia supermercados y tiendas.
          div(titulo="Comercio electrónico")
            p.mb-4 Permite movilizar productos recibidos desde proveedores hacia procesos de clasificación y despacho, reduciendo tiempos de permanencia y favoreciendo entregas más rápidas al consumidor. 
            p.mb-4 #[strong Ejemplo práctico:]
            p.mb-0 Productos previamente vendidos llegan al centro logístico, se separan según destino y pasan directamente a las rutas de última milla. 
          div(titulo="Cadenas de abastecimiento de alta rotación")
            p.mb-4 Favorece el flujo continuo de productos con elevada demanda o corta permanencia, reduciendo inventarios almacenados y acelerando su disponibilidad en los puntos de venta. 
            p.mb-4 #[strong Ejemplo práctico:]
            p.mb-0 Una cadena de supermercados recibe productos frescos, los clasifican por establecimiento y los despacha el mismo día hacia sus diferentes tiendas. 
      
    .row.justify-content-center.align-items-center
      .col-lg-10.col-xl-8
        .tarjeta.bg-botones-a5.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-2
              img.imgw-72(src="@/assets/curso/tema3/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Diseño de una Red Logística
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con el diseño de operaciones en cross docking y su aplicación en los procesos de distribución y optimización logística:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=OPSNmuNgQaE" target="_blank")
                    span Ir al recurso

</template>

<script>
export default {
  name: 'Tema11',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
