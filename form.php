<html>
    <head>
        <meta name="description" content="Dapper App">
        <meta name="author" content="Katelynn Alexander">
        
        <link href="http://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Dosis" rel="stylesheet" type="text/css">
        <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
        
        <?php include 'submit.php';?>
        
        <title>Feature Form</title>
    </head>
    <body>
        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            <!--Color features form-->
            <div class="form-container">
                <h1>Dapper Colors</h1>
                <p>Directions:</p>
                <p class="error">* required fields</p>
                <fieldset class = "name">
                    First: <input type="text" name="firstname" value="<?php echo $firstname;?>">
                    Last: <input type="text" name="lastname" value="<?php echo $lastname;?>">
                </fieldset>
                E-mail: <input type="text" name="email" value="<?php echo $email;?>">
                *<?php echo $emailErr;?>
                <fieldset class="skinOptions">
                    <p>Skin tone: *<?php echo $skinErr;?></p>
                    <input type="radio" name="skin" value="Dark"
                           <?php if (isset($eye) && $eye=="dark") echo "checked";?>
                           value="dark"><label>Dark</label>
                    <input type="radio" name="skin" value="Tan"
                           <?php if (isset($eye) && $eye=="tan") echo "checked";?>
                           value="tan"><label>Tan</label>
                    <input type="radio" name="skin" value="Medium"
                           <?php if (isset($eye) && $eye=="medium") echo "checked";?>
                           value="medium"><label>Medium</label>
                    <input type="radio" name="skin" value="Light"
                           <?php if (isset($eye) && $eye=="light") echo "checked";?>
                           value="light"><label>Light</label>
                    <input type="radio" name="skin" value="Ivory"
                           <?php if (isset($eye) && $eye=="ivory") echo "checked";?>
                           value="ivory"><label>Ivory</label>
                </fieldset>
                <fieldset class="hairOptions">
                    <p>Hair color: *<?php echo $hairErr;?></p>
                    <input type="radio" name="hair" value="Black"
                       <?php if (isset($hair) && $hair=="black") echo "checked";?>
                       value="black"><label>Black</label>
                    <input type="radio" name="hair" value="Dark-Brown"
                           <?php if (isset($hair) && $hair=="dark-brown") echo "checked";?>
                           value="dark-brown"><label>Dark-Brown</label>
                    <input type="radio" name="hair" value="Light-Brown"
                       <?php if (isset($hair) && $hair=="light-brown") echo "checked";?>
                       value="light-brown"><label>Light-Brown</label>
                    <input type="radio" name="hair" value="Auburn"
                           <?php if (isset($hair) && $hair=="auburn") echo "checked";?>
                           value="auburn"><label>Auburn</label>
                    <input type="radio" name="hair" value="Red"
                       <?php if (isset($hair) && $hair=="red") echo "checked";?>
                       value="red"><label>Red</label>
                    <input type="radio" name="hair" value="Strawberry-Blonde"
                       <?php if (isset($hair) && $hair=="strawberry-blonde") echo "checked";?>
                       value="strawberry-blonde"><label>Strawberry-Blonde</label>
                    <input type="radio" name="hair" value="Dark-Blonde"
                       <?php if (isset($hair) && $hair=="dark-blonde") echo "checked";?>
                       value="dark-blonde"><label>Dark-Blonde</label>
                    <input type="radio" name="hair" value="Light-Blonde"
                       <?php if (isset($hair) && $hair=="light-blonde") echo "checked";?>
                       value="light-blonde"><label>Light-Blonde</label>
                    <input type="radio" name="hair" value="Grey"
                       <?php if (isset($hair) && $hair=="grey") echo "checked";?>
                       value="grey"><label>Grey</label>
                </fieldset>
                <fieldset class="eyeOptions">
                    <p>Eye color: *<?php echo $eyeErr;?></p>
                    <input type="radio" name="eye"value="Deep-Brown"
                           <?php if (isset($eye) && $eye=="deep-brown") echo "checked";?>
                           value="deep-brown"><label>Deep-Brown</label>
                    <input type="radio" name="eye"value="Honey-Brown"
                           <?php if (isset($eye) && $eye=="honey-brown") echo "checked";?>
                           value="honey-brown"><label>Honey-Brown</label>
                    <input type="radio" name="eye"value="Hazel"
                           <?php if (isset($eye) && $eye=="hazel") echo "checked";?>
                           value="hazel"><label>Hazel</label>
                    <input type="radio" name="eye"value="Green"
                           <?php if (isset($eye) && $eye=="green") echo "checked";?>
                           value="green"><label>Green</label>
                    <input type="radio" name="eye"value="Deep-Blue"
                           <?php if (isset($eye) && $eye=="deep-blue") echo "checked";?>
                           value="deep-blue"><label>Deep-Blue</label>
                    <input type="radio" name="eye"value="Pale-Blue"
                           <?php if (isset($eye) && $eye=="pale-blue") echo "checked";?>
                           value="pale-blue"><label>Pale-Blue</label>
                    <input type="radio" name="eye"value="Grey"
                           <?php if (isset($eye) && $eye=="grey") echo "checked";?>
                           value="grey"><label>Grey</label>
                    <input type="radio" name="eye"value="Violet"
                           <?php if (isset($eye) && $eye=="violet") echo "checked";?>
                           value="violet"><label>Violet</label>
                </fieldset>
                <input type="submit" class="btn btn-lg btn-info" id="sub" name="submit" value="Submit">
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
    </body>
</html>