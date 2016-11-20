<!doctype html>
<html lang="de" ng-app="tp">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Tutorenplattform - HTL Wien 3 Rennweg</title>
        @include('stylesheets')
    </head>
    <body>
        <div id="wrapper" ui-view></div>
        @include('javascripts')
    </body>
</html>