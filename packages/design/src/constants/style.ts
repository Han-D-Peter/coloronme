import { color, gradation } from './color';

const grayStyle = {
  background: color.gray.gray000,
  color: color.gray.gray040,
  border: `1px solid ${color.gray.gray030}`,
};

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
      display: 'inline-block',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      outline: 'none',
    },
    disabled: { background: color.gray.gray030, color: color.gray.gray050, border: 'none' },
  },
  ghost: {
    default: {
      border: '2px solid transparent',
      backgroundImage: `linear-gradient(${color.gray.gray000}, ${color.gray.gray000}),${gradation.sm} , ${gradation.lg}`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',

      color: color.gray.gray040,
    },
    hover: {
      border: '2px solid transparent',
      backgroundImage: `linear-gradient(${color.gray.gray000}, ${color.gray.gray000}),${gradation.sm} , ${gradation.lg}`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',

      color: color.gray.gray050,
    },
    click: {
      border: '2px solid transparent',
      backgroundImage: `linear-gradient(${color.gray.gray000}, ${color.gray.gray000}),${gradation.sm} , ${gradation.lg}`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',

      color: color.gray.gray050,
    },
    focus: {
      border: '3px solid transparent',
      backgroundImage: `linear-gradient(${color.gray.gray000}, ${color.gray.gray000}),${gradation.sm} , ${gradation.lg}`,
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      outline: 'none',

      color: color.gray.gray030,
    },
    disabled: { background: color.gray.gray000, color: color.gray.gray030, border: `2px solid ${color.gray.gray030}` },
  },
  gray: {
    default: grayStyle,
    hover: grayStyle,
    click: grayStyle,
    focus: grayStyle,
    disabled: grayStyle,
  },
};
