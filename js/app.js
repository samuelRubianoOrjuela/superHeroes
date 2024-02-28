const data = [
	{
		name: "Spider-Man",
		class: "spiderMan",
		image: "marvel/spidey.png",
		color: "#bd0003",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Hulk",
		class: "hulk",
		image: "marvel/hulk.png",
		color: "#416D19",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Ant-Man",
		class: "antMan",
		image: "marvel/antMan.png",
		color: "#64CCC5",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "The Wasp",
		class: "theWasp",
		image: "marvel/theWasp.png",
		color: "#d6bb26",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Deadpool",
		class: "deadpool",
		image: "marvel/deadpool.png",
		color: "#7F0000",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Thor",
		class: "thor",
		image: "marvel/thor.png",
		color: "#003785 ",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Iron-Man",
		class: "ironMan",
		image: "marvel/ironMan.png",
		color: "#ECEE81",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Black Panther",
		class: "blackPanther",
		image: "marvel/blackPanther.png",
		color: "#272829",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Scarlet Witch",
		class: "scarletWitch",
		image: "marvel/scarletWitch.png",
		color: "#732487",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Mystique",
		class: "mystique",
		image: "marvel/mystique.png",
		color: "#7FC7D9",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Hawkeye",
		class: "hawkeye",
		image: "marvel/hawkeye.png",
		color: "#5C5470",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Captain America",
		class: "captainAmerica",
		image: "marvel/captainAmerica.png",
		color: "#1B1A55",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Wolverine",
		class: "wolverine",
		image: "marvel/wolverine.png",
		color: "#F9F07A",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "X-23",
		class: "x23",
		image: "marvel/x23.png",
		color: "#D5B4B4",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Black Widow",
		class: "blackWidow",
		image: "marvel/blackWidow.png",
		color: "#7D0A0A",
		universe: "marvel",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Batman",
		class: "batman",
		image: "dc/batman.png",
		color: "#272829",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Superman",
		class: "superman",
		image: "dc/superman.png",
		color: "#1B1A55",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Aquaman",
		class: "aquaman",
		image: "dc/aquaman.png",
		color: "#98ABEE",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Batwoman",
		class: "batwoman",
		image: "dc/batwoman.png",
		color: "#7F0000",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Raven",
		class: "raven",
		image: "dc/raven.png",
		color: "#451952",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Shazam",
		class: "shazam",
		image: "dc/shazam.png",
		color: "#bd0003",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Wonder Woman",
		class: "wonderWoman",
		image: "dc/wonderWoman.png",
		color: "#7D0A0A",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Catwoman",
		class: "catwoman",
		image: "dc/catwoman.png",
		color: "#7E2553",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Nightwing",
		class: "nightwing",
		image: "dc/nightwing.png",
		color: "#211951",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Cyborg",
		class: "cyborg",
		image: "dc/cyborg.png",
		color: "#64CCC5",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Flash",
		class: "flash",
		image: "dc/flash.png",
		color: "#B31312",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Reverse Flash",
		class: "reverseFlash",
		image: "dc/reverseFlash.png",
		color: "#F9F07A",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Joker",
		class: "joker",
		image: "dc/joker.png",
		color: "#451952",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Starfire",
		class: "starfire",
		image: "dc/starfire.png",
		color: "#bd0003",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
	{
		name: "Green Lantern",
		class: "greenLantern",
		image: "dc/greenLantern.png",
		color: "#00AD7C",
		universe: "dc",
		about: "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa.",
	},
];

data.forEach((hero) => {
	const container = document.querySelector(`.${hero.universe}_container`);
	const card = document.createElement("div");
	card.classList.add("card");

	const image = document.createElement("div");
	image.classList.add("image");
	image.style.backgroundImage = `url(https://samuelrubianoorjuela.github.io/fotosHeroes/${hero.image})`;
	image.style.backgroundColor = `${hero.color}`;

	const info = document.createElement("div");
	const name = document.createElement("span");
	const button = document.createElement("button");
	info.classList.add("info");
	name.innerHTML = `${hero.name}`;
	button.innerHTML = "ver";

	//

	const back = document.createElement("dialog");
	back.classList.add("fondo", `fondo_${hero.class}`);
	// back.setAttribute('closed');

	const window = document.createElement("div");
	window.classList.add("window");

	const windowText = document.createElement("div");
	windowText.classList.add("window--text");
	windowText.innerHTML = hero.about;

	const windowImage = document.createElement("div");
	windowImage.classList.add("window--image");
	windowImage.style.backgroundImage = `url(${hero.image})`;

	//

	info.append(name, button);
	card.append(image, info);
	window.append(windowImage, windowText);
	back.append(window);
	container.append(card, back);
});
