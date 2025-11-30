import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    args: {
        label: 'Accept terms',
        description: 'You agree to the Terms and Privacy Policy.',
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
