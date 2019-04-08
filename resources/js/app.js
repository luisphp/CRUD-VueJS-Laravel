

		new Vue({

			el: '#crud',
			data: {
				keeps: []
			},
			created: function(){
				this.getKeeps();
			},
			methods: {
				getKeeps: function(){
					var urlKeeps = 'tasks';
					axios.get(urlKeeps).then(response =>{

						this.keeps = response.data;
					});
				},
				deleteKeep: function(keep){
					
					//URl para eliminar el keep por id desde Laravel TaskController
					var url = 'tasks/' + keep.id;

					axios.delete(url).then(response => {

						//console.log(response);

						//Con esta Linea se refresca de forma automatica la lista de items

						this.getKeeps();

						//Aqui usamos la libreria instala en webpack.mix.js y usamos el generador de mensajes
						toastr.success('#'+ keep.id + ' Eliminado Correctamente');
						
					});
				}

			}
			
		});