import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const [request, setRequest] = useState<string>("");
    const attemptsToNum = parseInt(attempts) || 0;
    const requestsToNum = parseInt(request) || 0;

    function updateText(event: React.ChangeEvent<HTMLInputElement>) {
        const text = event.target.value;
        setRequest(text);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attempts}</div>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateText}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => setAttempts((attemptsToNum - 1).toString())}
                disabled={attemptsToNum === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttempts((attemptsToNum + requestsToNum).toString())
                }
            >
                gain
            </Button>
        </div>
    );
}
