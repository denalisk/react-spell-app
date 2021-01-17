import { useState, useEffect } from "react";

export default function useDebounce(value: string, millisecondDelay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebouncedValue(value);
        }, millisecondDelay);

        return () => {
            clearTimeout(debounceTimer);
        };
    });

    return debouncedValue;
}