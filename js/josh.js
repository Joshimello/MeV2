const pagelist = {
	"chibimello": {
		link: "https://chibimello.com",
		icon: "fal fa-link",
		color: "#FB9BA9"
	},

	"line": {
		link: "https://line.me/ti/p/jOdcdMo9RY",
		icon: "fab fa-line",
		color: "#00c300"
	},

	"github": {
		link: "https://github.com/joshimello",
		icon: "fab fa-github",
		color: "#333333"
	},

	"discord": {
		link: "https://discordapp.com/users/365045703296155648",
		icon: "fab fa-discord",
		color: "#7289da"
	},

	"youtube": {
		link: "https://www.youtube.com/channel/UCdYrcEj4gSB41WOoAdHRjYg",
		icon: "fab fa-youtube",
		color: "#ff0000"
	},

	"whatsapp": {
		link: "https://wa.me/601156226133",
		icon: "fab fa-whatsapp",
		color: "#25d366"
	},

	"instagram": {
		link: "https://instagram.com/chibimello/",
		icon: "fab fa-instagram",
		color: "#e1306c"
	},

	"facebook": {
		link: "https://www.facebook.com/people/Joshua-Lean/100077052090060",
		icon: "fab fa-facebook",
		color: "#1877f2"
	},

	"twitter": {
		link: "https://twitter.com/Joshimello",
		icon: "fab fa-twitter",
		color: "#1da1f2"
	},
	
	"email": {
		link: "mailto:josh@chibimello.com",
		icon: "fal fa-at",
		color: "#ea4335"
	},
}

window.addEventListener('load', function () {
	$('#status').fadeOut();
    $('#preloader').delay(50).fadeOut(100);
    $('body').delay(50).css({'overflow':'visible'});
})

function listlink(){
	for (let entry in pagelist) {
		$('.content').append('<div class="d-block mt-3"><a id="'+entry+'" class="col-10 col-sm-7 col-md-5 linkbutton btn" target="_blank" href="'+pagelist[entry].link+'"><i class="'+pagelist[entry].icon+' fa-fw"></i><span> '+entry.toUpperCase()+'</span></a></div>')
		$('style').append('#'+entry+':hover { color: '+pagelist[entry].color+' }\n')
	}
}

listlink()