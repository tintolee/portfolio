import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from '../components/Toggle';

const meta: Meta<typeof Toggle> = {
    title: 'Forms/Toggle',
    component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {
    render: () => {
        const [on, setOn] = useState(false);
        return <Toggle checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />;
    },
};
