

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
					
					var url = 'tasks/' + keep.id;

					axios.delete(url).then(response => {

						this.getKeeps();
						
					});
				}

			}
			
		});