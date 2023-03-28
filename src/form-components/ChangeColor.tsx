import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("white");
    const colors = [
        "white",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "black"
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color2: string) => (
                <Form.Check
                    key={color2}
                    inline
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id={color2}
                    label={color2}
                    value={color2}
                    checked={false}
                    style={{ backgroundColor: color2 }}
                />
            ))}
            <div>
                You have chosen{" "}
                <div
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </div>
            </div>
        </div>
    );
}
