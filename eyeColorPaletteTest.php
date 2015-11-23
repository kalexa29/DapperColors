<!--deep-brown eye color palette testing-->

<?php include_once "lib/top.inc.php"; ?>
        <title>Title</title>      
        <link rel="stylesheet" type="text/css" href="css/stylesheet5.css">
    </head>
    <body>
        <center>
            <h1>Eye color palette testing</h1>
                <div class="row">
                    <div id="circle" class="test0">0</div>
                    <div id="circle" class="test1">1</div>
                    <div id="circle" class="test2">2</div>
                    <div id="circle" class="test3">3</div>
                    <div id="circle" class="test4">4</div>
                    <div id="circle" class="test5">5</div>
                    <div id="circle" class="test6">6</div>
                    <div id="circle" class="test7">7</div>
                    <div id="circle" class="test8">8</div>
                    <div id="circle" class="test9">9</div>
                    <div id="circle" class="test10">10</div>
                    <div id="circle" class="test11">11</div>
                    <div id="circle" class="test12">12</div>
                    <div id="circle" class="test13">13</div>
                    <div id="circle" class="test14">14</div>
                    <div id="circle" class="test15">15</div>
                </div>
            <script type="text/javascript">
                //var eyeColorNames = ['Deep-Brown', 'Honey-Brown', 'Hazel', 'Green', 'Deep-Blue', 'Pale-Blue', 'Grey', 'Violet'];
                var eyeColorID = 0;
                console.log("popcolor.length="+popColorPalette(eyeColorID).popcolor.length);
                for(var i = 0; i < popColorPalette(eyeColorID).popcolor.length; i++){
                    var c = 'test'+i;
                    console.log(c);
                    setCircle(c, popColorPalette(eyeColorID).popcolor[i].hsl);
                }
            </script>
        </center>
<?php include_once "lib/bottom.inc.php"; ?>