<?

$method = $_GET['method'] ?? false;
$params = $_GET['params'] ?? [];

if (!$method) {
    echo json_encode(['error' => 'Method not found!']);
    exit;
}

$pollen = new Pollen();

echo $pollen->{$method}($params);

class Pollen
{

    private $host = "localhost";
    private $user = "u0491441_webserv";
    private $password = "4M2n1G3i";
    private $db = "u0491441_pollen";
    private $link;

    /**
     *
     * @param
     * @return
     */
    public function __construct()
    {
        $this->link = $this->mysqlConnect();
    }

    /**
     *
     * @param
     * @return
     */
    public function index($params = null)
    {
        $fromd = $params["fromd"];
        $fromt = $params["fromt"];
        $type = $params["type"];

        if (!$fromd || !$fromt || !$type) {
            return $this->buildError(1);
        }

        $date = new DateTime();
        $date->sub(new DateInterval('P4D'));

        $result = [];
        $q = mysqli_query($this->link, "SELECT * FROM pins WHERE pollen_type='" . $type . "' AND ((date='" . $fromd . "' AND time>='" . $fromt . "') OR date>'" . $fromd . "')");

        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = [
                "id" => $f["id"],
                "date" => $f["date"],
                "time" => $f["time"],
                "latitude" => $f["latitude"],
                "longitude" => $f["longitude"],
                "value" => $f["value"],
                "pollen_type" => $f["pollen_type"],
            ];
        }

        @mysqli_close($this->link);

        return $this->output($result);
    }

    /**
     *
     * @param
     * @return
     */
    public function pollen_type($params = null)
    {
        $result = [];

        $q = mysqli_query($this->link, "SELECT distinct pollen_types.id, pollen_types.desc FROM  pollen_types, levels_archive where pollen_types.id=levels_archive.pollen_type  order by id");

        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = [
                "id" => $f['id'],
                "desc" => $f["desc"],
            ];
        }

        @mysqli_close($this->link);

        return $this->output($result);
    }

    // donate.php (этого пока нет и данные будут браться с админки)
    /**
     *
     * @param
     * @return
     */
    public function donate($params = null)
    {

        //return $this->output($result);
    }

    // risk.php
    /**
     *
     * @param
     * @return
     */
    public function export_pins($params = null)
    {

        $date = new DateTime();
        $date->sub(new DateInterval('P2D'));
        $q = mysqli_query($link, "SELECT * FROM fenology where date > '" . $date->format('Y-m-d') . "' ");
        $result = "LIST = data\n";

        while ($f = mysqli_fetch_array($q)) {
            $d = date_create_from_format('Y-m-d H:i:s', $f["date"]);
            $result .= "data = " . $f["user_id"] . ": " . date_format($d, 'Y m d') . "; lat 0 " . $f["latitude"] . "; lon 0 " . $f["longitude"] . "; ovs 0 " . $f["value"] . "; eye 0 0; nos 0 0; lun 0 0; med 0 0;\n";
        }

        $result .= "END_LIST = data\n";
        mysqli_close($link);

// $file = 'export_pins.txt';
// $handle = fopen($file, 'w') or die('Cannot open file: ' . $file);
// fwrite($handle, $result);

// echo "Complete";

    }

    // export_pins.php
    /**
     *
     * @param
     * @return
     */
    public function risk($params = null)
    {
        $result = [];

        $type = $params["type"] ?? null;
        $today = date("Y-m-d");

        $q = mysqli_query($this->link, "SELECT * FROM  levels_forecast where date='" . $today . "' and location_id=1 order by id desc");
        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = ["id" => $f["id"], "date" => $f["date"], "location_id" => $f["location_id"], "pollen_type" => $f["pollen_type"], "level" => $f["level"]];

        }

        @mysqli_close($this->link);

        return $this->output($result);
    }

    // .php
    /**
     *
     * @param
     * @return
     */
    public function history($params = null)
    {
        $result = [];

        $type = $params["type"] ?? 1;

        $fourDays = date("Y-m-d", strtotime("-4 day"));
        $today = date("Y-m-d");

        $q = mysqli_query($this->link, "SELECT * FROM  levels_forecast where date<='" . $today . "' and date>='" . $fourDays . "' and location_id=1 and pollen_type=" . $type);
        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = ["id" => $f["id"], "date" => $f["date"], "location_id" => $f["location_id"], "pollen_type" => $f["pollen_type"], "level" => $f["level"]];

        }

        @mysqli_close($this->link);

        return $this->output($result);
    }

    // .php
    /**
     *
     * @param
     * @return
     */
    public function fonology($params = null)
    {
        $date = new DateTime();
        $date->sub(new DateInterval('P2D'));

        $result = [];

        $q = mysqli_query($this->link, "SELECT * FROM fenology where date>'" . $date->format('Y-m-d') . "' ");
        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = array("id" => $f["id"], "latitude" => $f["latitude"], "longitude" => $f["longitude"], "state" => $f["state"], "comment" => $f["comment"]);

        }
        @mysqli_close($this->link);

        return $this->output($result);
    }

    // .php
    /**
     *
     * @param
     * @return
     */
    public function radius($params = null)
    {
        $result = [];

        $current = new DateTime();

        $q = mysqli_query($this->link, "SELECT * FROM locations, levels_forecast,levels_info where locations.id=levels_forecast.location_id and levels_forecast.date='" . $current->format('Y-m-d') . "' and levels_forecast.level=levels_info.level and levels_forecast.pollen_type=levels_info.pollen_type");
        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = array("id" => $f["id"], "latitude" => $f["latitude"], "longitude" => $f["longitude"], "radius" => $f["Radius"], "pollen_type" => $f["pollen_type"], "level" => $f["level"], "color" => dechex($f["color"]));

        }
        @mysqli_close($this->link);

        return $this->output($result);
    }

    // .php
    /**
     *
     * @param
     * @return
     */
    public function banner($params = null)
    {
        $result = [];

        $q = mysqli_query($this->link, "SELECT * FROM banners order by id desc LIMIT 10 ");
        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = array("expert" => $f["experts_id"], "date" => $f["date"], "comment" => $f["comment"], "expert_name" => $f["expert_name"], "experts_site" => $f["experts_site"]);

        }
        @mysqli_close($this->link);

        return $this->output($result);
    }

    // .php
    /**
     *
     * @param
     * @return
     */
    public function doctor($params = null)
    {
        $result = [];

        $q = mysqli_query($this->link, "SELECT * FROM doctor where ORVI<=1");
        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = array("id" => $f["id"], "latitude" => $f["latitude"], "longitude" => $f["longitude"], "state" => $f["state"], "header" => $f["header"], "ref" => $f["ref"], "date" => $f["date"], "clients" => $f["clients"], "comment" => $f["comment"]);

        }
        @mysqli_close($this->link);

        return $this->output($result);
    }

    // .php
    /**
     *
     * @param
     * @return
     */
    public function archive($params = null)
    {
        $type = $_GET["type"];
        $week = $_GET["week"];
        $current = new DateTime();
        $result = array();

        $q = mysqli_query($this->link, "SELECT * FROM locations, levels_archive,levels_info where locations.id=levels_archive.location_id and levels_archive.week='" . $week . "' and levels_archive.level=levels_info.level and levels_archive.pollen_type=levels_info.pollen_type and levels_archive.pollen_type=" . $type);
        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = array("id" => $f["id"], "latitude" => $f["latitude"], "longitude" => $f["longitude"], "radius" => $f["Radius"], "pollen_type" => $f["pollen_type"], "level" => $f["level"], "color" => dechex($f["color"]));

        }

        @mysqli_close($this->link);

        return $this->output($result);
    }

    // .php
    /**
     *
     * @param
     * @return
     */
    public function forecast($params = null)
    {
        $type = $params["type"] ?? null;

        $result = [];

        $fourDays = date("Y-m-d", strtotime("+4 day"));
        $today = date("Y-m-d");
        $q = mysqli_query($this->link, "SELECT * FROM  levels_forecast where date>='" . $today . "' and date<='" . $fourDays . "' and location_id=1 and pollen_type=" . $type);
        for ($c = 0; $c < mysqli_num_rows($q); $c++) {
            $f = mysqli_fetch_array($q);
            $result[] = array("id" => $f[id], "date" => $f["date"], "location_id" => $f["location_id"], "pollen_type" => $f["pollen_type"], "level" => $f["level"]);

        }
        @mysqli_close($this->link);

        return $this->output($result);
    }

    #--------------------------------------------------------------------------------------------------------------------------------------

    /**
     *
     * @param
     * @return
     */
    private function mysqlConnect()
    {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

        $link = mysqli_connect($this->host, $this->user, $this->password, $this->db);

        mysqli_set_charset($link, 'utf8');

        return $link;
    }

    /**
     *
     * @param
     * @return
     */
    private function buildError($code = null)
    {

        $codes = [
            0 => 'Неизвестная ошибка!',
            1 => 'Ошибка! Не переаны все обязательные аргументы!',
        ];

        return json_encode(['error' => $codes[$code] ?? $codes[0]]);
    }

    /**
     *
     * @param
     * @return
     */
    private function output($result)
    {
        header('Content-type: application/json');
        return json_encode($result);
    }

}