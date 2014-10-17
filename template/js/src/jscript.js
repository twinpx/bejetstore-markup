(function($) {
	function headerSearch() {
		$( ".bj-page-header__search .glyphicon" ).click( function () {
			$( this )
				.closest( ".bj-page-header__search" )
				.addClass( "i-active" )
				.find( "input" )
				.focus();
		});
		$( ".bj-page-header__search__input" ).blur( function () {
			$( this ).val( "" ).closest( ".bj-page-header__search" ).removeClass( "i-active" );
		});
	}
	
	function catalogueDropDown() {
		$( ".bj-page-header__menu-link" ).click( function (e) {
			e.preventDefault();
			e.stopPropagation();
			$( ".bj-page-header__dropdown article" ).slideDown();
		});
		
		$( ".bj-page-header__dropdown article" ).click( function (e) {
			e.stopPropagation();
		});
	
		$( ".bj-page-header__dropdown .up" ).click( function (e) {
			var $dropDown = $( this ).closest( "article" ).slideUp();
			e.preventDefault();
		});
		
		$( document ).click( function () {
			$( ".bj-page-header__dropdown article" ).slideUp();
		});
	}
	
	function userHeaderIcon() {
		var options = {
			html: true,
			trigger: "click",
			placement: "bottom"
		};
		$( ".bj-page-header .bj-logo-space__icon.glyphicon-user" ).popover( options );
	};
	
	function newsForm() {
		$( ".bj-news-subscribe__s form" ).submit( submitForm );
		
		function submitForm(e) {
			var $form = $( this ),
					url = $form.attr( "action" ),
					type = $form.attr( "method" ),
					data = $form.serialize();
			
			e.preventDefault();
			
			if ( !data ) return;
			
			$.ajax({
				url: url,
				type: type,
				dataType: "json",
				data: data,
				success: function ( data ) {
					if ( !data || !data instanceof Object ) return;
					
					if ( data.success ) {
						$form.before( '<div class="alert alert-success" role="alert">' + data.success + '</div>' ).remove();
					} else if ( data.error ) {
						$form.before( '<div class="alert alert-warning" role="alert">' + data.error + '</div>' );
					}
				}
			});
			
		}
	}
	
	function linkToCommentsForm() {
		$( ".i-link-to-comments-form" ).click( function(e) {
			e.preventDefault();
			$.scrollTo( ".blog-comment-form", 500 );
			var block = document.getElementsByClassName( "blog-comment-form" )[0];
			var form = block.getElementsByTagName( "FORM" )[0];
			form.getElementsByTagName( "TEXTAREA" )[0].focus();
		});
	}
	
	$(function() {
		
		$( ".bj-logo-space [title]" ).tooltip();
		
		$( ".bj-sorting [title]" ).tooltip();
		
		headerSearch();
		
		catalogueDropDown();
		
		userHeaderIcon();
		
		newsForm();
		
		linkToCommentsForm();
		
		/*var hammertime = new Hammer( myElement, myOptions );
		hammertime.on('pan', function(ev) {
				console.log(ev);
		});
		
		$('#news-carousel, #banner-carousel').hammer().on( 'swipeleft', function() {
			$( this ).carousel( 'next' );
		});
		
		$('#news-carousel, #banner-carousel').hammer().on( 'swiperight', function() {
			$( this ).carousel( 'prev' );
		});*/
		
	});
}( jQuery ));