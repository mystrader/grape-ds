/* eslint-disable import/no-unresolved */
import React from 'react'
import { DOMProps } from '@react-types/shared'
import * as icons from '../../icons'

type IconSize = 'small' | 'medium' | 'large'
type GenericIconProps = DOMProps & {
  name: 'arrowLeft' | 'close' | 'people' | 'person'
  size: IconSize
  color?: string
  'aria-label'?: string
  'aria-hidden'?: boolean
}

const getFromSize = (name: string, size: IconSize) => {
  switch (size) {
    case 'small':
      return icons[`${name}16`]
    case 'medium':
      return icons[`${name}20`]
    case 'large':
      return icons[`${name}24`]
    default:
      return null
  }
}

export const Icon: React.FC<GenericIconProps> = ({
  name,
  size,
  color,
  ...rest
}) => {
  const IconComponent = getFromSize(name, size)
  return <IconComponent style={{ color }} {...rest} />
}

Icon.defaultProps = {
  'aria-hidden': true,
}
