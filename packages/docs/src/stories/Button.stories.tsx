import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@travessia-ui/react'
import { ArrowRight } from 'phosphor-react'

// Tipagens padrão do Componente
export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Send',
  },
} as Meta<ButtonProps>

// Variações do componente
export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
