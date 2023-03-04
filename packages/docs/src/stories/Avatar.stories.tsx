import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@travessia-ui/react'

// Tipagens padrão do Componente
export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/vitor-franco.png',
    alt: 'Vitor Franco',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

// Variações do componente
export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
