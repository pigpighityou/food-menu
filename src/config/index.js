
const isProd = import.meta.env.MODE === 'production';

const config = {
    picBaseUrl: isProd ? '/food-menu' : ''
};

export default config
