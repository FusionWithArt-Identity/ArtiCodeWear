
document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();
	const password = document.getElementById('password').value;
	const correctPassword = '12345';
	if (password === correctPassword) {
		document.getElementById('heading').innerHTML = 'Hello Mihir';
		document.getElementById('heading').classList.add('loggedIn');
		document.getElementById('Mihir').src = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7anHeHwC4Ns77JkbsmjTTJhEdeHYjjQBxyROHpTaDwpEhcNAmUOwpfXhxHsBeLLVeFPpc4mKIRvxkyVXaV5119e5f7fCy3mLETBcWixEwY-MrCu8fIfm8AMGpdgr0AHopIp740oXS0_Q7Jg_GEWBdErCXAD2OnuSZwLzOszYpYEgPotAOQn92ZiQmQMEE/s1600/The%20Earth.png';
		document.getElementById('login-form').style.display = 'none';
		document.getElementById('protected-content').style.display = 'block';
		document.getElementById('subheading').style.display = 'block';
	} else {
		alert('Incorrect password!');
	}
});

document.addEventListener('contextmenu', function(event) {
	event.preventDefault();
});
