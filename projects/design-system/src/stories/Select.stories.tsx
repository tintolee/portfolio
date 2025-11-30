import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';

const meta: Meta<typeof Select> = {
    title: 'Forms/Select',
    component: Select,
    args: {
        label: 'Framework',
        hint: 'Choose your favorite',
    },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Basic: Story = {
    render: (args) => (
        <Select {...args}>
            <option value="react">React</option>
            <option value="next">Next.js</option>
            <option value="rn">React Native</option>
        </Select>
    ),
};
