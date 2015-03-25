<?php namespace CompassHB\Www\Http\Controllers;

use Auth;
use CompassHB\Www\Series;
use CompassHB\Www\Http\Requests\SeriesRequest;

class SeriesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['only' => ['edit', 'update', 'create', 'store', 'destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $series = Series::all();

        return view('series.index', compact('series'))
            ->with('title', 'Sermon Series');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('series.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store(SeriesRequest $request)
    {
        $series = new Series($request->all());

        Auth::user()->series()->save($series);

        return redirect()
            ->route('admin.series')
            ->with('message', 'Success! Your series was saved.');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function show(Series $series)
    {
        return view('series.show', compact('series'))
            ->with('title', $series->title);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     *
     * @return Response
     */
    public function edit(Series $series)
    {
        return view('series.edit', compact('series'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param int $id
     *
     * @return Response
     */
    public function update(Series $series, SeriesRequest $request)
    {
        $series->update($request->all());

        return redirect()
            ->route('admin.series')
            ->with('message', 'Success! Your series was updated.');
    }
}