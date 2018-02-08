
document.addEventListener("DOMContentLoaded", function(event) {
    main();
 });

function main(){
	// new Vue({
	//   el: '#app',
	//   data: {
	//     message: 'Hello Vue!'
	//   }
	// })
	// Vue.component('tab-page', {
	//   props: ['title', 'content'],
	//   template: '<div>cool</div>'
	// })

	// Vue.component('todo-item', {
	//   template: '<li>This is a todo</li>'
	// })




	$(function(){
		var validHashes = ['#home','#about','@testimonials','#pricing','#contact']
	  if (!validHashes.includes(window.location.hash)){
	  	history.replaceState(undefined, undefined, "#home")
	  } 
	  window.onhashchange = function(){
			$('ul.custom-nav-tabs a[href="' + location.hash + '"]').tab('show');
		}

	  var hash = window.location.hash;
	  console.log($('ul.custom-nav-tabs a[href="' + hash + '"]'))

	  hash && $('ul.custom-nav-tabs a[href="' + hash + '"]').tab('show');
	  var toggle = $('.navbar-toggler');
	  $('.custom-nav-tabs a').click(function (e) {
	    $(this).tab('show');
	    // var scrollmem = $('body').scrollTop() || $('html').scrollTop();
	    window.location.hash = this.hash;
	    // $('html,body').scrollTop(scrollmem);
	  });
	});
}

