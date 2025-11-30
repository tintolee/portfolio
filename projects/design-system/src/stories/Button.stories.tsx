import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    args: { children: 'Button' },
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
        size: { control: 'select', options: ['sm', 'md', 'lg'] },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Large: Story = { args: { size: 'lg' } };
export const Small: Story = { args: { size: 'sm' } };
