# threejs-001-example
Proyecto ThreeJS elemental
Fecha: Jue 18 Junio 2026
MF Prof Web Nivel 3 y 4 - PIT - Ipet26 - Rio4 - Cba - Arg

Objetivo: estudiar los componentes minimos que se necesitan para crear un animación 3D web.

Actividad de clase:

Recuerde trabajar colaborativamente on sus compañeros. Primero lea la siguiente consina y trate de realizarla por su cuenta. Consulte al docente si no dispone alguno de los recursos.

Paso a paso:

Crear un nuevo proyecto en VSCode
Ponerle como nombre "Proy-001"
Crear un archivo nuevo y nombrarlo "index.html"
Copiar el codigo fuente del index.html provisto en el repositorio github indicado por el docente
Asegurarse de guardar los cambios y tener el entorno configurado
Ejecutar index.html con live server (si es necesarios instalar extension live server en VSCode)
Visualizar la salida en el navegador (debe ser similar a la captura ejemplificativa provista en el repositorio)
Vuelva al codigo index.html y lea la seccion de codigo javascript embebido
Reconozca los componentes principales que se declaran con const
Observe que hay una funcion de animación parametrizada con valores de rotación
Modifique un valor 0.01 a por ejemplo 0.03
Guarde el cambio y advierta como impacta en la renderización
Si cerró la pagina web donde se renderiza la salida de este codigo deberá ejecutarla nuevamente. Acostumbre a dejarala abieta e intercambiar ventana para poder trabajar mas eficazmente con las herramientas informaticas.
Muestre su trabajo al grupo y docente

En los proximos ciclos de actividades modificaremos otras propiedades para explorar mas caracteristicas de esta librería ThreeJS.




--------------------------------------------------------------------------------

Tema de clase:

Ejemplo basico y educativo de Three.js que muestra los conceptos esenciales: escena, cámara, renderizador y un cubo.

Estructura conceptual

Three.js se basa en tres componentes fundamentales:

Scene: contiene todos los objetos 3D.
Camera: define desde dónde se observa la escena.
Renderer: convierte la escena 3D en píxeles mostrados en el navegador.

Flujo:

Objetos → Scene
             ↓
          Camera
             ↓
         Renderer
             ↓
          Pantalla