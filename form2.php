<html>
    <head>
        <meta name="description" content="Dapper Colors App">
        <meta name="author" content="Katelynn Alexander">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
<!--        <link href="http://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type="text/css">-->
        <link href="http://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Lobster+Two' rel='stylesheet' type='text/css'>
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/stylesheet2.css">
        
        <?php include 'submit.php';?>
        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        
        <title>Feature Form</title>
    </head>
    <body>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <!--Color features form-->
            <h1>Dapper Colors</h1>
            <h2>Directions:</h2>
            <p class="error">* required fields</p>
            <div class="row">
                <div class="col-xs-12 col-md-4 col-lg-6">
                    <label class="first">First: </label>
                    <input type="text" name="firstname" value="<?php echo $firstname;?>">
                </div>
                <div class="col-xs-12 col-md-4 col-lg-6">
                    <label class="last">Last: </label>
                    <input type="text" name="lastname" value="<?php echo $lastname;?>">
                </div>
            </div>
            <label class="email">E-mail: </label>
            <input type="text" name="email" value="<?php echo $email;?>"><font color="red" size="3">*</font><?php echo $emailErr;?>

            <h2>Skin tone: <font color="red" size="3">*</font></h2><?php echo $skinErr;?>
            <div class="row">
                <div class="col-xs-12 col-md-2">
                    <input type="radio" name="skin" value="Dark" 
                           <?php if (isset($eye) && $eye=="dark") echo "checked";?> 
                           value="dark"><label>Dark</label>
                </div>
                <div class="col-xs-12 col-md-2">
                    <input type="radio" name="skin" value="Tan"
                           <?php if (isset($eye) && $eye=="tan") echo "checked";?>
                           value="tan"><label>Tan</label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="skin" value="Medium"
                           <?php if (isset($eye) && $eye=="medium") echo "checked";?>
                           value="medium"><label>Medium</label>
                </div>
                <div class="col-xs-12 col-md-2">
                    <input type="radio" name="skin" value="Light"
                           <?php if (isset($eye) && $eye=="light") echo "checked";?>
                           value="light"><label>Light</label>
                </div>
                <div class="col-xs-12 col-md-2">
                    <input type="radio" name="skin" value="Ivory"
                           <?php if (isset($eye) && $eye=="ivory") echo "checked";?>
                           value="ivory"><label>Ivory</label>
                </div>
            </div>
            <h2>Hair color: <font color="red" size="3">*</font></h2><?php echo $hairErr;?>
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <input type="radio" name="hair" value="Black"
                       <?php if (isset($hair) && $hair=="black") echo "checked";?>
                       value="black"><label>Black</label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <input type="radio" name="hair" value="Auburn"
                           <?php if (isset($hair) && $hair=="auburn") echo "checked";?>
                           value="auburn"><label>Auburn</label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <input type="radio" name="hair" value="Dark-Blonde"
                       <?php if (isset($hair) && $hair=="dark-blonde") echo "checked";?>
                       value="dark-blonde"><label>Dark-Blonde</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <input type="radio" name="hair" value="Dark-Brown"
                           <?php if (isset($hair) && $hair=="dark-brown") echo "checked";?>
                           value="dark-brown"><label>Dark-Brown</label>
                </div>
                <div class="col-xs-12 col-md-4">    
                    <input type="radio" name="hair" value="Red"
                       <?php if (isset($hair) && $hair=="red") echo "checked";?>
                       value="red"><label>Red</label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <input type="radio" name="hair" value="Light-Blonde"
                       <?php if (isset($hair) && $hair=="light-blonde") echo "checked";?>
                       value="light-blonde"><label>Light-Blonde</label>
                </div>
            </div>         
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <input type="radio" name="hair" value="Light-Brown"
                       <?php if (isset($hair) && $hair=="light-brown") echo "checked";?>
                       value="light-brown"><label>Light-Brown</label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <input type="radio" name="hair" value="Strawberry-Blonde"
                       <?php if (isset($hair) && $hair=="strawberry-blonde") echo "checked";?>
                       value="strawberry-blonde"><label>Strawberry-Blonde</label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <input type="radio" name="hair" value="Grey"
                       <?php if (isset($hair) && $hair=="grey") echo "checked";?>
                       value="grey"><label>Grey</label>
                </div>
            </div>
            <h2>Eye color: <font color="red" size="3">*</font></h2><?php echo $eyeErr;?>
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="eye"value="Deep-Brown"
                           <?php if (isset($eye) && $eye=="deep-brown") echo "checked";?>
                           value="deep-brown"><label>Deep-Brown</label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="eye"value="Hazel"
                           <?php if (isset($eye) && $eye=="hazel") echo "checked";?>
                           value="hazel"><label>Hazel</label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="eye"value="Pale-Blue"
                           <?php if (isset($eye) && $eye=="pale-blue") echo "checked";?>
                           value="pale-blue"><label>Pale-Blue</label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="eye"value="Grey"
                           <?php if (isset($eye) && $eye=="grey") echo "checked";?>
                           value="grey"><label>Grey</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="eye"value="Honey-Brown"
                           <?php if (isset($eye) && $eye=="honey-brown") echo "checked";?>
                           value="honey-brown"><label>Honey-Brown</label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="eye"value="Green"
                           <?php if (isset($eye) && $eye=="green") echo "checked";?>
                           value="green"><label>Green</label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="eye"value="Deep-Blue"
                           <?php if (isset($eye) && $eye=="deep-blue") echo "checked";?>
                           value="deep-blue"><label>Deep-Blue</label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <input type="radio" name="eye"value="Violet"
                           <?php if (isset($eye) && $eye=="violet") echo "checked";?>
                           value="violet"><label>Violet</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <input type="submit" class="btn btn-lg btn-info pull-right" id="sub" name="submit" value="Submit">
                </div>
                <div class="col-xs-12">
                    <?php echo $success;?>
                </div>
            </div>
        </form>
        <!--Input testing section-->
        <?php
            echo "<h2>Your Input:</h2>";
            echo $firstname;
            echo "<br>";
            echo $lastname;
            echo "<br>";
            echo $email;
            echo "<br>";
            echo $hair;
            echo "<br>";
            echo $eye;
            echo "<br>";
            echo $skin;
        ?>
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    </body>
</html>