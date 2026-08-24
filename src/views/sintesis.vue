<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo Diagnóstico y documentación de procesos logísticos aborda el procedimiento para el análisis de resultados sobre los diagnósticos y las unidades estratégicas de negocio; continúa con el estudio de los costos logísticos y el proceso de análisis de información de oferta, demanda y servicios; desarrolla los eslabones de cadena logística, la gerencia basada en valor (GBV o <em>Value Based Management</em>), las estrategias para crear valor económico agregado y el EVA como herramienta de evaluación financiera; profundiza en el diseño y mejora de procesos logísticos, las tecnologías de apoyo en la cadena de abastecimiento y el diseño de operaciones en cross docking; y finaliza con la fijación de precios y establecimiento de cláusulas.
    

    .row.justify-content-center
      .col-lg-10.col-xl-8.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="")

    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
