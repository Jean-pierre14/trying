<?php

$con = mysqli_connect("localhost", "root", "", "node") OR die("Cannont be connected");
$txt = $_POST['txt'];
$query = "SELECT * FROM users WHERE `name` = '%$txt%'";
$result = mysqli_query($con, $query);

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_array($result)){
        print '<p class="alert alert-success">'.$row['name'].'</p>';
    }
}else{
    print "<p class='alert alert-danger'>Result not found</p>";
}