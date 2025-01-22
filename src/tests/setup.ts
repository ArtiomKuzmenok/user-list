import { config } from '@vue/test-utils';

config.global.mocks = {
	$store: {} // Пример мока для Vuex/Pinia, если используется
};

// config.global.plugins = [yourPluginInstance]; // Если вы используете плагины
