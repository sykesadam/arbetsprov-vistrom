const accordionButtons = document.querySelectorAll(".accordion__item");
accordionButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		accordionButtons.forEach((btn) => btn.classList.remove("show"));
		if (btn.classList.contains("show")) {
			btn.classList.remove("show");
		} else {
			btn.classList.add("show");
		}
	});
});

const carouselItems = document.querySelectorAll(".carousel-item");
carouselItems.forEach((btn, i) => {
	const carousel = document.querySelector(".product__carousel");

	const image = document.querySelector(".product-image").offsetWidth;

	btn.addEventListener("click", () => {
		carousel.scrollTo({
			top: 0,
			left: i * image,
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
