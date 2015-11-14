<!--
Katelynn Alexander
Project
CSCI
-->

<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <meta name="description" content="basic html template">
        <meta name="author" content="Katelynn Alexander">
        
        <link rel="stylesheet" type="text/css" href="css/stylesheet.css">
        <script type="text/javascript" src="NAME.js"></script>
    </head>
    <body>
        <center>
            <header>
                <p>header area</p>
            </header>
            <h1>Header 1</h1>
                <p>This is paragraph text</p>
            <h2>Header 2</h2>
                <p>This is paragraph text</p>
            <h3>Header 3</h3>
                <p>This is paragraph text</p>
            <h4>Header 4</h4>
                <p>This is paragraph text</p>
            <h5>Header 5</h5>
                <p>This is paragraph text</p>
            <h6>Header 6</h6>
                <p>This is paragraph text</p>
            <input type="submit" name="submit" value="Submit">
            <footer>
                <p>footer area</p>
            </footer>
        </center>
        <?php
            ob_start();
            echo "derps";
            if (isset($_POST['submit'])) {
                ob_end_clean();
                header('Location: http://localhost:8888/dapper/confirmation.php');
                exit;
            }
            echo "doin all the things";
            ob_end_flush();
        ?>
    </body>
</html>