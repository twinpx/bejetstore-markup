(function($) {
	
	function textMore() {
		var $link = $( ".bj-text-more a" );
		if ( !$link.length ) return;
		
		$link.each( function() {
			var $this = $( this ), $row, $img, lineHeight, $wrapper;
			
			$row = $this.closest( ".row" );
			$img = $row.find( "img" );
			
			if ( !$img.length ) {
				$this.remove();
				return;
			}
			
			$wrapper = $row.find( ".bj-text-more-wrapper" );
			lineHeight = $row.css( "line-height" );
			containerHeight = $row.find( ".bj-text-more-container" ).height();
			
			if ( $img[0].complete ) {
				resize( $row, $img, lineHeight );
			} else {
				$img.load(function() {
					resize( $row, $img, lineHeight );
				});
			}
			
			$this.click( function(e) {
				e.preventDefault();
				$wrapper.height( containerHeight );
				$this.remove();
			});
			
			function resize( $row, $img, lineHeight ) {
				var height, $wrapper, wrapperHeight;
				
				lineHeight = parseInt( lineHeight, 10 );
				height = $img.height();
				$wrapper = $row.find( ".bj-text-more-wrapper" );
				
				if ( $wrapper.height() < height ) {
					$this.remove();
					return;
				}
				
				wrapperHeight = Math.floor( height / lineHeight ) * lineHeight;
				$wrapper.height( wrapperHeight );
			}
			
		});
	}
	
	function scrollToSort() {
		var search = window.location.search,
				$sorting = $( ".bj-sorting" ),
				to;
		
		if ( String( search ).search( "sort=" ) === -1 || !$sorting.length ) {
			return;
		}
		
		to = $sorting.offset().top - 20;
		$.scrollTo( to, 500 );
	}
	
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
		$( ".bj-news-subscribe__s" ).each( subscribeForm );
		
		function subscribeForm() {
			var $subscribe = $( this ),
					$subscribeForm = $subscribe.find( ".bj-news-subscribe-form" ),
					$unsubscribeForm = $subscribe.find( ".bj-news-unsubscribe-form" ),
					$unsubscribeLink = $subscribe.find( ".bj-news-unsubscribe-link" ),
					$alertSuccess = $subscribe.find( ".alert-success" ),
					$alertWarning = $subscribe.find( ".alert-warning" );
			
			$subscribeForm.submit( submitForm );
			$unsubscribeForm.submit( submitUnsubscribeForm );
			$unsubscribeLink.click( clickUnsubscribe );
			
			function clickUnsubscribe(e) {
				e.preventDefault();
				$unsubscribeForm.submit();
				show( $subscribeForm );
				hide( $alertSuccess );
				hide( $alertWarning );
			}
			
			function submitUnsubscribeForm(e) {
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
					data: data
				});
			}
		
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
							if ( $alertWarning.hasClass( "show" )) {
								hide( $alertWarning );
							}
							hide( $form );
							show( $alertSuccess );
							
						} else if ( data.error ) {
							if ( $alertWarning.is( ":visible" )) return;
							show( $alertWarning );
							
						}
					}
				});
				
			}
			
			function hide( $elem ) {
				$elem.removeClass( "show" ).addClass( "hide" );
			}
			
			function show( $elem ) {
				$elem.removeClass( "hide" ).addClass( "show" );
			}
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
		
		scrollToSort();
		
		textMore();
		
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