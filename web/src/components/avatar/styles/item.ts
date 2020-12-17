import { JssStyle } from 'jss'
import { createUseStyles } from 'react-jss'

import tokens from '../../../tokens'
import { parseToken } from '../../../utils'

import onHover from './onHover'

export const useItemStyle = createUseStyles(
  (theme: typeof tokens): Record<string, JssStyle> => ({
    wrapper: {
      display: 'flex',
      border: 0,
      padding: theme.sizeHalfX,
      alignItems: 'center',
      backgroundColor: 'transparent',
      cursor: ({ isDisabled }) => (isDisabled ? 'auto' : 'pointer'),
      '& > div:first-child': {
        transition: 'all 0.25s ease-in-out',
      },
      '&:hover': {
        '& > div:first-child': onHover(theme),
      },
      '&:focus': {
        outline: 0,
      },
    },
    text: {
      display: 'flex',
      marginLeft: theme.spaceAvatarItem,
      width: ({ maxWidth, size }) => {
        if (!maxWidth) return 'auto'

        const padding = parseToken(theme.spaceAvatarItem)

        const avatarSize = parseToken(
          size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarRegular,
        )

        return `calc(${maxWidth}px - ${padding + avatarSize}px)`
      },
      flexDirection: ({ size }) => (size === 'small' ? 'row' : 'column'),
    },
    name: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
      flexShrink: 0,
      maxWidth: ({ maxWidth, size }) => {
        if (!maxWidth) return 'auto'

        const padding = parseToken(theme.spaceAvatarItem) * 2

        const avatarSize = parseToken(
          size === 'small' ? theme.sizeAvatarSmall : theme.sizeAvatarRegular,
        )

        return `calc(${maxWidth}px - ${padding + avatarSize}px)`
      },
    },
    description: {
      color: theme.colorTextAvatarItemSecondary,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'left',
    },
  }),
)
