import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@travessia-ui/react'

// Tipagens padrão do Componente
export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

// Variações do componente
export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
