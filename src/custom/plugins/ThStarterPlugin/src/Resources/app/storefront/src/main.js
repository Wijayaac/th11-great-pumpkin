function isNewsPage () {
	const cmsPage = document.querySelector('.news-page')

	if (cmsPage) {
		document.body.classList.add('page--news')
	}
}

function initVideoPlyr () {
	const videoElm = document.querySelector("#player")
	if (videoElm) {
		const videoPlayer = new Plyr("#player", {
			hideControls: true,
			muted: true,
		})
	}
}


window.addEventListener('DOMContentLoaded', () => {
	initVideoPlyr()
	isNewsPage()
})