<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel | VueJS</title>

        <!-- Style Bootstrap-->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    </head>
    <body>

            <div id="main" class="container">

                        <div class="row">

                        <div class="col-sm-4">

                            <h1>VUE js - AJAX  axios</h1>

                            <ul class="list-group">

                                <li v-for="item in lists" class="list-group-item">
                                    @{{item.name}}
                                </li>
                                
                            </ul>

                        </div>

                        <div class="col-sm-8">

                            <h1> JSON </h1>

                            <pre>

                                @{{ $data }}

                            </pre>
                        </div>
                    </div>
            </div>

        <script src="{{ asset('js/app.js') }}"></script>
        
    </body>
</html>
