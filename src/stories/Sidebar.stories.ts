import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
    title: "Example/Sidebar",
    component: Sidebar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const LoggedIn: Story = {
    args: {
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

export const LoggedOut: Story = {};
