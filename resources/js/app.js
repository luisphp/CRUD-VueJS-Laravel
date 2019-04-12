

		new Vue({

			el: '#crud',
			data: {
				keeps: [],
				newKeep: '',
				errors: [],
				fillKeep: {'id' : '', 'keep': ''},
				pagination: {

					'paginate' : {
                    'total'         : 0,
                    'current_page'  : 0,
                    'per_page'      : 0,
                    'last_page'     : 0,
                    'from'          : 0,
                    'to'            : 0,
                	}
                

				}
			},
			created: function(){
				this.getKeeps();
			},
			methods: {
				getKeeps: function(page){
					var urlKeeps = 'tasks?page='+page;
					axios.get(urlKeeps).then(response =>{

						this.keeps = response.data.tasks.data,
						this.pagination = response.data.pagination;
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
				},
				changePage: function(page){

							this.pagination.current_page = page;
							this.getKeeps(page);

					}

			},
			computed: {

				isActive: function(){

					return this.pagination.current_page;

					},
				pagesNumber: function(){

					if(!this.pagination.to){

						return [];

					}
						var from = this.pagination.current_page - 2; //TODO  offset
					
						if(from < 1){

							from = 1;

						}

						var to = from +(2 * 2); //TODO 

						if(to >= this.pagination.last_page){

							to = this.pagination.last_page;

						}

						var pagesArray = [];

						while( from <= to){
							
							pagesArray.push(from);
							from++;

						}
						
						return pagesArray;

					}
					
 				//End computed.
				}
			
		});