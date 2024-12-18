import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface ScrollContextType {
    hasScrolled: boolean;
    resetScroll: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
    children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = (event: WheelEvent) => {
                if (!hasScrolled && (event instanceof WheelEvent && event.deltaY > 0)) {
                    setHasScrolled(true);
                }
            };

            window.addEventListener('wheel', handleScroll);

            return () => {
                window.removeEventListener('wheel', handleScroll);
            };
        }
    }, [hasScrolled]);
    const resetScroll = () => setHasScrolled(false);
    return (
        <ScrollContext.Provider value={{ hasScrolled, resetScroll }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll debe usarse dentro de un ScrollProvider');
    }
    return context;
};
