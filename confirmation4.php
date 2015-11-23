<?php include_once "lib/top.inc.php"; ?>
<link rel="stylesheet" type="text/css" href="css/stylesheet4.css">
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
                        
                        echo "<h2 align='center'><br><br>$firstname $lastname<br><br></h2>";
//                        echo "$email<br>";
//                        echo "$hair<br>";
//                        echo "$eye<br>";
//                        echo "$skin<br>";
                    ?>
                    
                    <div class="pop"></div>
                    <h2 align="center">Pop color</h2>
                </div>
            </div>
                <!--Formation: 4 / 4 / 3-->
            <div id="palette">
                <div class="row">
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="red"></div>
<!--                        <h3 align="center">Red</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="orange"></div>
<!--                        <h3 align="center">Orange</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="yellow"></div>
<!--                        <h3 align="center">Yellow</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="yellowgreen"></div>
<!--                        <h3 align="center">Yellow Green</h3>-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="green"></div>
<!--                        <h3 align="center">Green</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="greencyan"></div>
<!--                        <h3 align="center">Green Cyan</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="cyanblue"></div>
<!--                        <h3 align="center">Cyan Blue</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="blue"></div>
<!--                        <h3 align="center">Blue</h3>-->
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="bluemagenta"></div>
<!--                        <h3 align="center">Blue Magenta</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="magenta"></div>
<!--                        <h3 align="center">Magenta</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <div id="circle" class="magentared"></div>
<!--                        <h3 align="center">Magenta Red</h3>-->
                    </div>
                    <div class="col-xs-12 col-sm-3 col-md-3">
                        <input type="tryagain" class="btn btn-lg btn-info" value="Try Again" onclick="window.location.href='http://localhost:8888/dapper/form4.php'">
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
            pickPopColor(eye);
        </script>

<?php include_once "lib/bottom.inc.php"; ?>