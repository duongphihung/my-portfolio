export default function Icon({ name = 'arrow-up-right', size = 20, ...props }) {
    const paths = {
        'arrow-up-right': 'M7 17 17 7M7 7h10v10',
        'arrow-right': 'M4 12h16m-6-6 6 6-6 6',
        'arrow-left': 'M20 12H4m6-6-6 6 6 6',
        'arrow-down': 'M12 4v16m-6-6 6 6 6-6',
        download: 'M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5',
        code: 'm8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16',
        people: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
        check: 'm5 12 4 4L19 6',
        mail: 'M3 5h18v14H3zM3 5l9 8 9-8',
        menu: 'M4 7h16M4 12h16M4 17h16',
        close: 'm6 6 12 12M6 18 18 6',
        globe: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18',
    };
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path d={paths[name] || paths['arrow-up-right']} />
        </svg>
    );
}
