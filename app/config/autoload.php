<? defined('BASEPATH') OR exit('Доступ к скрипту запрещен');


$autoload['packages'] = [];

if (is_cli()) {
	$autoload['libraries'] = ['database'];
} else {
	$autoload['libraries'] = ['twig', 'session', 'database', 'sendemail'];
}


$autoload['drivers'] = [];


$autoload['helper'] = ['cookie', 'url', 'common', 'arr', 'datetime', 'dirsfiles', 'types'];


$autoload['config'] = [];


$autoload['language'] = [];


$autoload['model'] = ['settings_model' => 'settings'];