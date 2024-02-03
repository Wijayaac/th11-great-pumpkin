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



function isValidated () {
	const requiredFields = document.querySelectorAll('[data-validation]')
	let hasError = false

	requiredFields.forEach(function (field) {
		const fieldValue = field.value

		if (fieldValue === '') {
			field.parentNode.classList.add('error')
			hasError = true
		} else {
			field.parentNode.classList.remove('error')
		}
	})

	return hasError
}

// TODO: Add recaptcha handler
function contactFormSubmit () {
	const form = document.querySelector('.gp-cf__form form')
	if (!form) {
		return
	}

	const requiredFields = document.querySelectorAll('[data-validation]')

	// form error message on change
	requiredFields.forEach(function (field) {
		field.addEventListener('blur', function () {
			const fieldValue = field.value
			if (fieldValue === '') {
				field.parentNode.classList.add('error')
			} else {
				field.parentNode.classList.remove('error')
			}
		})

		field.addEventListener('change', function () {
			const fieldValue = field.value
			if (fieldValue === '') {
				field.parentNode.classList.add('error')
			} else {
				field.parentNode.classList.remove('error')
			}
		})
	})

	form.addEventListener('submit', function (e) {
		e.preventDefault()
		let hasError = isValidated()

		if (hasError) {
			return
		}

		// form submit
		const formData = new FormData(form)

		fetch('http://localhost:81/index.php', {
			method: 'POST',
			body: formData
		})
			.then(function (response) {
				return response.json()
			})
			.then(function (data) {
				// handle the response and UI element here
				if (data.success) {
					form.reset()
					alert('Your message has been sent successfully')
				} else {
					alert('Something went wrong. Please try again later')
				}
			})
			.catch(function (error) {
				alert('Something went wrong. Please try again later')
			})
	})
}


window.addEventListener('DOMContentLoaded', () => {
	contactFormSubmit()
	initVideoPlyr()
	isNewsPage()
})