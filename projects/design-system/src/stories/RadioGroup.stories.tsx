import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioGroup } from '../components/RadioGroup';

const meta: Meta<typeof RadioGroup<string>> = {
    title: 'Forms/RadioGroup',
    component: RadioGroup as any,
};

export default meta;
type Story = StoryObj<typeof RadioGroup<string>>;

export const Basic: Story = {
    render: () => {
        const [val, setVal] = useState('a');
        return (
            <RadioGroup
                name="choices"
                ariaLabel="Choices"
                value={val}
                onChange={setVal}
                options={[
                    { value: 'a', label: 'Option A' },
                    { value: 'b', label: 'Option B' },
                    { value: 'c', label: 'Option C' },
                ]}
            />
        );
    },
};
