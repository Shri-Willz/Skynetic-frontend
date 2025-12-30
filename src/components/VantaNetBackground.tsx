import { useEffect, useRef } from 'react';

// Declare Vanta types for TypeScript
declare global {
    interface Window {
        VANTA: {
            NET: (options: {
                el: HTMLElement | string;
                mouseControls?: boolean;
                touchControls?: boolean;
                gyroControls?: boolean;
                minHeight?: number;
                minWidth?: number;
                scale?: number;
                scaleMobile?: number;
                color?: number;
                backgroundColor?: number;
                points?: number;
                maxDistance?: number;
                spacing?: number;
            }) => {
                destroy: () => void;
            };
        };
    }
}

const VantaNetBackground = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<{ destroy: () => void } | null>(null);

    useEffect(() => {
        // Wait for Vanta to be available
        const initVanta = () => {
            if (!vantaRef.current || !window.VANTA) return;

            // Destroy existing effect if any
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
            }

            // Initialize Vanta NET effect
            vantaEffect.current = window.VANTA.NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0xffffff, // White
                backgroundColor: 0x020617, // Dark Navy
                points: 10.00,
                maxDistance: 25.00,
                spacing: 18.00
            });
        };

        // Check if VANTA is already loaded
        if (window.VANTA) {
            initVanta();
        } else {
            // Wait for scripts to load
            const checkVanta = setInterval(() => {
                if (window.VANTA) {
                    clearInterval(checkVanta);
                    initVanta();
                }
            }, 100);

            return () => {
                clearInterval(checkVanta);
                if (vantaEffect.current) {
                    vantaEffect.current.destroy();
                }
            };
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
            }
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="network-canvas pointer-events-none"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}
        />
    );
};

export default VantaNetBackground;
