<?php include_once "submit2.php"; ?>
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
        <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        <title>Feature Form</title>
    </head>
    <body>
        <form method="post" class="container-fluid" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <!--Color features form-->
            <h1 align="center">Dapper Colors</h1>
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
                <div class="col-xs-12 col-md-20">
                    <label>
                        <img class="darkSkinS" src="pics/transBlock.png">
                        <input type="radio" name="skin" value="Dark" <?php if($skin=='Dark') echo 'checked="checked"';?>>
                        Dark
                    </label>
                </div>
                <div class="col-xs-12 col-md-20">
                    <label>
                        <img class="tanSkinS" src="pics/transBlock.png">
                        <input type="radio" name="skin" value="Tan" <?php if ($skin=="Tan") echo 'checked="checked"';?>>
                        Tan
                    </label>
                </div>
                <div class="col-xs-12 col-md-20">
                    <label>
                        <img class="mediumSkinS" src="pics/transBlock.png">
                        <input type="radio" name="skin" value="Medium" <?php if ($skin=="Medium") echo 'checked="checked"';?>>
                        Medium
                    </label>
                </div>
                <div class="col-xs-12 col-md-20">
                    <label>
                        <img class="lightSkinS" src="pics/transBlock.png">
                        <input type="radio" name="skin" value="Light" <?php if ($skin=="Light") echo 'checked="checked"';?>>
                        Light
                    </label>
                </div>
                <div class="col-xs-12 col-md-20">
                    <label>
                        <img class="ivorySkinS" src="pics/transBlock.png">
                        <input type="radio" name="skin" value="Ivory"<?php if ($skin=="Ivory") echo 'checked="checked"';?>>
                        Ivory
                    </label>
                </div>
            </div>
            <h2>Hair color: <font color="red" size="3">*</font></h2><?php echo $hairErr;?>
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="blackHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Black"<?php if ($hair=="Black") echo 'checked="checked"';?>>
                        Black
                    </label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="auburnHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Auburn"<?php if ($hair=="Auburn") echo 'checked="checked"';?>>
                        Auburn
                    </label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="dark-blondeHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Dark-Blonde"<?php if ($hair=="Dark-Blonde") echo 'checked="checked"';?>>
                        Dark-Blonde
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="dark-brownHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Dark-Brown"<?php if ($hair=="Dark-Brown") echo 'checked="checked"';?>>
                        Dark-Brown
                    </label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="redHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Red"<?php if ($hair=="Red") echo 'checked="checked"';?>>
                        Red
                    </label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="light-blondeHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Light-Blonde"<?php if ($hair=="Light-Blonde") echo 'checked="checked"';?>>
                        Light-Blonde
                    </label>
                </div>
            </div>         
            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="light-brownHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Light-Brown"<?php if ($hair=="Light-Brown") echo 'checked="checked"';?>>
                        Light-Brown
                    </label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="strawberry-blondeHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Strawberry-Blonde"<?php if ($hair=="Stawberry-Blonde") echo 'checked="checked"';?>>
                        Strawberry-Blonde
                    </label>
                </div>
                <div class="col-xs-12 col-md-4">
                    <label>
                        <img class="greyHairS" src="pics/transBlock.png">
                        <input type="radio" name="hair" value="Grey"<?php if ($hair=="Grey") echo 'checked="checked"';?>>
                        Grey
                    </label>
                </div>
            </div>
            <h2>Eye color: <font color="red" size="3">*</font></h2><?php echo $eyeErr;?>
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <label>
                        <img class="deep-brownEyeS" src="pics/transBlock.png">
                        <input type="radio" name="eye"value="Deep-Brown"<?php if ($eye=="Deep-Brown") echo 'checked="checked"';?>>
                        Deep-Brown
                    </label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <label>
                        <img class="hazelEyeS" src="pics/transBlock.png">
                        <input type="radio" name="eye"value="Hazel"<?php if ($eye=="Hazel") echo 'checked="checked"';?>>
                        Hazel
                    </label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <label>
                        <img class="pale-blueEyeS" src="pics/transBlock.png">
                        <input type="radio" name="eye"value="Pale-Blue"<?php if ($eye=="Pale-Blue") echo 'checked="checked"';?>>
                        Pale-Blue
                    </label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <label>
                        <img class="greyEyeS" src="pics/transBlock.png">
                        <input type="radio" name="eye"value="Grey"<?php if ($eye=="Grey") echo 'checked="checked"';?>>
                        Grey
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-md-3">
                    <label>
                        <img class="honey-brownEyeS" src="pics/transBlock.png">
                        <input type="radio" name="eye" value="Honey-Brown"<?php if ($eye=="Honey-Brown") echo 'checked="checked"';?>>
                        Honey-Brown
                    </label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <label>
                        <img class="greenEyeS" src="pics/transBlock.png">
                        <input type="radio" name="eye"value="Green"<?php if ($eye=="Green") echo 'checked="checked"';?>>
                        Green
                    </label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <label>
                        <img class="deep-blueEyeS" src="pics/transBlock.png">
                        <input type="radio" name="eye"value="Deep-Blue"<?php if ($eye=="Deep-Blue") echo 'checked="checked"';?>>
                        Deep-Blue
                    </label>
                </div>
                <div class="col-xs-12 col-md-3">
                    <label>
                        <img class="violetEyeS" src="pics/transBlock.png">
                        <input type="radio" name="eye"value="Violet"<?php if ($eye=="Violet") echo 'checked="checked"';?>>
                        Violet
                    </label>
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
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    </body>
</html>