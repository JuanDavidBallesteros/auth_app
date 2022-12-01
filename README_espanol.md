# Proyecto de Ciberseguridad
por Juan David Ballesteros y Alejandra Diaz 

## Requerimientos
* Docker
* Docker compose

## ¿Cómo ejecutar?
Ejecute el comando
```
docker-compose up
```
...y el servicio estará corriendo en el puerto 3000.

## Fases de desarrollo
1. Definir el sistema y sus secciones. Se determinó que constaría de un frontend, un backend y una base de datos.
2. Crear el docker-compose que permita ejecutar todos los servicios al mismo tiempo, sincronizándolos.
3. Analizar cuál sería un flujo coherente que seguiría un usuario mientras utiliza la aplicación. Con eso en mente, construit el frontend y el backend, y conectactarlos.
4. Crear la base de datos y conectarla con el resto del proyecto.

## Desafíos
#### Crear un usuario y un administrador
Esto se resolvió haciendo que la primera persona registrada fuera administrador, mientras que los siguientes son todos usuarios normales.

#### Interfaz gráfica
* ¿En qué pantalla el programa mostrará la lista?
* ¿Cómo va a mostrar el programa la posibilidad de cambiar la contraseña?
* Hacer que las imágenes se muestren bien alineadas y organizadas.
* Se intentó usar una lista interactiva y virtualizada, pero su implementación fue demasiado compleja. Se acabó usando una lista más tradicional, pero no es óptimo puesto que carga todos los datos como un arreglo. Esto podría mejorarse en futuras versiones implementando paginación.

#### Librerías
We tried to implement Axio's library but, because of the dependencies management and updates the library didn't work well, so we decided to stay with fetch to make queries from the frontend to the backend.


#### Asynchronous tasks
Se intentó implementar la librería de Axio pero, debido al manejo de las dependencias y actualizaciones, la librería no funcionó bien, por lo que se decidió usar fetch para realizar consultas desde el frontend hacia el backend.

#### Actualizaciones
Otro desafío fue integrar los casos de actualización, buscando reducir la cantidad de código que se escribía. Para esto, se envió un nuevo parámetro dentro de la función de actualización, que permite identificar si solamente se está actualizando la contraseña y hacer la función hash sobre la nueva contraseña.

#### URLs
Este reto consistió en identificar las URLs que se encuentran dentro del docker-compose para que pudieran comunicarse con otros servicios.

## Conclusiones
Podemos apreciar la tríada de ciberseguridad CIA a lo largo del proyecto. La confidencialidad se corresponde con el hasheo de las contraseñas, mientras que la integridad es una característica inherente que implementa la base de datos, y se considera al guardar y recuperar datos de ella. Finalmente, la disponibilidad se muestra a través de la lista que se puede mostrar en cualquier momento, y a través de la garantía de que siempre se puede acceder a los servicios del backend y los datos siempre se pueden consultar de la base de datos.
