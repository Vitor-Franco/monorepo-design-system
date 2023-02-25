import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@travessia-ui/react'

// Tipagens padrão do Componente
export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

// Variações do componente
export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas você pode alterar isso passando o atributo `as`.',
      },
    },
  },
}
