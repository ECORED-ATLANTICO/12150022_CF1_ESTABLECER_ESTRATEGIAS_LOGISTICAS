<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Eslabones de cadena logística 

    img(src="@/assets/curso/tema5/1.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Los eslabones de la cadena logística corresponden a las diferentes etapas y actores que participan en el flujo de bienes, servicios e información desde el proveedor hasta el cliente final. Su adecuada articulación permite mejorar la eficiencia operativa, optimizar recursos y fortalecer el nivel de servicio dentro de las organizaciones.
    
    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Los eslabones de cadena logística son las actividades y procesos interrelacionados que intervienen en abastecimiento, almacenamiento, transporte, distribución y comercialización de productos o servicios. Cada eslabón cumple una función específica orientada al cumplimiento de los objetivos organizacionales y satisfacción del cliente.
        .row.justify-content-center.align-items-center.z-2
          .col-3.col-sm-2.d-none.d-lg-block
            figure
              img.mb-4.mb-lg-0.imgw-84(data-aos="fade-down", src="@/assets/curso/tema5/3.png", alt="")
          .col-lg-10
            .p-4.py-3.bg-secundario-s5
              p.mb-0 Por ejemplo, Amazon integra proveedores, centros de distribución, transporte y plataformas tecnológicas para garantizar entregas rápidas y eficientes.

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Tipos

    .p-4.py-3.bg-secundario-s5.mb-5
      p.mb-0 Los eslabones de la cadena logística pueden clasificarse según las funciones desarrolladas dentro de los procesos operativos y comerciales de la organización.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Tipos de información analizados en los procesos de oferta, demanda y servicios
    .tabla-a.color-acento-contenido.tabla-a--text-left
      table
        caption Nota. Adaptada de Ballou, (2004); Mora García, (2016); Anaya Tejero, (2011).
        thead
          tr(style="background-color: #ECF8FF")
            th Tipo de eslabón 
            th(colspan="2") Función principal 
            th(colspan="2") Ejemplo empresarial 
        tbody
          tr
            td Proveedores 
            td(colspan="2") Suministrar materias primas, productos o servicios. 
            td(colspan="2") Postobón trabaja con proveedores de envases y materias primas para la producción de bebidas. 
          tr(style="background-color: #F6F6F6")
            td Abastecimiento 
            td(colspan="2") Gestionar compras y disponibilidad de productos. 
            td(colspan="2") Grupo Nutresa controla procesos de abastecimiento para garantizar continuidad operativa. 
          tr
            td Almacenamiento 
            td(colspan="2") Conservar y organizar inventarios dentro de centros logísticos. 
            td(colspan="2") Mercado Libre utiliza centros de almacenamiento para optimizar entregas y control de inventarios. 
          tr(style="background-color: #F6F6F6")
            td Transporte 
            td(colspan="2") Movilizar productos entre diferentes puntos de la cadena logística. 
            td(colspan="2") DHL desarrolla operaciones de transporte nacional e internacional. 
          tr
            td Distribución 
            td(colspan="2") Entregar productos al cliente final o puntos de venta. 
            td(colspan="2") Servientrega realiza distribución de mercancías y mensajería a nivel nacional. 
          tr(style="background-color: #F6F6F6")
            td Cliente final 
            td(colspan="2") Recibir y consumir productos o servicios ofrecidos por la organización. 
            td(colspan="2") Rappi conecta comercios y consumidores mediante servicios de entrega. 

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Aplicabilidad

    p.mb-4 Los eslabones de cadena logística se aplican en organizaciones industriales, comerciales y de servicios para coordinar procesos relacionados con compras, almacenamiento, transporte y distribución. Su adecuada integración facilita el control operativo, mejora la productividad y fortalece la satisfacción del cliente.

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0.imgw-84(data-aos="fade-down", src="@/assets/curso/tema5/4.png", alt="")
      .col-lg-11
        .p-4.py-3.bg-secundario-s5
          p.mb-0 Por ejemplo, FedEx coordina diferentes eslabones logísticos mediante tecnologías de rastreo y control operativo para optimizar tiempos de entrega y cobertura del servicio.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        .tarjeta.bg-botones-a5.p-3.mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-3.col-lg-2
              img.imgw-72(src="@/assets/curso/tema3/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Eslabones de la cadena logística 
                  p.mb-0 A continuación, se invita a ir al siguiente video para fortalecer los conocimientos relacionados con los eslabones de la cadena logística y su aplicación dentro de los procesos de abastecimiento, almacenamiento, transporte y distribución:
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=sjMXSKnjWt8" target="_blank")
                    span Ir al recurso
        .bg-audio.rounded-4.p-4
          .row.align-items-center.justify-content-center
            .col-4.col-sm-3
              figure.pt-3
                img.w-195.mb-4.mb-lg-0(src="@/assets/curso/common/mic.png", alt="alt")
            .col-sm-8.col-lg-8
              h5 ¿Sabías qué?
              p Lo invitamos al siguiente pódcast:
              TarjetaAudio.mb-3(
                texto="“La idea de negocio como base del desarrollo empresarial”"
                tiempo
                :audio="require_src('@/assets/actividad/audio/fail.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
