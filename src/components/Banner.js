import React from "react";
import "./styles/Banner.css";
const Banner = () => {
	return (
		<div className="home-banner">
			<div className="overlay"></div>
			<div className="row">
				<div className="col-12">
					<h1>Plan de Estudio 2021</h1>
				</div>
				<div className="home-objective col-12 col-md-6">
					<h2>Objetivo</h2>
					<ul>
						<li>Fundamentos solidos de SEO</li>
						<li>Full Stack Developer Javascript</li>
						<li>DevOps Profesional</li>
						<li>Inglés Intermedio</li>
					</ul>
				</div>
				<div className="home-description col-12 col-md-6">
					<h2>Descripción</h2>
					<p>
						Al finalizar el plan de estudios, tendrás conocimientos avanzados en
						javascript, te especializaras en Node y en React, y conocimientos
						básicos sobre los demás Frameworks de Javascript, convirtiéndote en
						un verdadero Full Stack Developer de Javascript. También, tendrás
						los conocimientos para cumplir con el perfil de un DevOps
						Profesional. De igual forma, obtendrás un conocimiento Intermedio
						(B2) del idioma Inglés
					</p>
				</div>
			</div>
		</div>
	);
};

export default Banner;
