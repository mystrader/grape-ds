import { createUseStyles } from 'react-jss'
import tokens from '../tokens'

const focusStyle = ({ isInvalid }): string => {
  if (isInvalid)
    return `0 0 0 ${tokens.outlineWidthFocus} ${tokens.colorOutlineFocusInvalid}`
  return `0 0 0 ${tokens.outlineWidthFocus} ${tokens.colorOutlineFocusDefault}`
}

export const useFocusStyle = createUseStyles({
  onFocus: {
    transition: 'all 0.25s ease-in-out',
    transitionProperty: 'box-shadow, border-color',
    '&:focus': {
      outline: 0,
      boxShadow: focusStyle,
      borderColor: ({ isInvalid }) =>
        isInvalid
          ? tokens.colorBorderFormfieldInvalidDefault
          : tokens.colorBorderFormfieldFocus,
    },
  },
  focus: {
    '&:focus': {
      outline: 0,
    },
    boxShadow: focusStyle,
  },
})
