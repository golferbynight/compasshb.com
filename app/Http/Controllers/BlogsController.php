<?php namespace CompassHB\Www\Http\Controllers;

use Auth;
use SearchIndex;
use CompassHB\Www\Blog;
use CompassHB\Www\Http\Requests\BlogRequest;
use CompassHB\Www\Repositories\Video\VideoRepository;

class BlogsController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
        $this->middleware('auth', ['only' => ['edit', 'update', 'create', 'store', 'destroy']]);
    }

    /**
     * Show all blogs.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $blogs = Blog::latest('published_at')->published()->get();

        return view('dashboard.blogs.index', compact('blogs'))
            ->with('title', 'Blog');
    }

    /**
     * Show a single blog.
     *
     * @param Blog $blog
     *
     * @return \Illuminate\View\View
     */
    public function show(Blog $blog, VideoRepository $video)
    {
        $blog->iframe = '';

        if (!empty($blog->video)) {
            $video->setUrl($blog->video);
            $blog->iframe = $video->getEmbedCode();
        }

        return view('dashboard.blogs.show', compact('blog'))
            ->with('title', $blog->title);
    }

    /**
     * Edit an existing blog.
     *
     * @param Blog $blog
     *
     * @return \Illuminate\View\View
     */
    public function edit(Blog $blog)
    {
        return view('admin.blogs.edit', compact('blog'));
    }

    /**
     * Update a blog.
     *
     * @param Blog        $blog
     * @param BlogRequest $request
     *
     * @return Response
     */
    public function update(Blog $blog, BlogRequest $request)
    {
        $blog->update($request->all());

        SearchIndex::upsertToIndex($blog);

        return redirect()
            ->route('admin.index')
            ->with('message', 'Success! Your blog was updated.');
    }

    /**
     * Show the page to create a new blog.
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        return view('admin.blogs.create');
    }

    /**
     * Store a new blog.
     *
     * @param BlogRequest $request
     *
     * @return Response
     */
    public function store(BlogRequest $request)
    {
        $blog = new Blog($request->all());

        Auth::user()->blogs()->save($blog);

        SearchIndex::upsertToIndex($blog);

        return redirect()
            ->route('admin.index')
            ->with('message', 'Success! Your blog was saved.');
    }
}
