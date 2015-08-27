(function($) {
	$(function() {
	
		$( '.bj-lookbook__col' ).each( function() {
      var $col = $( this );
      var dif = $col.height() - $col.parent().height();
      
      if ( dif > 0 ) {
        $col.append( '<div class="bj-lookbook__after"' ).height( dif );
      }
    });
		
	});
}( jQuery ));