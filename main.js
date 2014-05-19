$(document).on('ready', function() {

  
	var productTemplate = $('#product-template');
	var templateText = productTemplate.html();
	// console.log(templateText);

	var template = Handlebars.compile(templateText);
		for (var i=0; i<productsData.productsList.length; i++) {
			var outputHtml = template(productsData.productsList[i])
			$('#products').append(outputHtml)
		};

	var wishlistTemplate = $('#wishlist-template');
	var wishlistText = wishlistTemplate.html();
	// console.log(wishlistText);

	var templateTwo = Handlebars.compile(wishlistText);

	$('.add-btn').on('click', function() {
		var gameName = $(this).closest('header').find('span').text();
		var outputHtmlTwo = templateTwo({title: gameName})
		$('#wishlist').append(outputHtmlTwo)
	});

	$(document).on('click', '#remove-btn', function() {
		$(this).closest('li').remove();
	})

});