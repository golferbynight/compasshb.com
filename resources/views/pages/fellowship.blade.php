@extends('layouts.dashboard')

@section('content')
<h1 class="tk-seravek-web">Home Fellowship Groups</h1>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title tk-seravek-web">Application Questions</h3>
  </div>
  <div class="panel-body">
    <p>Before you begin answering these questions, please re-read our text of 1 Thessalonians 3:9-13 and review the points from the other side of this handout.</p>
    <ol>
      <li>Why is it so hard for God’s people to pray today?</li>
      <li>Read Psalm 116:12-13. Spend some time thanking God for who he is and what he has done in your life and in the life of our church in these recent weeks.</li>
      <li>Read 2 Thessalonians 1:3-4. Here we see that Paul’s prayer in our passage was answered. Share some examples of how God has answered your prayers.</li>
      <li>Read Matthew 6:5-8. What is your strategy to make sure you spend time praying to God every day?</li>
      <li>Who is someone specifically you are going to pray for this week?</li>
    </ol>
  </div>
</div>

<div class="row">
  <div class="col-md-12">
    @foreach ($sermons as $sermon)
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title tk-seravek-web">Latest Sermon</h3>
        </div>
        <div class="panel-body">
          <div class="thumbnail">
            <img src="{{ $sermon->othumbnail }}" alt="{{ $sermon->post_title }}"/>
            <div class="caption">
              <h4>{{ $sermon->post_title }}</h4>
              <p><small>{{ date_format($sermon->post_date, 'F n') }}</small><br/>
              {{ $sermon->meta->sermon_text }}</p>
              <p><a href="/{{ date_format($sermon->post_date, 'Y') }}/{{ date_format($sermon->post_date, 'm') }}/{{ $sermon->post_name }}" class="btn btn-primary" role="button">Watch</a></p>
            </div>
          </div>
        </div>
      </div>
    @endforeach
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title tk-seravek-web">Recommended Reading</h3>
  </div>
  <div class="panel-body">
    <p>The Power of Prayer by R. A. Torrey - Pick up a copy in our book nook today!</p>
  </div>
</div>

@endsection

@section('sidebar')
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title tk-seravek-web">Groups</h3>
  </div>
  <div class="panel-body">
    <h4 class="tk-seravek-web">Sunday</h4>
    <ul class="list-unstyled">
      <li>College @ Blakey's</li>
    </ul>
    <h4 class="tk-seravek-web">Tuesday</h4>
    <ul class="list-unstyled">
      <li>Quists @ Quists (Young Married)</li>
      <li>Paynes @ Church</li>
      <li>Kids Min @ Blakey's</li>
    </ul>
    <h4 class="tk-seravek-web">Wednesday</h4>
    <ul class="list-unstyled">
      <li>AWANA for Kids @ Church</li>
      <li>Halvorsen @ Church (Singles)</li>
      <li>Miller @ Church</li>
      <li>Jorden @ Church</li>
      <li>Randolph @ Church</li>
    </ul>
    <h4 class="tk-seravek-web">Thursday</h4>
    <ul class="list-unstyled">
      <li>United for Junior High and High School @ Church</li>
      <li>Shouse @ Church</li>
    </ul>
    <h4 class="tk-seravek-web">Friday</h4>
    <ul class="list-unstyled">
      <li>Davey @ Davey</li>
    </ul>
  </div>
</div>
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title tk-seravek-web">About</h3>
  </div>
  <div class="panel-body">
    <p>These questions are designed for the application of this week's sermon. Take some time to thoughtfully write out the answers. It is also helpful to discuss in a home fellowship group. If you would like more information on a home fellowship group, email info@compassHB.com.</p>
    <p><a href="mailto:info@compasshb.com" class="btn btn-primary"><span class="glyphicon glyphicon-pencil"></span>  Sign Up</a></p>
  </div>
</div>


@endsection