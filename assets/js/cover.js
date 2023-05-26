let message;
if (window.innerWidth >= 1186) {
message=
`<div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="3000">
									<div class="carousel-inner" role="listbox">
										<div class="item active">
										<img src="assets/images/Cover1.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover4.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover5.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover6.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover7.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover8.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover9.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover10.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover11.JPG" alt="">
										</div>
										<div class="item">
										<img src="assets/images/Cover12.JPG" alt="">
										</div>
									</div>

									<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
									<span class="fa fa-angle-left" aria-hidden="true"></span>
									<span class="sr-only">Previous</span>
									</a>
									<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
									<span class="fa fa-angle-right" aria-hidden="true"></span>
									<span class="sr-only">Next</span>
									</a>
							</div>`
}

else{
	pass;
}

document.getElementById("coverphoto").innerHTML = message;
