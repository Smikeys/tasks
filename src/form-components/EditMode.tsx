import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                label="Can you edit?"
                checked={edit}
                onChange={updateEdit}
            />
            {edit === true ? (
                <>
                    <Form.Check
                        type="checkbox"
                        label="student"
                        id="student"
                        checked={student}
                        onChange={updateStudent}
                    />
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        ></Form.Control>
                    </Form.Group>{" "}
                    <div>
                        {name}{" "}
                        {student === true ? "is a student" : "is not a student"}
                    </div>
                </>
            ) : (
                <div>
                    {name}{" "}
                    {student === true ? "is a student" : "is not a student"}
                </div>
            )}
        </div>
    );
}
