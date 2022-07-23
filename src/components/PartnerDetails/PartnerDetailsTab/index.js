import React from "react";
import { Tabs } from "flowbite-react";
import Details from "./Details";
import Menu from './Menu'
import ViewMenu from "./ViewMenu";

const index = () => {
    return (
        <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item title="Partner Details">
                <Details />
            </Tabs.Item>
            <Tabs.Item title="Set Menu">
                <Menu />
            </Tabs.Item>
            <Tabs.Item title="View Menu">
                <ViewMenu />
            </Tabs.Item>
        </Tabs.Group>
    );
};

export default index;
