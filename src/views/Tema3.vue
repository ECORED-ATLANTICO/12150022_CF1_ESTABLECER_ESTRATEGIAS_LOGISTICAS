<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Costos logísticos
    
    img(src="@/assets/curso/tema3/1.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 Los costos logísticos corresponden a los recursos económicos utilizados en actividades relacionadas con abastecimiento, almacenamiento, transporte, distribución y servicio al cliente. Su análisis permite a las organizaciones controlar gastos operativos, optimizar recursos y mejorar la eficiencia de la cadena logística. La adecuada gestión de costos contribuye al fortalecimiento de la competitividad empresarial y al cumplimiento de los objetivos organizacionales.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Conceptualización

    p.mb-4 Los costos logísticos son los gastos generados durante el desarrollo de los procesos logísticos dentro de una organización utilizados para planear, ejecutar, controlar y mejorar el flujo de materiales, productos e información, desde el abastecimiento hasta la entrega al cliente y, cuando aplica, su retorno. El control de estos costos permite identificar oportunidades de mejora y optimizar la utilización de recursos.

    .p-4.bg-secundario-s5.py-3.rounded-4.mb-4
      p.mb-0.text-center Los costos más representativos en una operación logística son los siguientes:

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/2.png", alt="")
      .col-lg-8
        .p-4.p-xl-5.bg-slider
          SlyderA(tipo="b").p-4.p-lg-5.tarjeta.tarjeta--blanca
            div
              h4.mb-4 Transporte y distribución
              p.mb-0 Son los recursos utilizados para movilizar mercancías entre proveedores, instalaciones, centros de distribución y clientes. Considera fletes, combustible, mantenimiento, peajes, conductores y contratación de terceros.
            div
              h4.mb-4 Almacenamiento
              p.mb-0 Comprende los costos relacionados con mantener y operar instalaciones destinadas a recibir, conservar, preparar y despachar mercancías. Incluye arrendamiento, servicios, equipos, seguridad y personal.
            div
              h4.mb-4 Mantenimiento de inventarios
              p.mb-0 Representa el costo asociado con conservar recursos económicos inmovilizados en existencias durante determinado periodo, incluyendo capital, seguros, deterioro, obsolescencia y pérdidas.
            div
              h4.mb-4 Manipulación y manejo de materiales
              p.mb-0 Comprende los recursos empleados para cargar, descargar, trasladar, clasificar, consolidar y preparar mercancías dentro de las instalaciones logísticas.
            div
              h4.mb-4 Empaque y embalaje
              p.mb-0 Son los materiales y operaciones destinados a contener, proteger, identificar y preparar los productos para almacenamiento, manipulación y transporte.
            div
              h4.mb-4 Logística inversa y devoluciones
              p.mb-0 Incluye los costos generados por devoluciones, recolecciones, garantías, recuperación de productos, reutilización, reciclaje o disposición final.

    .row.justify-content-center.align-items-center.z-2
      .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/3.png", alt="")
      .col-lg-11
        .p-4.py-3.bg-secundario-s10.rounded-3
          p.mb-0 #[strong Ejemplo]: FedEx analiza constantemente sus costos de transporte y distribución para optimizar rutas, reducir tiempos de entrega y aumentar la eficiencia operativa.


    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Análisis
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El análisis de costos logísticos permite identificar actividades que generan mayores gastos operativos y establecer acciones de mejora orientadas a reducir costos y aumentar la productividad empresarial. Este proceso facilita la evaluación de indicadores relacionados con tiempos, inventarios, transporte y almacenamiento. 
        .p-4.py-3.bg-contenido-a5.rounded-4 
          p.mb-0 Por ejemplo, Amazon utiliza sistemas tecnológicos para analizar costos de almacenamiento, inventarios y distribución dentro de sus centros logísticos, permitiendo mejorar el control operativo y la rapidez en las entregas. 

    .p-4.bg-secundario-s5.py-3.rounded-4.mb-4
      p.mb-0.text-center El análisis de costos logísticos requiere una serie de pasos que permiten evaluar el desempeño operativo y optimizar los recursos de la organización:

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Pasos para analizar los costos logísticos.
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/5-mob.png", alt="La figura presenta de forma secuencial el proceso para analizar los costos logísticos dentro de una operación. El flujo organiza las actividades desde la revisión de la información disponible hasta la identificación de oportunidades y acciones orientadas a mejorar la eficiencia, optimizar el uso de los recursos y apoyar la toma de decisiones en la gestión logística. ")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/5.png", alt="La figura presenta de forma secuencial el proceso para analizar los costos logísticos dentro de una operación. El flujo organiza las actividades desde la revisión de la información disponible hasta la identificación de oportunidades y acciones orientadas a mejorar la eficiencia, optimizar el uso de los recursos y apoyar la toma de decisiones en la gestión logística. ")
        figcaption Nota. SENA, (2026).

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Evaluación de relación beneficio-costo 

    img(src="@/assets/curso/tema3/6.png", data-aos="fade-up", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-3.p-lg-4.drop-shadow(data-aos="fade-down")
        div.banner-text.shadow
          p.mb-0 La evaluación beneficio-costo consiste en comparar los recursos económicos requeridos para implementar una alternativa logística frente a los beneficios que se espera obtener. Su aplicación facilita determinar la conveniencia de una decisión y seleccionar opciones que generen mayor valor para la organización. En logística, los costos pueden incluir inversiones en tecnología, infraestructura, transporte, almacenamiento, personal, equipos o adecuaciones; mientras que los beneficios pueden reflejarse en ahorros operativos, reducción de tiempos, disminución de pérdidas, incremento de productividad o mejoras en el nivel de servicio.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Establecimiento de niveles de servicio al cliente 

    p El nivel de servicio al cliente corresponde al grado de cumplimiento de los requerimientos del cliente durante la prestación del servicio logístico. Estos niveles deben responder a las capacidades operativas de la empresa y ser medibles, alcanzables y coherentes con la estrategia logística. Su adecuada gestión contribuye a fortalecer la satisfacción y fidelización de los clientes.
    .p-4.bg-secundario-s5.py-3.rounded-4.mb-4
      p.mb-0.text-center En una operación logística, establecer el nivel de servicio implica definir principalmente aspectos como:
    
    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema3/7.png", alt="")
      .col-lg-8
        .p-4.p-xl-5.bg-slider
          SlyderA(tipo="b").p-4.p-xl-5.tarjeta.tarjeta--blanca
            div
              h4.mb-4 Disponibilidad del producto
              p Capacidad de la organización para disponer de las referencias y cantidades requeridas por el cliente en el momento solicitado, evitando faltantes que puedan afectar la venta o el cumplimiento del pedido.
              p.mb-0 #[strong Ejemplo]: Un supermercado solicita 100 cajas de bebidas y el proveedor dispone de las 100 unidades para atender el pedido sin entregas parciales.
            div
              h4.mb-4 Tiempo de respuesta
              p Tiempo transcurrido desde la recepción del requerimiento del cliente hasta su atención o entrega, considerando las actividades necesarias para procesar, preparar, despachar y transportar el pedido.
              p.mb-0 #[strong Ejemplo]: Un cliente realiza un pedido a las 8:00 a. m. y la empresa establece entregarlo antes de las 4:00 p. m. del mismo día.
            div
              h4.mb-4 Cumplimiento de entregas
              p Capacidad para realizar las entregas respetando las fechas, horarios, cantidades y demás condiciones previamente acordadas con el cliente, contribuyendo a la confiabilidad del servicio logístico.
              p.mb-0 #[strong Ejemplo]: Una empresa acuerda entregar 50 pedidos el lunes; 48 llegan dentro del horario establecido y dos presentan retrasos.
            div
              h4.mb-4 Exactitud del pedido
              p Nivel de correspondencia entre el pedido realizado y los productos efectivamente preparados y entregados, considerando referencias, cantidades, características y documentación asociada a la operación.
              p.mb-0 #[strong Ejemplo]: Un cliente solicita 20 unidades de la referencia A y 15 de la B, y recibe exactamente esas cantidades y referencias.
            div
              h4.mb-4 Condiciones de entrega
              p Grado en que los productos llegan al cliente conservando las características de calidad, presentación e integridad requeridas, después de las actividades de almacenamiento, manipulación, preparación y transporte.
              p.mb-0 #[strong Ejemplo]: Una empresa entrega productos refrigerados dentro de la temperatura requerida, con empaques íntegros y sin evidencias de deterioro.
            div
              h4.mb-4 Atención de novedades
              p Facultad de la organización para gestionar oportunamente situaciones que alteran el servicio, como faltantes, averías, retrasos, devoluciones o reclamaciones, procurando disminuir su impacto sobre el cliente.
              p.mb-0 #[strong Ejemplo]: Durante una entrega se detectan cinco unidades averiadas; la empresa registra la novedad y programa su reposición para el día siguiente.
            div
              h4.mb-4 Información y trazabilidad
              p Disponibilidad de información actualizada para conocer y comunicar el recorrido, estado y novedades de los pedidos, facilitando su seguimiento desde la preparación hasta la entrega al cliente.
              p.mb-0 #[strong Ejemplo]: Un cliente consulta su pedido y puede conocer si se encuentra en preparación, despachado, en ruta o entregado.

    .row.justify-content-center.align-items-center
      .col-lg-10.col-xl-8
        .tarjeta.bg-botones-a5.p-4.p-lg-3.mb-5
          .row.justify-content-around.align-items-center
            .col-sm-3.col-lg-2.d-none.d-lg-block
              img.imgw-72(src="@/assets/curso/tema3/8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Costo de operaciones logisticas
                  p.mb-0 Para fortalecer el aprendizaje sobre costos logísticos, análisis de operaciones y evaluación beneficio-costo, se recomienda ir a los siguientes videos relacionados con la gestión de costos en los procesos logísticos y la cadena de abastecimiento: 
                .col-sm-auto.d-flex.gap-2.flex-column
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=vttYrvjaWto" target="_blank")
                    span Ir al recurso
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=vyimqJx1wo0" target="_blank")
                    span Ir al recurso

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
