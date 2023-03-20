import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answer, revealAnswer] = useState<boolean>(true);
    return (
        <div>
            <Button onClick={() => revealAnswer(!answer)}>Reveal Answer</Button>
            {!answer && <div>42</div>}
        </div>
    );
}
