

		new Vue({

			el: '#crud',
			data: {
				keeps: [],
				newKeep: '',
				errors: [],
				fillKeep: {'id' : '', 'keep': ''},
				pagination: {

					'paginate' => [
                    'total'         => $tasks->total(),
                    'current_page'  => $tasks->currentPage(),
                    'per_page'      => $tasks->perPage(),
                    'total'         => $tasks->LastPage(),
                    'total'         => $tasks->firstItem(),
                    'total'         => $tasks->lastPage(),
                ],
                'tasks' => $tasks

				}
			},
			created: function(){
				this.getKeeps();
			},
			methods: {
				getKeeps: function(){
					var urlKeeps = 'tasks';
					axios.get(urlKeeps).then(response =>{

						this.keeps = response.data.tasks.data;
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
				},
				createKeep: function(){

					var url = 'tasks';

					axios.post(url, {

						keep: this.newKeep

					}).then(response =>{

						this.getKeeps();

						this.newKeep = '';

						this.errors = [];

						$('#create').modal('hide');

						toastr.success('New Task Created!');

					}).catch(error => {

						this.errors = error.response.data

					});
				},
				editKeep: function(keep){

					this.fillKeep.id 	= keep.id;
					this.fillKeep.keep  = keep.keep;

					$('#edit').modal('show');

				},
				updateKeep: function(id){
					var url = 'tasks/'+ id;

					axios.put(url, this.fillKeep).then(response =>{

						this.getKeeps();

						this.fillKeep = {'id':'', 'keep':''};
						this.errors = [];

						$('#edit').modal('hide');
						toastr.success('Task Updated!');

					}).catch(error =>{
						this.errors = error.response.data
					});
				}

			}
			
		});