import type { Meta, StoryObj } from '@storybook/react'

import { LoginCard } from '../components/LoginCard'

const meta = {
    title: 'Components/Login/Card',
    component: LoginCard,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof LoginCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        cardTitle: 'Login',
    },
}
