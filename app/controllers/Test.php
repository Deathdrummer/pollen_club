<? defined('BASEPATH') OR exit('Доступ к скрипту запрещен');

class Test extends MY_Controller {
	
	
	//private $viewsPath = 'views/site/render/reviews/';
	
	public function __construct() {
		parent::__construct();
		//$this->load->model('reviews_model', 'reviews');
	}
	
	
	
	/**
	 * @param 
	 * @return 
	 */
	public function get_roduct() {
		toLog('views/'.$this->controllerName.'/render/product.tpl');
	}
	
	
	
	
	
	
}