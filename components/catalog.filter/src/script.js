(function($) {
	$(function() {
		
		$( ".bj-checkbox input:checkbox" ).on( "change", function() {
			var $this = $( this );
			if ( this.checked ) {
				$this.closest( ".bj-checkbox" ).addClass( "i-checked" );
			} else {
				$this.closest( ".bj-checkbox" ).removeClass( "i-checked" );
			}
		});
		
		$( ".bj-catalogue-filter input:checkbox" )
		.on( "change", function() {
			var $form = $( this ).closest( "form" ),
					flag = false;
			
			$form.find( "input:checkbox" ).each( function() {
				if ( this.checked ) {
					console.log(this.checked);
					flag = true;
				}
			});
		})
		.each( function() {
			if ( this.checked ) {
				$( this ).trigger( "change" );
			}
		});
		
		$( ".bj-hidden-link" ).click( function (e) {
			e.preventDefault();
			
			$( this ).hide().parent().find( ".bj-hidden__hidden" ).slideDown();
		});
		
		!function range() {
			var $range = $( ".bj-catalogue-filter .bj-range" ),
					$inputMin = $range.find( ".bj-range__input-min" ),
					$inputMax = $range.find( ".bj-range__input-max" ),
					$value = $range.find( ".bj-range__value" ),
					$slider = $range.find( ".bj-range__slider" ),
					step = +$inputMin.attr( "step" ) || +$inputMax.attr( "step" ) || 0,
					min = +$inputMin.attr( "min" ) || 100,
					max = +$inputMax.attr( "max" ) || 3000;
			
			$slider.slider({
				range: true,
				min: min,
				max: max,
				values: [ $inputMin.val(), $inputMax.val() ],
				step: step,
				slide: function( event, ui ) {
					$value.text( ui.values[ 0 ] + " \u2014 " + ui.values[ 1 ] );
					$inputMin.val( ui.values[ 0 ] );
					$inputMax.val( ui.values[ 1 ] );
				}
			});
		}();
		
	});
}( jQuery ));