import { render, screen } from '@testing-library/react';
import { Button } from '../../components/Button';

describe('Button', () => {
    it('renders with provided children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });
    it('applies variant and size classes', () => {
        render(<Button variant="secondary" size="lg">Go</Button>);
        const btn = screen.getByRole('button', { name: /go/i });
        expect(btn.className).toMatch(/bg-gray-100/);
    });
});
