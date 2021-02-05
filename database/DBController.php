<?php

class DBController
{
    // Database Connection Properties
    protected $host = "localhost";
    protected $user = "root";
    protected $password = "12345";
    protected $database = "shopee";

    // connection property
    public $con = null;

    // call constructor
    public function __construct()
    {
        $this->con = mysqli_connect($this->host, $this->user, $this->password, $this->database);
        if(mysqli_connect_errno())
            echo 'Fail to connect: '.mysqli_connect_error();
    }

    // destructor
    public function __destruct()
    {
        $this->closeConnection();
    }

    // for closing connection
    protected function closeConnection() {
        if($this->con != null){
            $this->con->close();
            $this->con = null;
        }
    }


}