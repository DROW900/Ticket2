CREATE DATABASE ticket2

USE ticket2

SELECT *FROM roles;
INSERT INTO roles (tipoRol,createdAt,updatedAt) VALUES ('estudiante', '2021/08/27', '2021/08/27')
INSERT INTO roles (tipoRol,createdAt,updatedAt) VALUES ('admin', '2021/08/27', '2021/08/27')
GO

SELECT *FROM usuarios
INSERT INTO usuarios(correo,contrasenia,createdAt,updatedAt, roleId)VALUES('random@gmail.com','Estudiante1$','2021/08/27', '2021/08/27',1)
GO

SELECT *FROM estudiantes
INSERT INTO estudiantes(nombre,edad,pais,ciudad,createdAt,updatedAt, usuarioId) VALUES ('Carlos Eduardo Muñoz Carbajal', 20, 'México', 'Estado de México', '2021/08/27', '2021/08/27', 1)
GO

SELECT *FROM tiposEvaluaciones
INSERT INTO tiposEvaluaciones(titulo, createdAt, updatedAt) VALUES ('Conocimientos','2021/08/27','2021/08/27')
INSERT INTO tiposEvaluaciones(titulo, createdAt, updatedAt) VALUES ('Tecnologias','2021/08/27','2021/08/27')
INSERT INTO tiposEvaluaciones(titulo, createdAt, updatedAt) VALUES ('Desempeño','2021/08/27','2021/08/27')
INSERT INTO tiposEvaluaciones(titulo, createdAt, updatedAt) VALUES ('Habilidades Blandas','2021/08/27','2021/08/27')
INSERT INTO tiposEvaluaciones(titulo, createdAt, updatedAt) VALUES ('Entornos Profesionales','2021/08/27','2021/08/27')
GO

SELECT *FROM rubros
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Base de Datos','2021/08/27','2021/08/27',1)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('APIS','2021/08/27','2021/08/27',1)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Testing','2021/08/27','2021/08/27',1)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Seguridad','2021/08/27','2021/08/27',1)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Teoría de Objetos','2021/08/27','2021/08/27',1)

INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('NodeJS','2021/08/27','2021/08/27',2)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Frontend','2021/08/27','2021/08/27',2)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Swagger','2021/08/27','2021/08/27',2)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Javascript','2021/08/27','2021/08/27',2)

INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Calidad del código','2021/08/27','2021/08/27',3)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Velocidad de entrega','2021/08/27','2021/08/27',3)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Performance del código','2021/08/27','2021/08/27',3)

INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Enfocado','2021/08/27','2021/08/27',4)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Trabajo en equipo','2021/08/27','2021/08/27',4)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Comprometido','2021/08/27','2021/08/27',4)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Comunicación','2021/08/27','2021/08/27',4)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Capacidad de aprendizaje','2021/08/27','2021/08/27',4)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Resolución de problemas','2021/08/27','2021/08/27',4)

INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Versionado - Github','2021/08/27','2021/08/27',5)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Trello - Jira','2021/08/27','2021/08/27',5)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Slack','2021/08/27','2021/08/27',5)
INSERT INTO rubros(nombre,createdAt,updatedAt,tiposEvaluacioneId)VALUES('Metodologías Ágiles','2021/08/27','2021/08/27',5)
GO

SELECT *FROM rubrosEstudiantes
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',1,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',2,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (2,'2021/08/27','2021/08/27',3,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (2,'2021/08/27','2021/08/27',4,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',5,1)

INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (4,'2021/08/27','2021/08/27',6,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',7,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (4,'2021/08/27','2021/08/27',8,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',9,1)

INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',10,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (4,'2021/08/27','2021/08/27',11,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',12,1)

INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',13,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (4,'2021/08/27','2021/08/27',14,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (5,'2021/08/27','2021/08/27',15,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (4,'2021/08/27','2021/08/27',16,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (5,'2021/08/27','2021/08/27',17,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (4,'2021/08/27','2021/08/27',18,1)

INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',19,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (4,'2021/08/27','2021/08/27',20,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',21,1)
INSERT INTO rubrosEstudiantes(evaluacion,createdAt,updatedAt,rubroId,estudianteId) VALUES (3,'2021/08/27','2021/08/27',22,1)
GO

SELECT *FROM idiomas
INSERT INTO idiomas(nombre,nivel,createdAt,updatedAt,estudianteId) VALUES ('Ingles', 'Intermedio','2021/08/27','2021/08/27',1)
GO

SELECT *FROM conocimientosExtras
INSERT INTO conocimientosExtras(nombre, nivel, createdAt, updatedAt, estudianteId) VALUES('PHP', 'Básico','2021/08/27','2021/08/27',1)

SELECT *FROM trayectorias

SELECT *FROM anuncios

SELECT *FROM administradores
INSERT INTO administradores(nombre,pais,ciudad,createdAt,updatedAt,usuarioId) VALUES ('Administrador 1', 'México', 'CDMX','2021/08/27','2021/08/27', 2)
UPDATE usuarios set roleId = 1 WHERE id = 1

SELECT *FROM opiniones