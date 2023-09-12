import { color, gradation } from './color';

export const buttonStyles = {
  primary: {
    default: {
      background: gradation.sm,
      color: color.gray.gray000,
      border: 'none',
    },
    hover: {
      background: gradation.md,
      color: color.gray.gray000,
      border: 'none',
    },
    click: {
      background: gradation.lg,
      color: color.gray.gray000,
      border: 'none',
    },
    focus: {
      background: `${gradation.sm} padding-box, ${gradation.lg} border-box`,
      backgroundSize: 'contain',
      color: color.gray.gray000,
      border: '3px solid transparent',
      borderRadius: '40px',
      display: 'inline-block',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      outline: 'none',
    },
    disabled: { background: color.gray.gray030, color: color.gray.gray050, border: 'none' },
  },
  secondary: {
    default: {
      background: color.gray.gray030,
      color: color.gray.gray000,
      border: 'none',
    },
    hover: {
      background: color.gray.gray040,
      color: color.gray.gray000,
      border: 'none',
    },
    click: {
      background: color.gray.gray050,
      color: color.gray.gray000,
      border: 'none',
    },
    focus: {
      background: color.gray.gray030,
      color: color.gray.gray050,
      border: `3px solid ${color.gray.gray050}`,
      outline: 'none',
    },
    disabled: { background: color.gray.gray010, color: color.gray.gray030, border: 'none' },
  },
  ghost: {
    default: {
      background: color.gray.gray000,
      color: color.gray.gray030,
      border: `1px solid ${color.gray.gray030}`,
    },
    hover: {
      background: color.gray.gray010,
      color: color.gray.gray040,
      border: `1px solid ${color.gray.gray030}`,
    },
    click: {
      background: color.gray.gray020,
      color: color.gray.gray050,
      border: `1px solid ${color.gray.gray040}`,
    },
    focus: {
      background: color.gray.gray000,
      color: color.gray.gray030,
      border: `3px solid ${color.gray.gray020}`,
      outline: 'none',
    },
    disabled: { background: color.gray.gray000, color: color.gray.gray020, border: `1px solid ${color.gray.gray020}` },
  },
};
