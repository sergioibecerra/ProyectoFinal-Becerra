# Nombre del proyecto

Breve descripción del proyecto, de que s e trata y por qué es útil.

## Instalación

Instruciones para instalar y configurar el proyecto.

```bash
git clone https://github.com/tu-usuario/tu-repo
cd tu-repo
npm install
```

## Contribución

Instrucciones para contribuír ("No se meta!!!")

1. Haz un fork del proyecto
2. Crea una rama
3. Realiza tus cambios y haz un commit
4. Sube tu rama
5. Abre un Pull Request


🧩 Diferencia entre fork y clone
Acción	Dónde se crea	Para qué sirve
- Fork	En tu cuenta de GitHub (servidor remoto)	Copiar un repo ajeno para modificarlo o colaborar.
- Clone	En tu computadora local	Descargar un repo remoto (tu fork o el original) para trabajar localmente.

## Licencia

Indica bajo que licencia se distribuye el proyecto

## Características

- Fácil de instalar
- Interfaz amigable
- Soporte multiplataforma

## Capturas de pantalla

![Captura del proyecto](/public/favicon.png)


## Enlaces

- [Documentación oficial](https://react.dev)




# Consideraciones sobre las consignas del trabajo

## Cambio de valor de búsqueda de categoría
Al reemplazar el ID de productos y categorías de un valor numérico manual a uno autogenerado por FireStore,
es que miggré el campo categoryId por categoryCode, para poder dejarlo fijo en las llamadas a las rutas
de listado de productos por categoría, por lo que cambié el manejo de parámetro en la ruta de "/category/:categoryId"
por "/categoty/search", pasando la llamada de ser por ejemplo: "/category/cat01" a "/category/search?categoryCode=cat01",
de esta forma lo trato como un parámetro de búsqueda sobre una clave alrternativa que es el "categoryCode" en vez del
parámetro en ruta que era la clave primaria "categoryId"

## 
Implementé una nueva colección "categories" a fin de tener una entidad del tipo "code, name" para resolver el nombre
a mostrar de la categoría filtrada en el listado de productos, implementando la función "getCategoryByCode(code)".