import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

import Layout from '@/components/organisms/Layout';

describe(`Layout`, () => {
  it(`renders a Layout component`, () => {
    render(<Layout>Test Layout</Layout>);

    expect(screen.getByText(`Test Layout`)).toBeInTheDocument();
  });
});
