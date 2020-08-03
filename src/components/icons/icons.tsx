import React from 'react';
import { IStyleIcon } from '../../models/prop-interfaces/style-icon.interface';

// I beleive these are from "feather icons", open source icons: https://feathericons.com

export const UpChevronSvg = ({ color }: IStyleIcon) => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    );
}

export const DownChevronSvg = ({ color }: IStyleIcon) => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
}

export const BookClosed = ({ color }: IStyleIcon) => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
    );
}

export const BookOpen = ({ color }: IStyleIcon) => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
    );
}

export const Bookmark = ({ color }: IStyleIcon) => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        </svg>
    );
}

export const Star = ({ color }: IStyleIcon) => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
    );
}

export const RemoveCircle = ({ color }: IStyleIcon) => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
    );
}

export const RemoveBox = ({ color }: IStyleIcon) => {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="9" x2="15" y2="15"></line>
            <line x1="15" y1="9" x2="9" y2="15"></line>
        </svg>
    );
}