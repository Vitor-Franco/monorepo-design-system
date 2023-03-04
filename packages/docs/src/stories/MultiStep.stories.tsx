import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@travessia-ui/react'

// Tipagens padrão do Componente
export default {
  title: 'Form/MultiStep',
  component: MultiStep,

  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

// Variações do componente
export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
