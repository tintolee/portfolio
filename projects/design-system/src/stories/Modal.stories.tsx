import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Modal } from '../components/Modal';
import { Button } from '../components/Button';

const meta: Meta<typeof Modal> = {
    title: 'Overlays/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Basic: Story = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        return (
            <div>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal open={open} onClose={() => setOpen(false)} title="Modal title">
                    This is a basic modal example.
                </Modal>
            </div>
        );
    },
};
