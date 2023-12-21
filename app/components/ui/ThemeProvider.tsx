'use client';
import {ReactNode} from 'react';
import {useTheme} from "@/app/lib/hooks";
import '@/app/theme.scss'

const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [dayTime, weatherType] = useTheme();
    return (
        <div className={`${weatherType} ${dayTime} transition-colors`}>
            {children}
        </div>
    );
};

export default ThemeProvider;
