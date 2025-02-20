import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="absolute top-4 right-4">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
