import {defineConfig, presetAttributify, presetTypography} from 'unocss';
import { presetWind } from 'unocss/preset-wind3';

export default defineConfig({
    presets: [presetWind(), presetAttributify(), presetTypography()],
    shortcuts: {
        panel: 'bg-gray-800 rounded-2 shadow-md',
        'classic-panel': 'bg-gray-800 border-outset border-2'
    },
    theme: {
        colors: {
            contract: {
                black: '#003049',
                red: '#d62828',
                orange: '#f77f00',
                yellow: '#fcbf49',
                white: '#eae2b7',
            },
            gentle: {
                darker: '#1a1a2e',
                dark: '#16213e',
                light: '#f0c38e',
                white: 'white',
            }
        }
    }
});