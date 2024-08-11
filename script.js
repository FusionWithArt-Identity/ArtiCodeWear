
document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();
	const password = document.getElementById('password').value;
	const correctPassword = '12345';
	if (password === correctPassword) {
		document.getElementById('heading').innerHTML = 'Hello Mihir';
		document.getElementById('heading').classList.add('loggedIn');
		document.getElementById('Mihir').src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB7ktKS8T_T_evSSb27yW7mJ9ntd1rHlKW2bSCF23tTd47e7R_8phLRiEwo216Hqhw3gLkm7w9opaxKgA9tyR1fgTNSDWO-bQuMjC9rb-0Dsk-gVVzRkn3yk8RWM19EEfa7dWgfA0qAGj818aiiNtmNP03ZzsXOPhiIIywL2AC0mfPce-3DVLBj6YjMJ6s/s1600/paris-games-conclude-6753651837110568-la202124.gif';
		document.getElementById('login-form').style.display = 'none';
		document.getElementById('protected-content').style.display = 'block';
		document.getElementById('subheading').style.display = 'block';
	} else {
		alert('Incorrect... Write Your Exact Name as You Provided While Ordering This Printed T-Shirt!');
	}
});

document.addEventListener('contextmenu', function(event) {
	event.preventDefault();
});
