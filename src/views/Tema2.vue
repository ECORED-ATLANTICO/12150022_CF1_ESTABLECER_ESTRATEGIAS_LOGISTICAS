<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Unidades estratégicas de negocio
    img(src="@/assets/curso/tema2/1.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Las unidades estratégicas de negocio adquieren relevancia en la gestión organizacional al facilitar una mirada diferenciada de las actividades, mercados y oportunidades de una empresa. Su análisis contribuye a reconocer particularidades operativas y competitivas, orientar recursos y establecer prioridades que permitan formular estrategias acordes con las necesidades de cada área y con los objetivos generales de la organización.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Definición

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Las unidades estratégicas de negocio (UEN) son áreas, líneas o segmentos de una organización que agrupan productos, servicios o mercados con características similares y que pueden gestionarse mediante objetivos y estrategias particulares, manteniendo su articulación con la estrategia general de la empresa. 
        .p-4.py-3.bg-contenido-a5.rounded-4 
          p.mb-0 Estas unidades facilitan la administración de procesos relacionados con abastecimiento, almacenamiento, transporte, distribución y servicio al cliente, permitiendo evaluar el desempeño de cada área de manera individual. Asimismo, contribuyen a mejorar la planeación estratégica y la asignación eficiente de recursos dentro de la empresa.

    .row.justify-content-center.align-items-center.z-2
      .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema2/3.png", alt="")
      .col-lg-11
        .p-4.py-3.bg-primario-p10.rounded-3
          p.mb-0 #[strong Ejemplo]: Grupo Nutresa organiza sus operaciones mediante diferentes unidades estratégicas enfocadas en alimentos, cafés y chocolates, permitiendo gestionar de manera independiente cada línea de negocio según su mercado y objetivos comerciales.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Clasificación

    p.mb-4 Las unidades estratégicas de negocio pueden clasificarse según el tipo de producto, mercado, cliente o proceso desarrollado dentro de la organización.

    .p-4.bg-slider
      SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
        .row.justify-content-center.align-items-center.py-4
          .col-lg-7
            h4 Según productos o servicios
            p Agrupa las unidades de acuerdo con líneas de productos o servicios que poseen características, requerimientos y objetivos similares. Permite establecer estrategias específicas para su gestión, comercialización y operación logística.
            p.mb-4.mb-lg-0 #[strong Ejemplo]: Postobón maneja unidades estratégicas relacionadas con bebidas gaseosas, aguas, jugos y energizantes.
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/4.png", alt="")
        
        .row.justify-content-center.align-items-center.py-4
          .col-lg-7
            h4 Según mercados
            p Organiza las unidades teniendo en cuenta los mercados en los cuales participa la empresa, considerando aspectos como ubicación geográfica, comportamiento de la demanda, competencia, condiciones comerciales y características del entorno.
            p.mb-4.mb-lg-0 #[strong Ejemplo]: DHL clasifica operaciones logísticas nacionales e internacionales para atender diferentes mercados y necesidades de distribución.
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/5.png", alt="")
        .row.justify-content-center.align-items-center.py-4
          .col-lg-7
            h4 Según clientes
            p Segmenta las unidades a partir de las características, necesidades, comportamiento o nivel de servicio requerido por diferentes grupos de clientes, permitiendo desarrollar propuestas y estrategias diferenciadas de atención.
            p.mb-4.mb-lg-0 #[strong Ejemplo]: Mercado Libre desarrolla unidades enfocadas en vendedores, compradores y servicios logísticos especializados.
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/6.png", alt="")
        .row.justify-content-center.align-items-center.py-4
          .col-lg-7
            h4 Según procesos operativos
            p Estructura las unidades considerando procesos o actividades que presentan condiciones operativas particulares y requieren recursos, capacidades, tecnologías o formas de gestión diferenciadas para alcanzar los resultados establecidos. 
            p.mb-4.mb-lg-0 #[strong Ejemplo]: Servientrega organiza sus operaciones mediante áreas estratégicas relacionadas con transporte, distribución y logística documental.
          .col-sm-8.col-lg-5.col-xl-4
            figure
              img(data-aos="fade-down-right", src="@/assets/curso/tema2/7.png", alt="")
        


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
