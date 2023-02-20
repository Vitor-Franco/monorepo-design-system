import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@travessia-ui/react'

// Tipagens padrão do Componente
export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

// Variações do componente
export const Primary: StoryObj<BoxProps> = {}
