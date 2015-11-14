<html>
    <head>
        <meta name="description" content="Dapper Colors App">
        <meta name="author" content="Katelynn Alexander">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="http://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Lobster+Two' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/stylesheet3.css">
        <link rel="stylesheet" type="text/css" href="css/stylesheet4.css">
        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="js/palette.js"></script>
        <script src="js/HSLBucket.js"></script>
        <title>Dapper Results</title>
    </head>
    <body>
        <div id="container">
            <h1><center>Dapper Results</center></h1>
            <div class="row">
                <div id="results" class="col-xs-12 col-md-8">
                    <img class="skinLayer" src="pics/transBlock.png"/>
                    <img class="eyeLayer" src="pics/transBlock.png"/>
                    <img class="hairLayer" src="pics/transBlock.png"/>
                </div>
                <div class="col-xs-12 col-md-4">
                    <?php
                        session_start();
                        $firstname = $_SESSION['firstname'];
                        $lastname = $_SESSION['lastname'];
                        $email = $_SESSION['email'];
                        $hair = $_SESSION['hair'];
                        $eye = $_SESSION['eye'];
                        $skin = $_SESSION['skin'];
                        
                        echo "<h3>$firstname $lastname</h3>";
                        echo "$email<br>";
                        echo "$hair<br>";
                        echo "$eye<br>";
                        echo "$skin<br>";
                    ?>
                    <input type="button" class="btn btn-lg btn-info pull-right" value="TRY AGAIN" onclick="window.location.href='http://localhost:8888/dapper/form4.php'">
                </div>
            </div>
                <!--Formation: 4 / 4 / 3-->
            <div id="palette">
                <div class="row">
                      <div class="col-xs-12 col-md-3">
                        <div id="circle" class="red"></div>
                    </div>
                      <div class="col-xs-12 col-md-3">
                        <div id="circle" class="orange"></div>
                    </div>
                      <div class="col-xs-12 col-md-3">
                        <div id="circle" class="yellow"></div>
                    </div>
                    <div class="col-xs-12 col-md-3">
                        <div id="circle" class="yellowgreen"></div>
                    </div>
                      
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-3">
                        <div id="circle" class="green"></div>
                    </div>
                    <div class="col-xs-12 col-md-3">
                        <div id="circle" class="greencyan"></div>
                    </div>
                      <div class="col-xs-12 col-md-3">
                        <div id="circle" class="cyanblue"></div>
                    </div>
                    <div class="col-xs-12 col-md-3">
                        <div id="circle" class="blue"></div>
                </div>
                <div class="row">
                    
                    </div>
                      <div class="col-xs-12 col-md-4">
                        <div id="circle" class="bluemagenta"></div>
                    </div>
                      <div class="col-xs-12 col-md-4">
                        <div id="circle" class="magenta"></div>
                    </div>
                      <div class="col-xs-12 col-md-4">
                        <div id="circle" class="magentared"></div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            var hair = "<?php echo $_SESSION['hair']; ?>";
            console.log(hair); //test
            setHair(hair);

            var skin = "<?php echo $_SESSION['skin']; ?>";
            console.log(skin); //test
            setSkin(skin);

            var eye = "<?php echo $_SESSION['eye']; ?>";
            console.log(eye); //test
            setEye(eye);
            
            setCirclePaletteBySkinTone(skin);
        </script>
        
         <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    </body>
</html>