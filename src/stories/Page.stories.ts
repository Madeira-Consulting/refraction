import type { Meta, StoryObj } from "@storybook/react";

import { Page } from "./Page";

const meta: Meta<typeof Page> = {
    title: "Example/Page",
    component: Page,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const HomeScreen: Story = {
    args: {
        screenName: "home",
        user: {
            userName: "johndoe",
            firstName: "John",
            lastName: "Doe",
            mail: "johndoe@mail.com",
            profilePicture:
                "https://i1.sndcdn.com/artworks-DoavOeHRnAqXbfO7-6FJP0A-t500x500.jpg",
        },
    },
};

export const PlayerScreen: Story = {
    args: {
        screenName: "player",
        user: {
            userName: "johndoe",
            firstName: "John",
            lastName: "Doe",
            mail: "johndoe@mail.com",
            profilePicture:
                "https://i1.sndcdn.com/artworks-DoavOeHRnAqXbfO7-6FJP0A-t500x500.jpg",
        },
    },
};
