import React from "react";
import { Tabs } from "flowbite-react";
import Details from "./Details";

const index = () => {
    return (
        <Tabs.Group aria-label="Tabs with underline" style="underline">
            <Tabs.Item title="Partner Details">
                <Details />
            </Tabs.Item>
        </Tabs.Group>
    );
};

export default index;
