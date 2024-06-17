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
$type = $_GET["type"];
$week = $_GET["week"];
$current=new DateTime();
$result =array();

        $q = mysql_query ("SELECT * FROM locations, levels_archive,levels_info where locations.id=levels_archive.location_id and levels_archive.week='".$week."' and levels_archive.level=levels_info.level and levels_archive.pollen_type=levels_info.pollen_type and levels_archive.pollen_type=".$type);
        for ($c=0; $c<mysql_num_rows($q); $c++)
        {
            $f = mysql_fetch_array($q);
            $result[] = array("id" => $f[id], "latitude" => $f["latitude"], "longitude" => $f["longitude"], "radius" => $f["Radius"], "pollen_type" => $f["pollen_type"], "level" => $f["level"], "color" =>dechex ( $f["color"] ) );

        }
@mysql_close($link);


/* Output header */
header('Content-type: application/json');

echo json_encode($result);
        ?>
