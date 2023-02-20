import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@travessia-ui/react'

// Tipagens padrão do Componente
export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

// Variações do componente
export const Primary: StoryObj<BoxProps> = {}
