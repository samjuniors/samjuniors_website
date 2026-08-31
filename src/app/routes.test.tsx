import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './page';
import ProductsPage from './products/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import ProductDetailPage from './products/[slug]/page';

describe('Application Route Rendering', () => {
  it('renders HomePage with company hero and flagship stage', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
    expect(screen.getByText(/Explore Lumora/i)).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /Lumora — Spatial Logic & Authoring/i })).toBeDefined();
  });

  it('allows interactive mode switching in Lumora workbench', () => {
    render(<HomePage />);
    const contextTab = screen.getByRole('tab', { name: /Context Engine/i });
    fireEvent.click(contextTab);
    expect(screen.getByText(/Local Context Engine/i)).toBeDefined();
  });

  it('renders ProductsPage with product portfolio', () => {
    render(<ProductsPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Product Ecosystem/i })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /Lumora/i })).toBeDefined();
  });

  it('renders AboutPage with 4 building filters', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1, name: /How We Build/i })).toBeDefined();
    expect(screen.getByText(/Innovation/i)).toBeDefined();
    expect(screen.getByText(/User Value/i)).toBeDefined();
  });

  it('renders ContactPage with dialogue gateway', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { level: 1, name: /Connect with SamJuniors/i })).toBeDefined();
    expect(screen.getByText(/contact@samjuniors.com/i)).toBeDefined();
  });

  it('renders ProductDetailPage for Lumora', async () => {
    const params = Promise.resolve({ slug: 'lumora' });
    const Component = await ProductDetailPage({ params });
    render(Component);
    expect(screen.getByRole('heading', { level: 1, name: /Lumora/i })).toBeDefined();
  });
});
