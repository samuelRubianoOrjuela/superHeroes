const data = [
	{
		name: "Spider-Man",
		class: "spiderMan",
		image: "marvel/spidey.png",
		color: "#bd0003",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee y Steve Ditko.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en el cómic Amazing Fantasy n.° 15, publicado por Marvel Comics en agosto de 1962.<br><br><b>- Habilidades:</b> La fuerza, el combate y la inteligencia, además de ser capaz de producir y lanzar telarañas sintéticas con ayuda de unos lanzadores que van sujetos a sus muñecas; trepar, adherirse y desplazarse a través de muros y edificaciones; y percibir peligros y amenazas a su alrededor de forma precognitiva gracias a su 'sentido arácnido'."
	},
	{
		name: "Hulk",
		class: "hulk",
		image: "marvel/hulk.png",
		color: "#416D19",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee y Jack Kirby.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en The Incredible Hulk #1 publicado en mayo de 1962.<br><br><b>- Habilidades:</b> La súper fuerza, súper velocidad, súper resistencia, súper salto, invulnerabilidad, regeneración, longevidad, factor de curación acelerado."
	},
	{
		name: "Ant-Man",
		class: "antMan",
		image: "marvel/antMan.png",
		color: "#64CCC5",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee, Larry Lieber y Jack Kirby.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en el número 27 de Tales to Astonish, en enero de 1962.<br><br><b>- Habilidades:</b> La fuerza y agilidad sobrehumanas, cambios de tamaño desde casi microscópico a ~100 pies gigantescos, mantiene la fuerza del tamaño normal en estado reducido."
	},
	{
		name: "The Wasp",
		class: "theWasp",
		image: "marvel/theWasp.png",
		color: "#d6bb26",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee, Ernie Hart y Jack Kirby.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Tales to Astonish #44, en junio de 1963.<br><br><b>- Habilidades:</b> Manipulación de su tamaño corporal, rayos de energía bio-eléctrica, vuelo (mediante alas insectoides), control telepático de los insectos."
	},
	{
		name: "Deadpool",
		class: "deadpool",
		image: "marvel/deadpool.png",
		color: "#7F0000",
		universe: "marvel",
		about: "<b>- Creadores:</b> Rob Liefeld y Fabian Nicieza.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en New Mutants (vol. 1) N.°98, en febrero de 1991.<br><br><b>- Habilidades:</b> Factor curativo, fuerza y resistencia, francotirador, espadachín, experto en artes marciales y explosivos."
	},
	{
		name: "Thor",
		class: "thor",
		image: "marvel/thor.png",
		color: "#003785 ",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee, Larry Lieber y Jack Kirby.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Journey into Mystery N.° 85, en agosto de 1962.<br><br><b>- Habilidades:</b> Manipulación del clima y la materia, manipulación de energía, fuerza sobrehumana, resistencia, durabilidad, velocidad, agilidad, reflejos, curación, longevidad y sentidos."
	},
	{
		name: "Iron-Man",
		class: "ironMan",
		image: "marvel/ironMan.png",
		color: "#ECEE81",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee, Larry Lieber, Don Heck y Jack Kirby.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Tales of Suspense N.° 39, en marzo de 1963.<br><br><b>- Habilidades:</b> La superfuerza, durabilidad y resistencia por armadura, vuelo supersónico."
	},
	{
		name: "Black Panther",
		class: "blackPanther",
		image: "marvel/blackPanther.png",
		color: "#272829",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee y Jack Kirby.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en The Fantastic Four N.º 52, en el año 1966.<br><br><b>- Habilidades:</b> Maestro artista marcial, táctico, estratega e inventor."
	},
	{
		name: "Scarlet Witch",
		class: "scarletWitch",
		image: "marvel/scarletWitch.png",
		color: "#732487",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee y Jack Kirby.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en The X-Men vol. 1 N.°4, en marzo de 1964.<br><br><b>- Habilidades:</b> La alteración y distorsión de la realidad, absorción de energía, magia del caos, hechicería, proyección de energía, telepatía."
	},
	{
		name: "Mystique",
		class: "mystique",
		image: "marvel/mystique.png",
		color: "#7FC7D9",
		universe: "marvel",
		about: "<b>- Creadores:</b> Chris Claremont y Dave Cockrum.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Ms. Marvel vol. 1 N.°17, en mayo de 1978.<br><br><b>- Habilidades:</b> La curación acelerada, envejecimiento retardado, cambio de forma uerza mejorada, velocidad, resistencia, durabilidad, flexibilidad, agilidad y reflejos."
	},
	{
		name: "Hawkeye",
		class: "hawkeye",
		image: "marvel/hawkeye.png",
		color: "#5C5470",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee y Don Heck.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Tales of Suspense N.°57, en septiembre de 1964.<br><br><b>- Habilidades:</b> maestro arquero y tirador, experto en artes marciales, combatiente cuerpo a cuerpo y acróbata, estratega y táctico experto."
	},
	{
		name: "Captain America",
		class: "captainAmerica",
		image: "marvel/captainAmerica.png",
		color: "#1B1A55",
		universe: "marvel",
		about: "<b>- Creadores:</b> Joe Simon y Jack Kirby.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Captain America Comics N.°1, en marzo de 1941.<br><br><b>- Habilidades:</b> La agilidad, velocidad y fuerza sobrehumanas. Gran habilidad con su escudo. Instinto de liderazgo, gran resistencia, inmune a gases y enfermedades, curación y regeneración acelerada."
	},
	{
		name: "Wolverine",
		class: "wolverine",
		image: "marvel/wolverine.png",
		color: "#F9F07A",
		universe: "marvel",
		about: "<b>- Creadores:</b>Len Wein, John Romita Sr. y Herb Trimpe.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en The Incredible Hulk N.°180, en octubre de 1974.<br><br><b>- Habilidades:</b> Huesos indestructibles mediante adamantium, farras retráctiles, factor de curación, maestría en combate."
	},
	{
		name: "X-23",
		class: "x23",
		image: "marvel/x23.png",
		color: "#D5B4B4",
		universe: "marvel",
		about: "<b>- Creadores:</b>Craig Kyle y Christopher Yost.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en NYX N.°3, en el año 2004.<br><br><b>- Habilidades:</b> Factor de curación regenerativa, resistencia psíquica, experta combatiente armada y desarmada."
	},
	{
		name: "Black Widow",
		class: "blackWidow",
		image: "marvel/blackWidow.png",
		color: "#7D0A0A",
		universe: "marvel",
		about: "<b>- Creadores:</b> Stan Lee, Don Rico y Don Heck.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Tales of Suspense N.°52, en abril de 1964.<br><br><b>- Habilidades:</b> Experta táctica, combatiente cuerpo a cuerpo y agente secreta, envejecimiento lento y sistema inmunológico mejorado, tiradora experta y dominio de varias otras armas."
	},
	{
		name: "Batman",
		class: "batman",
		image: "dc/batman.png",
		color: "#272829",
		universe: "dc",
		about: "<b>- Creadores:</b> Bob Kane y Bill Finger.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en la historia titulada 'El caso del sindicato químico' de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.<br><br><b>- Habilidades:</b> Gran intelecto, uso de la tecnologia."
	},
	{
		name: "Superman",
		class: "superman",
		image: "dc/superman.png",
		color: "#1B1A55",
		universe: "dc",
		about: "<b>- Creadores:</b> Jerry Siegel y Joe Shuster.<br><br><b>- Lanzamiento:</b>Apareció por primera vez por Action Comics en 1933.<br><br><b>- Habilidades:</b>Súper fuerza, velocidad, resistencia, agilidad, audición, reflejos, durabilidad, sentidos, longevidad, entre otros."
	},
	{
		name: "Aquaman",
		class: "aquaman",
		image: "dc/aquaman.png",
		color: "#98ABEE",
		universe: "dc",
		about: "<b>- Creadores:</b> Paul Norris y Mort Weisinger.<br><br><b>- Lanzamiento:</b>Debutó en More Fun Comics # 73 (noviembre de 1941).<br><br><b>- Habilidades:</b>Adaptacion acuatica-anfibia, telepatia, dominación psiónica de la vida marina, sentidos mejorados (incluyendo visión en la oscuridad, infravisión, y es electromagnético)."
	},
	{
		name: "Batwoman",
		class: "batwoman",
		image: "dc/batwoman.png",
		color: "#7F0000",
		universe: "dc",
		about: "<b>- Creadores:</b> Sheldon Moldoff y Bob Kane.<br><br><b>- Lanzamiento:</b>Esta versión actual de Batwoman se introdujo en el 2006 en la séptima semana del cómic semanal de 52 años de duración de la editorial.<br><br><b>- Habilidades:</b>Aviación, gimnasta profesional, artes marciales, sigilo, acróbata, memoria fotográfica, super inteligencia."
	},
	{
		name: "Raven",
		class: "raven",
		image: "dc/raven.png",
		color: "#451952",
		universe: "dc",
		about: "<b>- Creadores:</b> Marv Wolfman y George Pérez.<br><br><b>- Lanzamiento:</b>Apareció por primera vez en un inserto especial en DC Comics Presents # 26 (octubre de 1980).<br><br><b>- Habilidades:</b>Empatía, Curación empática, Manipulación emocional Telequinesis Teletransportación Vuelo Control de energía mística, proyección astral"
	},
	{
		name: "Shazam",
		class: "shazam",
		image: "dc/shazam.png",
		color: "#bd0003",
		universe: "dc",
		about: "<b>- Creadores:</b> Bill Parker y Clarence Charles Beck.<br><br><b>- Lanzamiento:</b>Creado en 1939 originalmente publicado por Fawcett Comics en Whizz Comics 2 (febrero de 1940).<br><br><b>- Habilidades:</b>Sabiduría de Salomón, fuerza de Hércules, resistencia de Atlas, poder de Zeus, valor de Aquiles, velocidad de Mercurio, teletransportación a través de la Roca de la Eternidad."
	},
	{
		name: "Wonder Woman",
		class: "wonderWoman",
		image: "dc/wonderWoman.png",
		color: "#7D0A0A",
		universe: "dc",
		about: "<b>- Creadores:</b>William Moulton Marston y H. G. Peter.<br><br><b>- Lanzamiento:</b>Apareció como tal publicado por primera vez en la revista de historietas All Star Comics #8 (de diciembre de 1941).<br><br><b>- Habilidades:</b>Súper Fuerza, súper velocida, inmortalidad, factor de curación, reflejos, resistencia, vuelo, habilidad de lucha altamente desarrollada, experta en combate cuerpo a cuerpo, poder hablar con los animales y en cualquier idioma de alguna persona que se encuentre."
	},
	{
		name: "Catwoman",
		class: "catwoman",
		image: "dc/catwoman.png",
		color: "#7E2553",
		universe: "dc",
		about: "<b>- Creadores:</b>Bill Finger y Bob Kane.<br><br><b>- Lanzamiento:</b>El personaje hizo su debut como 'La Gata' en Batman #1 (primavera de 1940).<br><br><b>- Habilidades:</b>Su habilidad para ocultarse y pasar desapercibida es magistral, siendo la mejor ladrona de toda la ciudad."
	},
	{
		name: "Nightwing",
		class: "nightwing",
		image: "dc/nightwing.png",
		color: "#211951",
		universe: "dc",
		about: "<b>- Creadores:</b>Edmond Hamilton y Curt Swan.<br><br><b>- Lanzamiento:</b>El personaje hizo su debut en Superman #158 (enero de 1963).<br><br><b>- Habilidades:</b>Ha sido adiestrado en técnicas de sigilo e infiltración, siendo capaz de atravesar cualquier sistema de seguridad con una habilidad comparable a la de Batman. Tambien ha sido instruido en escapologia, rastreo, tecnicas para el disfraz, análisis deductivo y técnicas de investigación."
	},
	{
		name: "Cyborg",
		class: "cyborg",
		image: "dc/cyborg.png",
		color: "#64CCC5",
		universe: "dc",
		about: "<b>- Creadores:</b>Marv Wolfman y George Pérez.<br><br><b>- Lanzamiento:</b>Apareció por primera vez en un suplemento especial en DC Comics Presents #26 (octubre de 1980).<br><br><b>- Habilidades:</b>Intelecto nivel genio, experto en combate cuerpo a cuerpo, fuerza sobrehumana, inmersión en el ciberespacio, tecnopatía, sensores y armamento avanzado, vuelo."
	},
	{
		name: "Flash",
		class: "flash",
		image: "dc/flash.png",
		color: "#B31312",
		universe: "dc",
		about: "<b>- Creadores:</b> Gardner Fox y Harry Lampert.<br><br><b>- Lanzamiento:</b>Apareció por primera vez en Flash Comics #1 (enero de 1940).<br><br><b>- Habilidades:</b> Todas las encarnaciones del Flash se pueden mover, pensar y reaccionar a velocidad luz, además de tener una resistencia sobrehumana que les permite recorrer distancias increíbles."
	},
	{
		name: "Reverse Flash",
		class: "reverseFlash",
		image: "dc/reverseFlash.png",
		color: "#F9F07A",
		universe: "dc",
		about: "<b>- Creadores:</b> John Broome y Carmine Infantino.<br><br><b>- Lanzamiento:</b>Hizo su debut en The Flash # 139 (septiembre de 1963).<br><br><b>- Habilidades:</b> Todas las encarnaciones del Flash se pueden mover, pensar y reaccionar a velocidad luz, además de tener una resistencia sobrehumana que les permite recorrer distancias increíbles."
	},
	{
		name: "Joker",
		class: "joker",
		image: "dc/joker.png",
		color: "#451952",
		universe: "dc",
		about: "<b>- Creadores:</b> Jerry Robinson, Bill Finger y Bob Kane.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Batman N.º 1, en el año 1940.<br><br><b>- Habilidades:</b> Agilidad, coeficiente intelectual de genio, experto en armas, especialista en química, memoria eidética, extraordinaria resistencia."
	},
	{
		name: "Starfire",
		class: "starfire",
		image: "dc/starfire.png",
		color: "#bd0003",
		universe: "dc",
		about: "<b>- Creadores:</b> Marv Wolfman y George Pérez.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en DC Comics Presents N.° 26, en octubre de 1980.<br><br><b>- Habilidades:</b> Fuerza sobrehumana, velocidad sobrehumana, reflejos sobrehumanos, resistencia y durabilidad, vuelo, proyección de energía, inmunidad a la radiación, frío y calor y asimilación lingüística."
	},
	{
		name: "Green Lantern",
		class: "greenLantern",
		image: "dc/greenLantern.png",
		color: "#00AD7C",
		universe: "dc",
		about: "<b>- Creadores:</b> Jerry Robinson, Bill Finger y Bob Kane.<br><br><b>- Lanzamiento:</b> Apareció por primera vez en Batman N.º 1, en el año 1940.<br><br><b>- Habilidades:</b> Agilidad, coeficiente intelectual de genio, experto en armas, especialista en química, memoria eidética, extraordinaria resistencia."
	}
];
function cargarData(heroes) {
	
	heroes.forEach((hero) => {
		const container = document.querySelector(`.${hero.universe}_container`);
		const card = document.createElement("div");
		card.classList.add("card");
	
		const image = document.createElement("div");
		image.classList.add("image");
		image.style.backgroundImage = `url(https://samuelrubianoorjuela.github.io/fotosHeroes/${hero.image})`;
		image.style.backgroundColor = `${hero.color}`;
	
		const info = document.createElement("div");
		const name = document.createElement("h3");
		const btnOpen = document.createElement("span");
		btnOpen.classList.add('open', `open_${hero.class}`)
		btnOpen.innerHTML = "ver";
		info.classList.add("info");
		name.innerHTML = `${hero.name}`;
		
		
		//
		
		const back = document.createElement("dialog");
		back.classList.add("fondo", `fondo_${hero.class}`);
		btnOpen.innerHTML = "ver";
		
		
		const window = document.createElement("div");
		window.classList.add("window");
		const btnClose = document.createElement("span");
		btnClose.classList.add("close", `close_${hero.class}`);
		btnClose.innerHTML = '<i class="bx bx-x"></i>'
		
		const windowText = document.createElement("div");
		windowText.classList.add("window--text");
		const title = document.createElement("h2");
		title.innerHTML = hero.name
		const text = document.createElement("p");
		text.innerHTML = hero.about
		
		const windowImage = document.createElement("div");
		windowImage.classList.add("window--image");
		windowImage.style.backgroundImage = `url(https://samuelrubianoorjuela.github.io/fotosHeroes/${hero.image})`, `${hero.color}`;
		windowImage.style.backgroundColor = `${hero.color}`;
		
		//
		
		info.append(name, btnOpen);
		card.append(image, info);
		windowText.append(title, text);
		window.append(windowImage, windowText, btnClose);
		back.append(window);
		container.append(card, back);

		btnOpen.addEventListener('click', () => {
			back.style.opacity = '1'
			back.style.visibility = 'visible'
		})
		btnClose.addEventListener('click', () => {
			back.style.opacity = '0'
			back.style.visibility = 'hidden'
		})
	});
} 
const marvel = data.filter(hero => 	hero.universe === 'marvel' )
const dc = data.filter(hero => 	hero.universe === 'dc' )
cargarData(data);