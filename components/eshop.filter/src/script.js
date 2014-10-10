(function($) {
	$(function() {
		
		$( ".bj-catalogue-filter input:checkbox" ).on( "change", function() {
			var $form = $( this ).closest( "form" ),
					flag = false;
			$form.find( "input:checkbox" ).each( function() {
				if ( this.checked ) {
					flag = true;
				}
			});
			if ( flag ) {
				$form.find( "button[type=reset]" ).css({ opacity: 1 });
			} else {
				$form.find( "button[type=reset]" ).css({ opacity: 0 });
			}
		});
		
		$( ".bj-checkbox input:checkbox" ).on( "change", function() {
			var $this = $( this );
			if ( this.checked ) {
				$this.closest( ".bj-checkbox" ).addClass( "i-checked" );
			} else {
				$this.closest( ".bj-checkbox" ).removeClass( "i-checked" );
			}
		});
		
		$( ".bj-hidden-link" ).click( function (e) {
			e.preventDefault();
			
			$( this ).hide().parent().find( ".bj-hidden__hidden" ).slideDown();
		});
		
		$( ".bj-reset-button" ).click( function(e) {
			var $checked = $( this ).closest( "form" ).find( "input:checked" );
			setTimeout( function() {
				$checked.trigger( "change" );
			}, 0);
		});
		
		!function range() {
			var $range = $( ".bj-catalogue-filter .bj-range" ),
					$input = $range.find( ".bj-range__input" ),
					$value = $range.find( ".bj-range__value" ),
					$slider = $range.find( ".bj-range__slider" ),
					step = +$input.attr( "step" ) || 0,
					min = +$input.attr( "min" ) || 0,
					max = +$input.attr( "max" ) || 500,
					value = +$input.val() || (min + max) / 2;
			
			$slider.slider({
				range: true,
				min: min,
				max: max,
				values: [ min, max ],
				step: step,
				slide: function( event, ui ) {
					$value.text( ui.values[ 0 ] + " — " + ui.values[ 1 ] );
				}
			});
		}();
		
	});
}( jQuery ));