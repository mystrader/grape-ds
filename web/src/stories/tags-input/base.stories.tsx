import React from 'react'

import { TagsInput } from '../../components/tags-input'
import { Tag } from '../../components/tag'

export default {
  title: 'Forms/TagsInput',
  component: TagsInput,
}

export const Base: React.FC<TabsProps> = props => (
  <TagsInput {...props}>
    <Tag
      id={1}
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 1
    </Tag>
    <Tag
      id={2}
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 2
    </Tag>
    <Tag
      id={3}
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 3
    </Tag>
    <Tag
      id={4}
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 1
    </Tag>
    <Tag
      id={5}
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 2
    </Tag>
    <Tag
      id={6}
      onRemove={() => alert('Remove')}
      avatarSrc="https://thispersondoesnotexist.com/image"
      avatarAlt="Alt text image"
    >
      Tag 3
    </Tag>
  </TagsInput>
)
