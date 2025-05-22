window.onload = () => {
    const loadingScreen = document.getElementById('loading-screen');

    if (!loadingScreen) {
        console.warn('%cLoading screen element not found.', 'color: #ffcc00; font-weight: bold; font-family: monospace;');
        return;
    }

    const spinner = loadingScreen.querySelector('.spinner');

    if (spinner) {
        requestAnimationFrame(() => {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                if (spinner instanceof HTMLElement) {
                    spinner.classList.add('paused');
                }
                console.log('%cSite Loaded with Spinner ', 'color: #707070; font-weight: bold; font-family: monospace;');
            }, 50);
        });

        const handleTransitionEnd = (event) => {
            if (event.target === loadingScreen && event.propertyName === 'opacity') {
                loadingScreen.remove();
                loadingScreen.removeEventListener('transitionend', handleTransitionEnd);
            }
        };
        loadingScreen.addEventListener('transitionend', handleTransitionEnd);
    } else {
        loadingScreen.remove();
        console.log('%cLoading Screen Removed ', 'color: #707070; font-weight: bold; font-family: monospace;');
    }
};