function finish(){
	updateProgress("pro1");
	updateProgress("pro2");
	updateProgress("pro3");
	updateProgress("pro4");
	updateProgress("pro5");
}

function updateProgress(proId) {
	var i = 1;
	var elem = document.getElementById(proId).children[0];
	var width = 1;
	var id = setInterval(function(){
		if (width >= 100) {
			clearInterval(id);
			i = 0;
		} else {
			width++;
			elem.style.width = width + "% ";
			elem.innerHTML = width + "% ";
		}
	}, 10);
}