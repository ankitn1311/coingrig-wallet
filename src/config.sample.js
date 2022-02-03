// import {LogBox} from 'react-native';

const CONFIG = {};

process.env.TESTNET = false;

// LogBox.ignoreLogs(['Easing']);

CONFIG.APP_VERSION = '1.3.5 (49)';
CONFIG.BUILD_NUMBER = 49;
CONFIG.TESTNET = process.env.TESTNET;
CONFIG.COINGRIG_KEY = '';
CONFIG.DEFAULT_DERIVATION_KEY = 0;
CONFIG.PIN_ANDROID_TIMEOUT = 180; // seconds
CONFIG.BALANCE_TIMEOUT = 10; // seconds
CONFIG.NEW_ASSET_DESCRIPTOR_VERSION = 1;
CONFIG.COVALENT_KEY = '';
CONFIG.OPENSEA_KEY = '';
CONFIG.MIGRATION_KEY = '@MIGRATION_KEY';
CONFIG.INIT_KEY = '@init';
CONFIG.ONESIGNAL_KEY = '';

CONFIG.SWAP_FEE = 0.005; // 0.5%
CONFIG.FEE_RECIPIENT = '';
// CONFIG.testNFTs = '';

export default CONFIG;
