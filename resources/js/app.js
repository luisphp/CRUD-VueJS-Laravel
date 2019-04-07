var urlUsers = 'https://jsonplaceholder.typicode.com/users';

		new Vue({

			el: '#main',
			data: {
				lists: []
			},
			created: function(){
				this.getUsers();
			},
			methods: {
				getUsers: function(){
					axios.get(urlUsers).then(response =>{

						this.lists = response.data;
					});
				}

			}
			
		});