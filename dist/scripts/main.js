var swiper = new Swiper(".mySwiper", {
	spaceBetween: 8,
	slidesPerView: 5,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});
var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 8,
	thumbs: {
		swiper: swiper,
	},
	effect: 'fade',
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});

// home-swiper
var homeSwiper = new Swiper(".home-swiper", {
	spaceBetween: 8,
	slidesPerView: 1,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	speed: 1000,
});

// releted-swiper
var reletedSwiper = new Swiper(".releted-swiper", {
	spaceBetween: 26,
	slidesPerView: 5,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

try {
	// Controls the slider using from Input....
	function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
		const [from, to] = getParsed(fromInput, toInput);
		fillSlider(fromInput, toInput, "#46A35833", "#003D77", controlSlider);
		fromSlider.value = from;

		if (from > to) {
			fromSlider.value = to;
			fromInput.textContent = `$${to}`;
		} else {
			fromInput.textContent = `$${from}`;
		}
	}

	// Controls the slider using to Input....
	function controlToInput(toSlider, fromInput, toInput, controlSlider) {
		const [from, to] = getParsed(fromInput, toInput);
		fillSlider(fromInput, toInput, "#46A35833", "#003D77", controlSlider);
		setToggleAccessible(toInput);
		toSlider.value = to;
		toInput.textContent = `$${to}`;

		if (from <= to) {
			toSlider.value = to;
			toInput.textContent = `$${to}`;
		} else {
			toInput.textContent = `$${from}`;
		}
	}

	// Sliding event of the From slider
	function controlFromSlider(fromSlider, toSlider, fromInput) {
		const [from, to] = getParsed(fromSlider, toSlider);
		fillSlider(fromSlider, toSlider, "#46A35833", "#003D77", toSlider);
		fromInput.textContent = `$${from}`;
		if (from > to) {
			fromInput.textContent = `$${to}`;
		}
	}

	// Sliding event of the To slider
	function controlToSlider(fromSlider, toSlider, toInput) {
		const [from, to] = getParsed(fromSlider, toSlider);
		fillSlider(fromSlider, toSlider, "#46A35833", "#003D77", toSlider);
		setToggleAccessible(toSlider);
		toInput.textContent = `$${to}`;
		if (from > to) {
			toInput.textContent = `$${from}`;
		}
	}

	// Parsing values of the Inputs
	function getParsed(currentFrom, currentTo) {
		const from = parseInt(currentFrom.value, 10);
		const to = parseInt(currentTo.value, 10);
		return [from, to];
	}

	// Changing and Filling the color in the selected part...
	function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
		let rangeDistance = to.max - to.min;
		let fromPosition = from.value - to.min;
		let toPosition = to.value - to.min;
		if (fromPosition > toPosition) {
			let spare = fromPosition;
			fromPosition = toPosition;
			toPosition = spare;
		}
		controlSlider.style.background = `linear-gradient(
          to right,
          ${sliderColor} 0%,
          ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
          ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
          ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
          ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
          ${sliderColor} 100%)`;
	}

	// Making sure the toggle which we are using is accessible to change the range
	function setToggleAccessible(currentTarget) {
		const toSlider = document.querySelector("#toSlider");
		if (Number(currentTarget.value) <= 0) {
			toSlider.style.zIndex = 2;
		} else {
			toSlider.style.zIndex = 0;
		}
	}

	const fromSlider = document.querySelector("#fromSlider");
	const toSlider = document.querySelector("#toSlider");
	const fromInput = document.querySelector("#fromInput");
	const toInput = document.querySelector("#toInput");

	// Initially filling the slider using default values...
	fillSlider(fromSlider, toSlider, "#46A35833", "#003D77", toSlider);
	setToggleAccessible(toSlider);

	// Assigning listener methods to respective events.
	fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
	toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
} catch (error) {
	console.log(error);
}

// Custom select functionality
try {
	const selectBtn = document.getElementById('selectBtn');
	const selectedOption = document.getElementById('selectedOption');
	const selectOptions = document.getElementById('selectOptions');

	// Toggle options visibility
	selectBtn.addEventListener('click', () => {
		selectOptions.classList.toggle('hidden');
	});

	// Handle option selection
	selectOptions.addEventListener('click', (e) => {
		if (e.target.tagName === 'LI') {
			selectedOption.textContent = e.target.textContent;
			selectOptions.classList.add('hidden');
		}
	});

	// Close options when clicking outside
	document.addEventListener('click', (e) => {
		if (!selectBtn.contains(e.target) && !selectOptions.contains(e.target)) {
			selectOptions.classList.add('hidden');
		}
	});
} catch (error) {

}


try {
	document.addEventListener('DOMContentLoaded', function () {
		const tabItems = document.querySelectorAll('.tab-item');
		const tabContents = document.querySelectorAll('.tab-content');

		tabItems.forEach(item => {
			item.addEventListener('click', function () {
				const tabId = this.getAttribute('data-tab');

				tabItems.forEach(tab => tab.classList.remove('active'));
				tabContents.forEach(content => content.classList.add('hidden'));

				this.classList.add('active');
				document.getElementById(tabId).classList.remove('hidden');
			});
		});
	});
} catch (error) {

}
