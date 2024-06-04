require(['./lightgallery.js'], function() {
    require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
    lightGallery(document.getElementById(‘’lightgallery), {
     plugins: [lgZoom, lgAutoplay, lgComment, lgFullscreen , lgHash, lgPager, lgRotate, lgShare, lgThumbnail, lgVideo] 
});
<script>
    lightGallery(document.getElementById('lightgallery'));
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js"></script>
