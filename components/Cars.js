const nav = document.querySelectorAll('.nav__item_prices');
const buttons = document.querySelectorAll('.callback_header, .callback_footer, .form__close');
const modal = document.querySelector('.modal_feedback');
let buttons_order = document.querySelectorAll('.cars__order, .form__close_order');
const modal_order = document.querySelector('.modal_order');


class Cars {
    constructor(id, className, img, carBrands, carLength, carVolume, carryingCapacity, price) {
        this.id = id;
        this.className = className;
        this.img = img; 
        this.carBrands = carBrands;
        this.carLength = carLength;
        this.carVolume = carVolume;
        this.carryingCapacity = carryingCapacity;
        this.price = price;
    }

    showBrands() {
         let brands = document.querySelector('.description__list');
        for (let brand of this.carBrands) {
            let li = document.createElement('li');
            li.innerHTML = `${brand}`;
            brands.append(li);
        }
      }
    
    render() {
        let wrapper = document.querySelector('.cars__wrapper');
        wrapper.innerHTML = `
                <div class="block-prices__cars id="${this.id}">
                    <img class="cars__img" src="${this.img}" alt="track 10" />
                    <div class="description__wrapper">
                        <div class="cars__description">
                            <div class="description_left">
                                <div class="description__title">Марки автомобилей</div>
                                <div class="description__text">
                                    <ul class="description__list">
                                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="description_right">
                                <div class="description__title">Длина кузова</div>
                                <div class="description__text">
                                    <p>${this.carLength}</p>
                                </div>
                                <div class="description__title">Объем кузова</div>
                                <div class="description__text">
                                    <p>${this.carVolume}</p>
                                </div>
                                <div class="description__title">Грузоподъемность</div>
                                <div class="description__text">
                                    <p>${this.carryingCapacity}</p>
                                </div>
                                <div class="description__title">Цена за км</div>
                                <div class="description__text">
                                    <p>${this.price}</p>
                                </div>
                            </div>
                        </div>
                        <button class="cars__order" >Оставить заявку</button>
                    </div>
                </div>
             `;
             
    }
}

	if (nav.length > 0) {

		for (let i = 0; i < nav.length; i++) {
			nav[i].addEventListener('click', function() {
				const nav_active = document.querySelector('.nav__item_active');
				nav_active.classList.remove('nav__item_active');
				nav[i].classList.add('nav__item_active');
                let car = new Cars(
                    CATALOG[i].id, 
                    CATALOG[i].className, 
                    CATALOG[i].img, 
                    CATALOG[i].carBrands, 
                    CATALOG[i].carLength, 
                    CATALOG[i].carVolume, 
                    CATALOG[i].carryingCapacity, 
                    CATALOG[i].price
                    );
                car.render();
               
                car.showBrands();
                buttons_order = document.querySelectorAll('.cars__order, .form__close_order');
                showPopup(buttons_order, modal_order);
			})
        }  
    }
   
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

    showPopup(buttons_order, modal_order);