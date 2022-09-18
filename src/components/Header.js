function Header()
{
    return(
        <div>

<nav class="navbar navbar-inverse navbar-collapse" style={{/*border:"2px solid red",*/textAlign:"center"}}>
  <div class="container-fluid">
    <div class="navbar-header" style={{/*border:"2px solid red",*/textAlign:"center"}}>
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav col-sm-6" style={{border:"2px solid blue"}}>
      <li class="active col-sm-4" style={{border:"2px solid blue"}}><a href="#">Home</a></li>
      <li class="col-sm-4" style={{border:"2px solid blue"}}><a href="#">Page 1</a></li>
      <li class="col-sm-4" style={{border:"2px solid blue"}}><a href="#">Page 2</a></li>
    </ul>
    <form class="navbar-form navbar-left" action="/action_page.php">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search" name="search"/>
        <div class="input-group-btn">
          <button class="btn btn-default" type="submit">
            <i class="glyphicon glyphicon-search"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</nav>

        </div>
    )
}

export default Header