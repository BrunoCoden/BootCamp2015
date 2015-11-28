$(document).on("ready",function(){
	$(".textoOculto").show("300", function(){
		$(".alias").focus();
	});
	$("#respuesta").on("click",function() {
		var nombre = $("#nombre");
		$.ajax("http://bootcamp.aws.af.cm/welcome/Bruno")
			.done(function(data){
				$(".welcome").html(data.response);

			})
			.fail(function(data){
				$(".welcome").css({
					"background-color":"red", 
					"height":"40px"
				});
			});
	});
		$("#botonDeBusqueda").on("click",function(){
			ejecutar_busqueda();
		});
		function ejecutar_busqueda (){
			var busqueda = prompt("Please search your artist");
			$.ajax("https://api.spotify.com/v1/search?q="+busqueda+"&type=album")
			.done(function(data){
			
			$.each(data.albums.items, function(ix, value) {
				$("#article").append("<img src="+value.images[0].url+" />");
				$("#article").append("Album: "+value.name+"</br>");
				$("#article").append("Type: "+value.type+"</br>");
				$.ajax({
					url:value.href,
					async:false
				}).done(function(valor){
					$("#article").append("Release date: "+valor.release_date+"</br>");
				})
				$("#article").append("<a href="+value.external_urls.spotify+">Ir al Album</a></br>");
			})	
			})
			.fail(function(data){
				alert("error");
			})	
		}
	$("#buttonReloadIndex").on("click",function(){
		location.reload();
	})

})
