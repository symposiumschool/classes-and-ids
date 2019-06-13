let heading = document.querySelector('h1');

heading.addEventListener('click', function() {
	alert('You clicked the heading!');
});

let contact = document.getElementById('contact');

contact.addEventListener('click', function() {
	contact.style.backgroundColor = 'springgreen';
});

// js for scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});
