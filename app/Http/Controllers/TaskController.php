<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::OrderBy('id','DESC')->paginate(4);

        return [
                'paginate' => [
                    'total'         => $tasks->total(),
                    'current_page'  => $tasks->currentPage(),
                    'per_page'      => $tasks->perPage(),
                    'total'         => $tasks->LastPage(),
                    'total'         => $tasks->firstItem(),
                    'total'         => $tasks->lastPage(),
                ],
                'tasks' => $tasks
        ];
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'keep' => 'required'
        ]);

        Task::create($request->all());

        return;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
            $this->validate($request, [
                'keep' => 'required'
            ]);

       Task::findOrFail($id)->update($request->all());

       return;



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);

        $task->delete();
    }
}
