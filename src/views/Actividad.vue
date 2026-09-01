<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diagnóstico y documentación de procesos logísticos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de conceptos y aplicabilidad del diagnóstico y documentación de procesos logísticos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del análisis de resultados de los diagnósticos logísticos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los costos de operación de la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar fortalezas, debilidades y oportunidades de mejora en los procesos logísticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el seguimiento de las actividades logísticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir los procesos de abastecimiento por actividades administrativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El análisis de resultados permite identificar fortalezas, debilidades y oportunidades de mejora para orientar las decisiones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el análisis de resultados de los diagnósticos logísticos.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica corresponde a una unidad estratégica de negocio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Agrupar únicamente los documentos utilizados en el transporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Controlar exclusivamente los inventarios de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir los costos logísticos de todos los procesos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Gestionar productos, servicios o mercados específicos con objetivos, recursos y estrategias propias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Una unidad estratégica de negocio permite gestionar productos, servicios o mercados específicos con objetivos y estrategias propias.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la definición y clasificación de las unidades estratégicas de negocio.',
        },
        {
          id: 3,
          texto: '¿Cuál de los siguientes corresponde a un costo logístico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El gasto generado en actividades de transporte, almacenamiento, inventarios y distribución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El presupuesto destinado exclusivamente a publicidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El valor asignado únicamente a la capacitación del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El costo asociado exclusivamente con la imagen corporativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los costos logísticos corresponden a los gastos generados en actividades de transporte, almacenamiento, inventarios y distribución.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la conceptualización y análisis de los costos logísticos.',
        },
        {
          id: 4,
          texto:
            '¿Qué permite determinar la evaluación de la relación beneficio-costo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de productos disponibles en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de proveedores vinculados a la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La relación entre los recursos invertidos y los beneficios obtenidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El nivel de inventario almacenado en los centros logísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La evaluación de la relación beneficio-costo permite comparar los recursos invertidos con los beneficios obtenidos para apoyar la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la evaluación de la relación beneficio-costo.',
        },
        {
          id: 5,
          texto:
            '¿Qué representa la demanda dentro del análisis de información de oferta y demanda?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de productos o servicios que una empresa pone a disposición del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La cantidad de productos o servicios solicitados por los consumidores.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La cantidad de mercancías almacenadas en los centros de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los recursos económicos destinados al transporte de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La demanda corresponde a la cantidad de productos o servicios solicitados por los consumidores en el mercado.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con los conceptos de oferta y demanda.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el propósito de integrar los eslabones de la cadena logística?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Coordinar las actividades relacionadas con almacenamiento, transporte, distribución y entrega de productos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumentar los tiempos de operación entre proveedores y clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la participación de los proveedores en la cadena.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir el control sobre las actividades de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'La integración de los eslabones permite coordinar las actividades de la cadena logística y mejorar su funcionamiento.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el concepto, tipos y aplicabilidad de los eslabones de la cadena logística.',
        },
        {
          id: 7,
          texto:
            '¿Qué busca la gerencia basada en valor dentro de una organización?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar únicamente el volumen de inventario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el análisis de costos e inversiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir la participación del cliente en las decisiones logísticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Maximizar el valor económico mediante decisiones estratégicas y operativas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'la gerencia basada en valor busca maximizar el valor económico mediante decisiones estratégicas y operativas.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la gerencia basada en valor y su aplicabilidad.',
        },
        {
          id: 8,
          texto:
            '¿Qué indicador financiero se utiliza para medir el valor económico generado por una organización?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'WMS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'TMS.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'EVA.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'RFID.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El EVA es el indicador financiero utilizado para medir el valor económico generado por una organización.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el concepto y aplicabilidad del EVA.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el propósito del diseño y mejora de procesos logísticos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Corregir fallas, optimizar recursos y mejorar la eficiencia de las operaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar los tiempos de respuesta de la cadena.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el seguimiento de las operaciones logísticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la información disponible para la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El diseño y mejora de procesos permite optimizar recursos y fortalecer la eficiencia de las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la definición y análisis del diseño y mejora de procesos logísticos.',
        },
        {
          id: 10,
          texto: '¿Cuál es la función principal de un sistema WMS?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar exclusivamente las rutas de transporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer precios según el comportamiento del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar productos mediante señales de radiofrecuencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Administrar inventarios y operaciones dentro de centros de almacenamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El WMS permite administrar inventarios y operaciones dentro de los centros de almacenamiento.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las tecnologías de apoyo y la función del WMS.',
        },
        {
          id: 11,
          texto: '¿Qué permite gestionar principalmente un sistema TMS?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los inventarios de los centros de almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La identificación de productos mediante radiofrecuencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las operaciones y rutas de transporte.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las condiciones contractuales con los proveedores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El TMS es un sistema tecnológico utilizado para gestionar operaciones y rutas de transporte.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las tecnologías de apoyo y la función del TMS.',
        },
        {
          id: 12,
          texto: '¿Cuál es una característica del cross docking?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener las mercancías durante largos periodos en almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Recibir y enviar rápidamente los productos sin permanecer largos periodos en almacenamiento.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la coordinación entre proveedores y transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementar los inventarios almacenados en los centros de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El cross docking permite recibir y enviar rápidamente los productos sin mantenerlos durante largos periodos en almacenamiento.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el concepto y aplicabilidad del cross docking.',
        },
        {
          id: 13,
          texto:
            '¿Qué característica corresponde al método de fijación de precios basado en costos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Considerar los costos operativos y el margen de ganancia para establecer el precio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cambiar el precio exclusivamente según la competencia internacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar el precio únicamente por los niveles de inventario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer el precio sin considerar los costos de operación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El método basado en costos considera los costos operativos y el margen de ganancia para establecer el precio.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con los métodos de fijación de precios.',
        },
        {
          id: 14,
          texto:
            '¿Qué aspecto pueden establecer las cláusulas contractuales en una operación logística?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente la cantidad de productos almacenados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo las características físicas de los productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Condiciones relacionadas con pagos, entregas y responsabilidades.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente los niveles de inventario de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las cláusulas contractuales permiten establecer condiciones relacionadas con pagos, entregas y responsabilidades.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la fijación de precios y el establecimiento de cláusulas.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito principal de las técnicas de respuesta eficiente del consumidor?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar los tiempos de reposición de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la respuesta de la cadena de abastecimiento frente a las necesidades del consumidor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Reducir la coordinación entre proveedores y puntos de venta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar el análisis de inventarios y rotación de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las técnicas de respuesta eficiente del consumidor buscan mejorar la respuesta de la cadena de abastecimiento frente a las necesidades del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el concepto y aplicabilidad de las técnicas de respuesta eficiente del consumidor.',
        },
        {
          id: 16,
          texto:
            '¿Qué actividad hace parte del análisis de los procesos logísticos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suspender el seguimiento de las mejoras implementadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar los indicadores de desempeño.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar los costos sin analizar los resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar fallas, retrasos y oportunidades de mejora operativa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'El análisis de procesos permite identificar fallas, retrasos y oportunidades de mejora operativa.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el análisis y mejora de los procesos logísticos.',
        },
        {
          id: 17,
          texto: '¿Qué permite el análisis de oferta, demanda y servicios?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar las necesidades del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir los procesos de transporte de mercancías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Facilitar decisiones relacionadas con abastecimiento, inventarios, distribución y nivel de servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir la información utilizada para planificar las operaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El análisis de la información de oferta, demanda y servicios facilita la toma de decisiones en los procesos logísticos.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el análisis de información de oferta, demanda y servicios.',
        },
        {
          id: 18,
          texto:
            '¿Qué permite la aplicación de tecnologías de apoyo en la cadena de abastecimiento?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mejorar la eficiencia operativa, automatizar procesos y facilitar el seguimiento de las operaciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reducir la información disponible para la toma de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de controlar las operaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir todos los procesos de almacenamiento y transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Las tecnologías de apoyo permiten mejorar la eficiencia y facilitar el seguimiento de las operaciones de la cadena de abastecimiento.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las tecnologías de apoyo, sus tipos y aplicabilidad.',
        },
        {
          id: 19,
          texto:
            '¿Qué herramienta es utilizada para apoyar el seguimiento visual de los indicadores logísticos en tiempo real?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Panel de control (<em>Dashboard</em>).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organigrama institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reglamento interno de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Los paneles de control permiten visualizar el comportamiento de los indicadores y facilitar el seguimiento de las operaciones logísticas.',
          mensaje_incorrecto:
            'Revise nuevamente las herramientas utilizadas para el seguimiento y control de los procesos logísticos.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de establecer niveles de servicio al cliente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar los tiempos de entrega y reducir la disponibilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Evaluar y fortalecer el cumplimiento de las necesidades y expectativas del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Evaluar únicamente los costos financieros de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar el seguimiento de las operaciones de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'El establecimiento de niveles de servicio permite evaluar y fortalecer el cumplimiento de las necesidades y expectativas del cliente.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el establecimiento de niveles de servicio al cliente.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicitaciones! Ha aprobado satisfactoriamente la actividad de aprendizaje. Su resultado evidencia la apropiación de los conceptos relacionados con el componente formativo: Diagnóstico y documentación de procesos logísticos. Lo invitamos a continuar con el desarrollo de las siguientes actividades.',
      mensaje_final_reprobado:
        'Aún puede fortalecer sus conocimientos. Le recomendamos revisar nuevamente los contenidos del componente formativo relacionados con diagnósticos, costos logísticos, oferta, demanda, cadena logística, valor económico, tecnologías, cross docking, precios y cláusulas. Posteriormente podrá presentar nuevamente la actividad para evidenciar el logro de los resultados de aprendizaje.',
    },
  }),
}
</script>
