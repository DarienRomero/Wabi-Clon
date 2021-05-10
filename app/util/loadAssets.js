import cacheAssetsAsync from './cacheAssetsAsync';

export default async function loadAssets() {
    try {
        await cacheAssetsAsync({
            images: [
                require('../assets/images/app_icon.png'),
                require('../assets/images/icon.png'),
                require('../assets/images/onboarding_image.png'),
                require('../assets/images/splash_image.png'),
                require('../assets/images/bottom_navigation/online-store.png'),
                require('../assets/images/bottom_navigation/shopping-bag.png'),
                require('../assets/images/bottom_navigation/shopping-cart.png'),
                require('../assets/images/bottom_navigation/user.png'),
                require('../assets/images/bottom_navigation/online-store-active.png'),
                require('../assets/images/bottom_navigation/shopping-bag-active.png'),
                require('../assets/images/bottom_navigation/shopping-cart-active.png'),
                require('../assets/images/bottom_navigation/user-active.png'),
                require('../assets/images/shopping_page_header.png'),
                require('../assets/images/orders_page_header.png'),
                require('../assets/images/categories/alcohol.png'),
                require('../assets/images/categories/almacen.png'),
                require('../assets/images/categories/bebidas.png'),
                require('../assets/images/categories/chocolate.png'),
                require('../assets/images/categories/combos.png'),
                require('../assets/images/categories/galletas.png'),
                require('../assets/images/categories/golosinas.png'),
                require('../assets/images/categories/higiene.png'),
                require('../assets/images/categories/infantil.png'),
                require('../assets/images/categories/lacteos.png'),
                require('../assets/images/categories/limpieza.png'),
                require('../assets/images/categories/personal.png'),
            ],
            fonts: [
                { 'roboto-book': require('../assets/fonts/Roboto/Roboto-Black.ttf') },
                { 'roboto-bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf') },
                { 'roboto-regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf') },
                { 'roboto-medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf') },
                { 'nunito-sans-regular': require('../assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf') },
                { 'nunito-sans-bold': require('../assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf') },
                { 'nunito-sans-semibold': require('../assets/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf') },
            ],
        });
        return true;
    } catch (e) {
        return false;
    } finally {
    }
}

