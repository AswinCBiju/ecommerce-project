import { it, expect, describe } from 'vitest';
import { formatMoney } from "./money";



describe('formatMoney', () => {
    it('formats 2067 to $20.67', () => {
        expect(formatMoney(2067)).toBe('$20.67');
    });

    it('displays 2 decimals', () => {
        expect(formatMoney(1090)).toBe('$10.90');
        expect(formatMoney(200)).toBe('$2.00');
    });
});
