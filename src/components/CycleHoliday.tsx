import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holidays = "🎃" | "🎄" | "🎆" | "🐇" | "☘️";

    const byDate: Record<holidays, holidays> = {
        "☘️": "🐇",
        "🐇": "🎆",
        "🎆": "🎃",
        "🎃": "🎄",
        "🎄": "☘️"
    };
    const byAlphabet: Record<holidays, holidays> = {
        "🎄": "🐇",
        "🐇": "🎆",
        "🎆": "🎃",
        "🎃": "☘️",
        "☘️": "🎄"
    };
    const [holiday, setHoliday] = useState<holidays>("☘️");

    function nextDate(): void {
        const newDate = byDate[holiday];
        setHoliday(newDate);
    }

    function nextLetter(): void {
        const newLetter = byAlphabet[holiday];
        setHoliday(newLetter);
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={nextLetter}>Advance by Alphabet</Button>
            <Button onClick={nextDate}>Advance by Year</Button>
        </div>
    );
}
