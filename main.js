<script type="text/javascript"> 
			
	jQuery(document).ready(function(){ 
		jQuery("#gallery").unitegallery(); 
	}); 
		
		</script>

require(['./lightgallery.js'], function() {
    require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
        lightGallery(document.getElementById('lightgallery'));
    });
});
<script>
    lightGallery(document.getElementById('lightgallery'));
</script>
