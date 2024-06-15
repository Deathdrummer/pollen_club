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
$q = mysql_query ("SELECT distinct pollen_types.id, pollen_types.desc FROM  pollen_types, levels_archive where pollen_types.id=levels_archive.pollen_type  order by id");
for ($c=0; $c<mysql_num_rows($q); $c++)
{
    $f = mysql_fetch_array($q);
    $result[] = array("id" => $f[id], "desc" => $f["desc"] );

}
@mysql_close($link);


/* Output header */
header('Content-type: application/json');

echo json_encode($result);
?>
