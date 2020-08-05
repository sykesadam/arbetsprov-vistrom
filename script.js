const accordionButtons = document.querySelectorAll(".accordion__item");
accordionButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		if (!btn.classList.contains("show")) {
			accordionButtons.forEach((btn) => btn.classList.remove("show"));
			btn.classList.add("show");
		} else {
			btn.classList.remove("show");
		}
	});
});

const carouselItems = document.querySelectorAll(".carousel-item");
carouselItems.forEach((btn, i) => {
	const carousel = document.querySelector(".product__carousel");
	let imageWidth = document.querySelector(".product-image").offsetWidth;

	// för att bilderna ska flyttas helt när skärmen ändras.
	window.addEventListener(
		"resize",
		() =>
			(imageWidth = document.querySelector(".product-image").offsetWidth)
	);

	btn.addEventListener("click", () => {
		carousel.scrollTo({
			top: 0,
			left: i * imageWidth,
			behavior: "smooth",
		});
		carouselItems.forEach((btn) => btn.classList.remove("selected"));
		btn.classList.add("selected");
	});
});

document.querySelector(".hamburger").addEventListener("click", () => {
	const hamburgerItems = document.querySelector(".hamburger__links");

	if (hamburgerItems.classList.contains("open")) {
		hamburgerItems.classList.remove("open");
	} else {
		hamburgerItems.classList.add("open");
	}
});
