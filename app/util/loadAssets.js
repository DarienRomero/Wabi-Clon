import cacheAssetsAsync from './cacheAssetsAsync';

export default async function loadAssets() {
    try {
        await cacheAssetsAsync({
            images: [
                require('../assets/images/app_icon.png'),
                require('../assets/images/icon.png'),
                require('../assets/images/onboarding_image.png'),
                require('../assets/images/splash_image.png'),
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

