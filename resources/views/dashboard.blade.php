@extends('app')

@section('content')

<div id="crud" class="row">


<div class="col-md-12">

	<h1 class="page-header">CRUD Laravel y VueJS</h1>

</div>

<div class="col-md-7">
	<span class="float-right">
	<a href="#" class="btn btn-primary pull-right" data-toggle="modal" data-target="#create">New Task</a>
	</span>


	<table class="table table-hover">
		  <thead>
		    <tr>
		      <th scope="col">id</th>
		      <th scope="col">Task</th>
		      <th scope="col" colspan="2">&nbsp;</th>
		    </tr>
		  </thead>
		  <tbody>

		    <tr v-for="keep in keeps">
		      <th scope="row" width="10px">@{{keep.id}}</th>

		      		<td>@{{keep.keep}}</td>

			      <td width="20px">
			      	
			      		<div class="btn-group">

			      	<a href="#" class="btn btn-warning btn-sm" v-on.click.prevent="editKeep(keep)">Edit</a>
			      	<a href="#" class="btn btn-danger btn-sm" v-on:click.prevent="deleteKeep(keep)">Delete</a>
					
						</div>
			      </td>
		    </tr>
		  </tbody>
	</table>

	@include('create')
	@include('edit')
		
	</div>

	<div class="col-md-5">
		<pre>
		@{{ $data }}
		</pre>
	</div>



</div>



@endsection