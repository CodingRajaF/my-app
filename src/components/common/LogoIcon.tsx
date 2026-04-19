export const Logo = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" viewBox="0 0 80 96">
            <defs>
                <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#7F77DD" />
                    <stop offset="100%" stop-color="#1D9E75" />
                </linearGradient>
            </defs>
            <rect width="80" height="80" rx="14" fill="url(#g)" />
            <text
                x="11"
                y="57"
                font-family="'SF Mono','Fira Mono','Consolas',monospace"
                font-size="26"
                font-weight="700"
                fill="white"
            >
                ../
            </text>
        </svg>
    );
};
