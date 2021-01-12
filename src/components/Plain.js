import React from "react";
import Card from "./Card";
import "./styles/Plain.css";
//status 1:to-do, 2:doing, 3: completed
/*const month = [
	"enero",
	"febrero",
	"marzo",
	"abril",
	"mayo",
	"junio",
	"julio",
	"agosto",
	"septiembre",
	"octubre",
	"noviembre",
	"diciembre",
];
const plainContent = [
	{
		month: "enero",
		content: {
			description: "Curso de Introducción a SEO: Posicionamiento en Buscadores",
			status: 1,
			start: null,
			end: null,
		},
	},
	{
		month: "enero",
		content: {
			description: "Curso de Introducción a SEO: Posicionamiento en Buscadores",
			status: 1,
			start: null,
			end: null,
		},
	},
];*/
const contents = [
	{
		month: "enero",
		duration: 35,
		content: [
			"Curso de Introducción a SEO: Posicionamiento en Buscadores",
			"Curso de Google Analytics",
			"Curso de Introducción a Google Tag Manager 📃",
			"Curso de SEO Técnico",
			"Curso de Copywriting con Técnicas de Storytelling",
			"Curso de Buenas Prácticas de SEO",
			"Curso de Google Data Studio",
			"Curso de Estrategia y Planeación de Contenidos para SEO",
			"Curso de Fundamentos de Google Search Console para SEO",
			"Curso de Expresiones Regulares",
			"Taller de Inglés para Principiantes",
			"Curso de Inglés Básico: Fundamentos",
		],
	},
	{
		month: "febrero",
		duration: 51,
		content: [
			"Curso de Redux por Bedu",
			"Curso de Unit Testing con Jest en React",
			"Curso Profesional de React Hooks",
			"Curso Básico de GraphQL",
			"Curso de Next.js",
			"Curso de Desarrollo de Aplicaciones Web con Gatsby JS",
			"Curso de Progressive Web Apps con React.js",
			"Curso de React Avanzado",
			"Curso de Introducción a React Native",
			"Curso de React.js 2017",
			"Curso de Redux 2018",
			"Curso de Inglés Básico: Gramática",
			"Curso de Inglés Básico: Conversación",
		],
	},
	{
		month: "marzo",
		duration: 34,
		content: [
			"Curso de Introducción a la Terminal y Línea de Comandos",
			"Curso de Node.js",
			"Curso de Node.js con Hapi",
			"Curso Práctico de Node.js",
			"Curso de Programación Funcional en JavaScript por Bedu",
			"Curso de Express.js",
			"Curso de JavaScript Full Stack con Sails.js",
			"Curso de Inglés Básico: Pronunciación",
		],
	},
	{
		month: "abril",
		duration: 45,
		content: [
			"Curso Avanzado de Node.js",
			"Curso de End to End Testing con Cypress",
			"Curso de Travis CI",
			"Curso de Desarrollo de APIs con Sails.js",
			"Curso de MEAN 2017",
			"Curso de JavaScript Testing con Jest 2019",
			"Curso Básico de Node.js 2018",
			"Curso de Inglés Práctico: Fundamentos",
			"Curso de Inglés Práctico: Gramática",
			"Curso de Inglés Práctico: Conversación",
		],
	},
	{
		month: "mayo",
		duration: 36,
		content: [
			"Fundamentos de Ingeniería de Software",
			"Fundamentos de Bases de Datos",
			"Curso de SQL y MySQL",
			"Curso de PostgreSQL",
			"Curso Básico de MongoDB",
			"Curso de Introducción a Elasticsearch",
			"Curso Práctico de SQL",
			"Curso de Optimización de Bases de Datos en SQL Server",
			"Curso de Inglés Práctico: Pronunciación",
		],
	},
	{
		month: "junio",
		duration: 34,
		content: [
			"Fundamentos de Google Cloud Platform",
			"Curso de Bases de Datos en AWS",
			"Curso de Firebase para Web",
			"Curso de SQL en Azure",
			"Curso de PostgreSQL Aplicado a Ciencia de Datos",
			"Curso de Análisis de Negocios para Ciencia de Datos",
			"Curso Introductorio de Spark",
			"Curso de AWS Redshift para Manejo de Big Data",
			"Curso de Hadoop",
			"Curso de Inglés Intermedio: Gramática",
		],
	},
	{
		month: "julio",
		duration: 42,
		content: [
			"Curso de Administración de Servidores Linux",
			"Fundamentos de Google Cloud Platform",
			"Curso de Fundamentos de AWS Cloud",
			"Fundamentos de IBM Cloud",
			"Curso de Azure IaaS",
			"Curso de Digital Ocean",
			"Curso de Introducción al Despliegue de Aplicaciones",
			"Curso de Gestión de Servidores con Rust",
			"Curso Básico de Jenkins",
			"Curso de Programación en Bash Shell",
			"Curso de Travis CI",
			"Curso de Swarm",
			"Curso de Docker",
			"Curso de Inglés Intermedio: Conversación",
			"Curso de Inglés Intermedio: Pronunciación (Parte I)",
		],
	},
	{
		month: "agosto",
		duration: 42,
		content: [
			"Curso de Kubernetes",
			"Curso de Google Kubernetes Engine",
			"Curso de Infraestructura Como Código con Terraform",
			"Curso de DevOps con GitLab",
			"Curso de Fundamentos de Pruebas de Software",
			"Curso Profesional de DevOps",
			"Curso de Deploy con Amazon Web Services 2015",
			"Curso de Heroku 2015",
			"Curso de Rackspace 2015",
			"Curso de Inglés Intermedio: Pronunciación (Parte II)",
			"Curso de Inglés Intermedio para el Trabajo",
		],
	},
	{
		month: "septiembre",
		duration: 46,
		content: [
			"Curso de Azure 2015",
			"Fundamentos de Docker 2017",
			"Curso de Deploy con Amazon Web Services 2017",
			"Curso de Azure PaaS 2018",
			"Curso de Arquitectura de Aplicaciones con Docker 2018",
			"Curso de DigitalOcean 2017",
			"Curso de Inglés Técnico para Profesionales",
			"Curso de Inglés para Entrevistas de Trabajo",
		],
	},
	{
		month: "octubre",
		duration: 49,
		content: [
			"Curso de Java SE Orientado a Objetos",
			"Curso Básico de Kotlin",
			"Curso de Bases Técnicas de Android",
			"Curso Básico de Diseño de Interfaces con Android Studio",
			"Curso de Kotlin para Android",
			"Curso de Arquitectura de Android",
			"Curso de Patrones de Diseño en Android",
			"Curso de Kotlin con Firebase Firestore",
			"Curso de Desarrollo de Aplicaciones con Huawei",
			"Curso de Clean Architecture en Android",
			"Curso de Flutter",
			"Curso de Inglés para Developers",
		],
	},
	{
		month: "noviembre",
		duration: 50,
		content: [
			"Curso Avanzado de Flutter",
			"Curso Definitivo de Android 2016",
			"Curso de Kotlin para Android 2017",
			"Curso Profesional de Firebase para Android 2017",
			"Curso de Escritura en Inglés",
			"Curso de Inglés para Viajes",
		],
	},
];

const Plain = () => {
	return (
		<div className="home-plain">
			<div className="container">
				<div className="row">
					{contents.map((content) => (
						<div key={content.month} className="col-12 col-md-4 col-lg-3">
							<Card key={content.month} {...content} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Plain;
