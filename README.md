# Nodepop  

## Práctica Node.js

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
	
	

## Práctica DevOps

1. <https://perfectstrange.com> / <https://www.perfectstrange.com>  
 Estas dos URLs llevan a la web estática de la práctica para el módulo de DevOps. También se puede acceder a ella mediante la siguiente dirección IP: **52.45.194.205**

2. <https://nodepop.perfectstrange.com>  
Esta URL despliega la aplicación "Nodepop" creada en el módulo de Node.js. Esta está ejecutada con **Node** y monitorizada mediante **pm2**.

3. <https://nodepop.perfectstrange.com/apiv1/images/coche.jpg>  
En este enlace se sirve un imagen alojada en un directorio de Nodepop. Sin embargo, la imagen es servida por NGINX y la cabecera ha sido modificada para mostrar mi cuenta de GitHub.

4. <https://chat.perfectstrange.com>  
Adicionalmente, y a modo de práctica, también se ha desplegado en el mismo servidor la aplicación de NodeChat utilizada durante el curso.

En todos los casos, los dominios han sido securizados utilizando certificados SSL.



	
	
