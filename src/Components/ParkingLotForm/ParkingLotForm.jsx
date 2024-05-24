import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';

import './ParkingLotForm.css';

const PRIORITIES = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
};

export default function ParkingLotForm({ addItem }) {

    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(PRIORITIES.Medium);

    function handleDateChange(e) {
        setDate(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handlePriorityChange(e) {
        setPriority(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        // 2024-05-22 ---> 05/22/2024
        const [y, M, d] = date.split('-');
        const formattedDate = `${M}/${d}/${y}`;

        addItem(formattedDate, priority, link, description);
        clearForm();
    }

    function clearForm() {
        setDate('');
        setLink('');
        setDescription('');
        setPriority(PRIORITIES.Medium);        
    }

    return (
        <Form 
            data-bs-theme="dark" 
            className="parking-lot-form"
            onSubmit={handleSubmit}>
            <FormGroup className="parking-lot-row">
                <Label htmlFor="link-date">Date</Label>
                <Input 
                    id="link-date" 
                    name="date" 
                    type="date" 
                    onChange={handleDateChange}
                    value={date}
                    required />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label htmlFor="link-url">Link</Label>
                <Input 
                    id="link-url" 
                    name="url" 
                    type="url" 
                    onChange={handleLinkChange}
                    value={link}
                    required />
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Label htmlFor="link-description">Description</Label>
                <Input 
                    id="link-description" 
                    name="description" 
                    type="text" 
                    onChange={handleDescriptionChange} 
                    value={description}
                    required
                />               
            </FormGroup>
            <FormGroup className="parking-lot-row">
                <Input 
                    name="radio-priority" 
                    type="radio" 
                    value={PRIORITIES.High} 
                    checked={priority === PRIORITIES.High}
                    onChange={handlePriorityChange}
                    id="prio-high" />
                {' '}
                <Label htmlFor="prio-high" className="me-3">High</Label>
                <Input 
                    name="radio-priority" 
                    type="radio" 
                    value={PRIORITIES.Medium}
                    checked={priority === PRIORITIES.Medium}
                    onChange={handlePriorityChange}
                    id="prio-medium" />
                {' '}
                <Label htmlFor="prio-medium" className="me-3">Medium</Label>
                <Input 
                    name="radio-priority" 
                    type="radio" 
                    value={PRIORITIES.Low}
                    checked={priority === PRIORITIES.Low}
                    onChange={handlePriorityChange}
                    id="prio-low" />
                {' '}
                <Label htmlFor="prio-low" className="me-3">Low</Label>

            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    );
}
