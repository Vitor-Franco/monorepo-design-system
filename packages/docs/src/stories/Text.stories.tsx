import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@travessia-ui/react'

// Tipagens padrão do Componente
export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sapiente velit molestias.',
  },
} as Meta<TextProps>

// Variações do componente
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'strong text',
    as: 'strong',
  },
}
