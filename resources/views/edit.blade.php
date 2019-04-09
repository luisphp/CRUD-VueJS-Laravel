<form method="POST" v-on:submit.prevent="updateKeep(fillKeep.id)"> 

<div class="modal fade" id="edit">

	<div class="modal-dialog">

		<div class="modal-content">

			<div class="modal-header">

				<h4>Edit Task</h4>

				<button type="button" class="close" data-dismiss="modal">
					
					<span class="float-right">&times;</span>

				</button>


			</div>

			<div class="modal-body">

				<label for="keep"> Update Task</label>

					<input type="text"  name="keep" class="form-control" v-model="fillKeep.keep">
					
					<span v-for="error in errors" class="text-danger">@{{error}}</span>

				

			</div>

			<div class="modal-footer">

				<input type="submit" class="btn btn-primary" value="Update">

			</div>


		</div>


	</div>
	


</div>

</form>