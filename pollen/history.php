<?php
$host = "localhost";
$user = "u0491441_test";
$password = "sH1mM4u";
$db = "u0491441_pollen_test";


$link = mysql_connect($host, $user, $password);
if (!link)
{
    echo "<h2>MySQL Error!</h2>";
    exit;
}
mysql_set_charset('utf8',$link);
mysql_select_db($db);

$result =array();
$type = $_GET["type"];
$fourDays = date("Y-m-d", strtotime("-4 day"));
$today = date("Y-m-d");
$q = mysql_query ("SELECT * FROM  levels_forecast where date<='".$today."' and date>='".$fourDays."' and location_id=1 and pollen_type=".$type);
for ($c=0; $c<mysql_num_rows($q); $c++)
{
    $f = mysql_fetch_array($q);
    $result[] = array("id" => $f[id], "date" => $f["date"],  "location_id" => $f["location_id"], "pollen_type" => $f["pollen_type"], "level" => $f["level"] );

}
@mysql_close($link);


/* Output header */
header('Content-type: application/json');

echo json_encode($result);
?>
