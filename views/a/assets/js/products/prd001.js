//
// thumbnailsBigImg //
//
	let thumbnails = document.getElementsByClassName('thb')
	let activeImages = document.getElementsByClassName('thb_active')

	for (var i=0; i < thumbnails.length; i++){

		thumbnails[i].addEventListener('mouseover', function(){
			console.log(activeImages)
			
			if (activeImages.length > 0){
				activeImages[0].classList.remove('thb_active')
			}
			

			this.classList.add('thb_active')
			document.getElementById('bigImg').src = this.src
		})
	}


	// 	let buttonRight = document.getElementById('slideRight');
	// 	let buttonLeft = document.getElementById('slideLeft');

	// 	buttonLeft.addEventListener('click', function(){
	// 		document.getElementById('slider').scrollLeft -= 180
	// 	})

	// 	buttonRight.addEventListener('click', function(){
	// 		document.getElementById('slider').scrollLeft += 180
	// 	})
	// console.log(typeof document.getElementById('slider'));
//


//
// CopyBtn //
//

var copyAlert = document.getElementById('alert');
console.log(copyAlert);


function copyPrdText() {
	console.log('hmmmm');
	
	// var copyText = document.getElementById("myInput");
	
	/* Select the text field */
	// copyText.select();
	// copyText.setSelectionRange(0, 99999); /* For mobile devices */
	
		/* Copy the text inside the text field */
	// navigator.clipboard.writeText(copyText.value);
	navigator.clipboard.writeText('SPCX001');
	
	/* Alert the copied text */
	// alert("Đã copy thành công sản phẩm: " + 'SPCX001');
	copyAlert.classList.add('showAlert');
	
	setTimeout(function() {
		copyAlert.classList.add('showAlert--opa');

		setTimeout(function() {
			copyAlert.classList.remove('showAlert');
			
			setTimeout(function() {
				copyAlert.classList.remove('showAlert--opa');
			},1000);
		},1000);
	}, 3000);
}