<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Arkar Than Naing : Web Developer</title>
    <link rel="shortcut icon" type="image/png" href="./images/fav.png"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <link rel="stylesheet" href="docs/css/sidebar3.css">
    <link rel="stylesheet" href="docs/css/style3.css">
</head>

<body id="home">

    <span id="loader">
        <img src="./docs/images/loader.gif" alt="loader">
    </span>

    <div class="wrapper" id="myDiv">
        <!-- Sidebar  -->
        <?php require "./components/sidebar.php" ?>

        <!-- Page Content  -->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn btn-dark">
                    <i class="fas fa-align-justify"></i>
                    </button>
                </div>
            </nav>

            <?php require "./components/banner.php" ?>
            <?php require "./components/about.php" ?>
            <?php require "./components/education.php" ?>
            <?php require "./components/work.php" ?>
            <?php require "./components/portfolio.php" ?>
            <?php require "./components/contact.php" ?>
            
        </div>
    </div>

    <div id="topBtn" class="go myBtn" dest="home">
        <i class="fa fa-arrow-up"></i>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Sorry !</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
                <p> Contact form is just only frontend design. If you really want to contact me , please send mail to my gmail account -  <a href="mailto:arkarthannaing1@gmail.com" style="color:green"> arkarthannaing1@gmail.com </a> . </p>
                <p> Thanks ! </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    
    <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <script src="docs/js/index.js"></script>
    <script src="docs/js/typing.js"></script>

    <script>

        setTimeout(function () {
          $("#loader").fadeOut(2000);
          $("#myDiv").fadeIn(2000);
        }, 4000);
    
    </script>

</body>

</html>