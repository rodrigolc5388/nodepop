# Nodepop  

### Resumen  

API para la venta de artículos de segunda mano.

En la primera versión, los usuarios deberán estar registrados previamente para poder acceder a los anuncios, o en su defecto, registrarse.

Los anuncios están pre-cargados y el API no permite la creación de los mismos.

El API utiliza MongoDB como base de datos.

### Requisitos  
1. Node.js
2. MongoDB
3. Postman (recomendado)

### Instalación  
1. Descargar el proyecto:  
	`https://github.com/rodrigolc5388/nodepop.git`
	
2. Instalar dependencias; ejecutar:  
	`npm install`
	
3. Inicialización de la base de datos:  
	`npm run installDB`
	
4. Inicialización del servidor:  
	`npm start`
	
###  Rutas  
El API cuenta de momento con 3 rutas disponibles:

1. **localhost:3000/apiv1/anuncios/**  
	Devuelve un listado de los anuncios, previamente almacenados en la 	base de datos.
	
2. **localhost:3000/apiv1/anuncios/tags**  
	Devuelve un listado de los tags existentes.
	
3. **localhost:3000/apiv1/registro/**  
	Permite dar de alta un nuevo usuario y almacenarlo en la base de 	datos mediante un método POST. Requiere indicar un email y una 	contraseña.
	
4. **localhost:3000/apiv1/tags/**  
	Permite la búsqueda de anuncios por tags. Los tags disponibles son: 	lifestyle, work, motor, mobile. 
	
	
