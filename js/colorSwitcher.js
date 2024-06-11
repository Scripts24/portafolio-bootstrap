
const colorPalettes = {
    green: {
        '--color-base': '#183a1d',
        '--color-base2': '#24562c',
        '--color-brand': '#f0a14c',
        '--color-brand2': '#ed881d',
        '--sidebar-hsl': '129, 41%, 10%',
        '--color-body': '#c9e8ce',
        '--color-heading': '#edf7ef',
    },
    brown: {
        '--color-base': '#523819',
        '--color-base2': '#795325',
        '--color-brand': '#f1c31e',
        '--color-brand2': '#f4d04e',
        '--sidebar-hsl': '33, 53%, 10%',
        '--color-body': '#eddbc4',
        '--color-heading': '#f9f3eb',
    },
    blue: {
        '--color-base': '#002b57',
        '--color-base2': '#004080',
        '--color-brand': '#61b0ff',
        '--color-brand2': '#94c9ff',
        '--sidebar-hsl': '210, 100%, 10%',
        '--color-body': '#b3d9ff',
        '--color-heading': '#e5f2ff',
    },
    blue2: {
        '--color-base': '#1f1d95',
        '--color-base2': '#2826c0',
        '--color-brand': '#faeb47',
        '--color-brand2': '#d6c405',
        '--sidebar-hsl': '241, 67%, 15%',
        '--color-body': '#b3b2f0',
        '--color-heading': '#eaeafb',
    },
    green2: {
        '--color-base': '#0e3e32',
        '--color-base2': '#135343',
        '--color-brand': '#beda34',
        '--color-brand2': '#cce260',
        '--sidebar-hsl': '165, 63%, 10%',
        '--color-body': '#c1f1e5',
        '--color-heading': '#eafaf6',
    },
    grey: {
        '--color-base': '#22262a',
        '--color-base2': '#353b41',
        '--color-brand': '#7c868d',
        '--color-brand2': '#979fa5',
        '--sidebar-hsl': '210, 10%, 10%',
        '--color-body': '#d5d9dd',
        '--color-heading': '#f1f2f4',
    },
    green3: {
        '--color-base': '#19341e',
        '--color-base2': '#285330',
        '--color-brand': '#a3bd7a',
        '--color-brand2': '#5f8d4e',
        '--sidebar-hsl': '131, 35%, 10%',
        '--color-body': '#c8e4cd',
        '--color-heading': '#eef7ef',
    },
    violet: {
        '--color-base': '#272154',
        '--color-base2': '#362e76',
        '--color-brand': '#9680ef',
        '--color-brand2': '#7153ea',
        '--sidebar-hsl': '247, 44%, 15%',
        '--color-body': '#c7bbf7',
        '--color-heading': '#ece8fc',
    },
};

function changeColor(color) {
    const palette = colorPalettes[color];
    for (const variable in palette) {
        document.documentElement.style.setProperty(variable, palette[variable]);
    }
    localStorage.setItem('preferredColor', color); // Guardar la preferencia en localStorage
}

function resetColor() {
    const defaultPalette = colorPalettes['green'];
    for (const variable in defaultPalette) {
        document.documentElement.style.setProperty(variable, defaultPalette[variable]);
    }
    localStorage.removeItem('preferredColor'); // Eliminar la preferencia guardada
}

function toggleColorSwitcher() {
    const colorButtons = document.querySelector('.color-buttons');
    colorButtons.style.display = colorButtons.style.display === 'flex' ? 'none' : 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredColor = localStorage.getItem('preferredColor');
    if (preferredColor) {
        changeColor(preferredColor);
    }
});
