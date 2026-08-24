<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Marketing</em> tradicional
    
    img(src="@/assets/curso/tema1/1.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 El análisis de resultados sobre los diagnósticos logísticos permite identificar el estado de los procesos de abastecimiento, almacenamiento, distribución y servicio al cliente dentro de una organización. Este procedimiento facilita la evaluación de costos, tiempos, inventarios y desempeño operativo para apoyar la toma de decisiones estratégicas orientadas a mejorar la eficiencia y competitividad empresarial.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema1/2.png", alt="")
      .col-lg-7
        p El procedimiento para el análisis de resultados sobre los diagnósticos corresponde al conjunto de actividades utilizadas para interpretar información relacionada con los procesos logísticos de una empresa. Su finalidad consiste en identificar fortalezas, debilidades y oportunidades de mejora en la cadena de abastecimiento.
        .p-4.py-3.bg-secundario-s5
          p.mb-0 #[strong Ejemplo]: Amazon analiza constantemente los tiempos de entrega y niveles de inventario para optimizar sus centros de distribución y mejorar el servicio al cliente. De igual forma, Servientrega realiza diagnósticos logísticos para evaluar rutas, tiempos de despacho y cumplimiento de entregas a nivel nacional.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos

    p Los tipos de análisis permiten evaluar diferentes aspectos de los procesos logísticos para facilitar la toma de decisiones dentro de las organizaciones. Su aplicación contribuye a mejorar la eficiencia operativa, optimizar recursos y fortalecer el desempeño de la cadena de abastecimiento.
    .p-4.py-3.bg-secundario-s5.mb-4
      p.mb-0.text-center A continuación, se presentan los principales tipos de análisis utilizados en los diagnósticos logísticos para evaluar el desempeño de los procesos y apoyar la toma de decisiones organizacionales

    .row.justify-content-center.align-items-center.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema1/3.png", alt="")
      .col-lg-8
        .p-4.bg-slider
          SlyderA(tipo="b").p-3.p-lg-4.tarjeta.tarjeta--blanca
            div
              h4.mb-4 Análisis descriptivo
              p Permite identificar la situación actual de los procesos logísticos mediante indicadores y reportes operativos.
              p.mb-0 #[strong Ejemplo]: Éxito analiza diariamente el comportamiento de inventarios y abastecimiento en sus puntos de venta para evitar desabastecimiento de productos.
            div
              h4.mb-4 Análisis comparativo
              p Consiste en comparar resultados entre diferentes periodos, áreas o empresas para identificar variaciones en desempeño.  
              p.mb-0 #[strong Ejemplo]: DHL compara indicadores de tiempos de entrega entre ciudades y países para mejorar sus operaciones logísticas internacionales. 
            div
              h4.mb-4 Análisis financiero 
              p Evalúa costos, rentabilidad y relación beneficio-costo de las operaciones logísticas.  
              p.mb-0 #[strong Ejemplo]: Coca-Cola analiza los costos de transporte y almacenamiento para optimizar la distribución de productos y reducir gastos operativos. 
            div
              h4.mb-4 Análisis estratégico 
              p Relaciona los resultados del diagnóstico con los objetivos organizacionales y necesidades del mercado. 
              p.mb-0 #[strong Ejemplo]: Mercado Libre utiliza análisis estratégicos para fortalecer sus centros logísticos y aumentar la rapidez en las entregas. 
    
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Aplicabilidad 

    p El procedimiento para el análisis de resultados diagnósticos se aplica en empresas industriales, comerciales y de servicios para mejorar la productividad y optimizar recursos logísticos. Su implementación facilita la toma de decisiones relacionadas con inventarios, transporte, almacenamiento y servicio al cliente.
    p.mb-4.mb-lg-5 Dentro del contexto de las estrategias hay cuatro aplicaciones.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-8.mb-4.mb-lg-0
        TabsA.color-acento-botones
          .tarjeta.p-4.bg-secundario-s5(titulo="Identificación de brechas")
            p Permite comparar el desempeño logístico encontrado con metas, estándares o condiciones esperadas, determinando diferencias que pueden afectar costos, tiempos, calidad o nivel de servicio. 
            p.mb-0 #[strong Ejemplo real]: una empresa establece despachar pedidos en 24 horas, pero el diagnóstico evidencia un promedio de 36 horas. Existe una brecha de 12 horas. 
          .tarjeta.p-4.bg-secundario-s5(titulo="Análisis de causas")
            p Busca determinar los factores que originan los resultados encontrados, evitando formular estrategias únicamente sobre los efectos visibles de una problemática logística. 
            p.mb-0 #[strong Ejemplo real]: los retrasos en despachos no se deben al transporte, sino a demoras en alistamiento ocasionadas por una distribución inadecuada del almacén. 
          .tarjeta.p-4.bg-secundario-s5(titulo="Priorización de hallazgos")
            p Organiza las situaciones identificadas según su impacto, frecuencia, urgencia o posibilidad de intervención, facilitando establecer cuáles requieren atención prioritaria. 
            p.mb-0 #[strong Ejemplo real]: de diez novedades detectadas, las diferencias de inventario representan el mayor impacto económico; por ello, se prioriza su intervención. 
          .tarjeta.p-4.bg-secundario-s5(titulo="Orientación de decisiones")
            p Convierte los resultados analizados en información útil para seleccionar acciones o estrategias que respondan a las condiciones y necesidades reales de la operación logística. 
            p.mb-0 #[strong Ejemplo real]: al identificar entregas urbanas costosas y vehículos subutilizados, la empresa decide reorganizar rutas y consolidar pedidos por zonas. 
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img(data-aos="fade-down", src="@/assets/curso/tema1/4.png", alt="")
    
    .row.justify-content-center.align-items-center.z-2
      .col-3.col-sm-2.col-lg-1
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema1/5.png", alt="")
      .col-lg-11
        .p-4.py-3.bg-contenido-a5
          p.mb-0 #[strong Ejemplo]: FedEx utiliza diagnósticos logísticos para controlar tiempos de entrega y optimizar rutas de distribución, mientras que Alkosto analiza la demanda y rotación de productos para fortalecer el abastecimiento de sus almacenes. 


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
