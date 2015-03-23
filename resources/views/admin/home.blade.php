@extends('layouts.dashboard')

@section('content')

@if (Session::has('message'))
    <div class="alert alert-info">{{ Session::get('message') }}</div>
@endif

<h1 class="tk-seravek-web">Admin</h1>
<p>Admin page for posting and scheduling site content.</p>

<br/><br/><br/>

<p>Use the links on the right to navigate.</p>

@endsection

@section('sidebar')

  @include('admin.sidebar')

@endsection
