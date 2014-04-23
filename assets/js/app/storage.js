appStorage = [];
if (Modernizr.localstorage) {
	appStorage.storage = true;
	localStorage.setItem("products", JSON.stringify([{
			id: 1,
			title: "Responsive Design",
			description: "Tecnología con la cual tu sitio web podrá ser apreciado por la mayoría de dispositivos, sean estos móviles o de escritorio.",
			isStarred: true,
		},
		{
			id: 2,
			title: "Open Cart",
			description: "Si tu negocio necesita una tienda virtual, el uso de Open Cart definitivamente te apoyará en tu cometido, con Open Cart tendrás tu propia gran tienda virtual con la cuál podrás hacer dinero de manera virtual, imagina los costos que te ahorrarás.",
			isStarred: true,
		},
		{
			id: 1,
			title: "Landing",
			description: "La \"landing\" es un sitio web de información, estático pero impresionantemente hermoso con el cuál podrás tener un buen aspecto en internet y tus seguidores estarán orgullosos de seguirte, ¿has visto esos links en facebook diciendo \"hey mira este sitio\"? Pues tú serás uno de esos.",
			isStarred: true,
		},
		{
			id: 1,
			title: "Responsive Design",
			description: "Tecnología con la cual tu sitio web podrá ser apreciado por la mayoría de dispositivos, sean estos móviles o de escritorio.",
			isStarred: true,
		},
		{
			id: 1,
			title: "Responsive Design",
			description: "Tecnología con la cual tu sitio web podrá ser apreciado por la mayoría de dispositivos, sean estos móviles o de escritorio.",
			isStarred: true,
		}]));
} else{
	appStorage.storage = false;
	appStorage.storage.message = "Browser doesn't support local storage, you should check this app at";
	appStorage.storage.message.src = "http://example.com";
	appStorage.defaultProducts = JSON.stringify([{
			id: 1,
			title: "Responsive Design",
			description: "Tecnología con la cual tu sitio web podrá ser apreciado por la mayoría de dispositivos, sean estos móviles o de escritorio.",
			isStarred: true,
		},
		{
			id: 2,
			title: "Open Cart",
			description: "Si tu negocio necesita una tienda virtual, el uso de Open Cart definitivamente te apoyará en tu cometido, con Open Cart tendrás tu propia gran tienda virtual con la cuál podrás hacer dinero de manera virtual, imagina los costos que te ahorrarás.",
			isStarred: true,
		},
		{
			id: 3,
			title: "Landing",
			description: "La \"landing\" es un sitio web de información, estático pero impresionantemente hermoso con el cuál podrás tener un buen aspecto en internet y tus seguidores estarán orgullosos de seguirte, ¿has visto esos links en facebook diciendo \"hey mira este sitio\"? Pues tú serás uno de esos.",
			isStarred: true,
		},
		{
			id: 4,
			title: "Responsive Design",
			description: "Tecnología con la cual tu sitio web podrá ser apreciado por la mayoría de dispositivos, sean estos móviles o de escritorio.",
			isStarred: true,
		},
		{
			id: 5,
			title: "Responsive Design",
			description: "Tecnología con la cual tu sitio web podrá ser apreciado por la mayoría de dispositivos, sean estos móviles o de escritorio.",
			isStarred: true,
		}]);
}
