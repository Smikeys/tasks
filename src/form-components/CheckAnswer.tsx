import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [text, setText] = useState<string>("");

    function updateText(event: React.ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        setText(text);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <div>Expected Answer: {expectedAnswer}</div>
            <Form.Group>
                <Form.Label>
                    Correct? {expectedAnswer === text ? "✔️" : "❌"}
                </Form.Label>
                <Form.Control value={text} onChange={updateText}></Form.Control>
            </Form.Group>
        </div>
    );
}
