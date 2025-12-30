interface WaveDividerProps {
    variant?: 'toLight' | 'toDark';
    className?: string;
}

const WaveDivider = ({ variant = 'toDark', className = '' }: WaveDividerProps) => {
    // Colors based on transition direction
    const colors = variant === 'toLight'
        ? {
            wave1: 'rgba(56, 189, 248, 0.7)',
            wave2: 'rgba(56, 189, 248, 0.5)',
            wave3: 'rgba(56, 189, 248, 0.3)',
            wave4: 'hsl(210, 40%, 97%)' // Light background
        }
        : {
            wave1: 'rgba(56, 189, 248, 0.7)',
            wave2: 'rgba(56, 189, 248, 0.5)',
            wave3: 'rgba(56, 189, 248, 0.3)',
            wave4: 'hsl(222, 84%, 5%)' // Dark background
        };

    return (
        <div className={`wave-divider ${variant === 'toDark' ? 'from-light' : ''} ${className}`}>
            <svg
                className="editorial"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 
               58-18 88-18s
               58 18 88 18 
               58-18 88-18 
               58 18 88 18
               v44h-352z"
                    />
                </defs>
                <g className="parallax1">
                    <use xlinkHref="#gentle-wave" x="50" y="3" fill={colors.wave1} />
                </g>
                <g className="parallax2">
                    <use xlinkHref="#gentle-wave" x="50" y="0" fill={colors.wave2} />
                </g>
                <g className="parallax3">
                    <use xlinkHref="#gentle-wave" x="50" y="9" fill={colors.wave3} />
                </g>
                <g className="parallax4">
                    <use xlinkHref="#gentle-wave" x="50" y="6" fill={colors.wave4} />
                </g>
            </svg>
        </div>
    );
};

export default WaveDivider;
