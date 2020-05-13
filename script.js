window.onload = function(){

	const buttons = document.querySelectorAll('.callback_header, .callback_footer, .form__close');
	const modal = document.querySelector('.modal_feedback');
	// const buttons_order = document.querySelectorAll('.cars__order, .form__close_order');
	// const modal_order = document.querySelector('.modal_order');
	function showPopup(btns, popup) {
		for (let button of btns) {
			button.addEventListener('click', function() {		
				popup.classList.toggle('active');
				document.body.classList.toggle('fixed');
			})
		}
	}

	window.onclick = function(ev) {
		if (ev.target == modal) {
			modal.classList.toggle('active');
			document.body.classList.toggle('fixed');
		} else if (ev.target == modal_order) {
			modal_order.classList.toggle('active');
			document.body.classList.toggle('fixed');
		}
	}
	showPopup(buttons, modal);
}