<?php

// require MySQL Connection class
require('database/DBController.php');

// require Product Class
require('database/Product.php');

// DBController object
$db = new DBController();

// Product object (Dependency injection)
$product = new Product($db);
