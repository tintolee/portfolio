import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
    title: 'Forms/Input',
    component: Input,
    args: {
        label: 'Email',
        placeholder: 'you@example.com',
        description: 'We will never share your email.',
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const WithError: Story = { args: { error: 'Please enter a valid email.' } };
