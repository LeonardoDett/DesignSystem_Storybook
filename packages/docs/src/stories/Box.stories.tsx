import { Box, BoxProps } from "@rcdesign-system/react"

import { StoryObj, Meta } from "@storybook/react"
import { Children } from "react"



export default {
  title: 'Form/Box',
  component: Box,
  args: {
    children: (
        <>
            <span>Testando o Elemento Box</span>
        </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
