import { Button } from "../button";

export default {
    component: Button,
}

const Template = () => <Button label="Testing" onClick={() => console.log("Hello")} />
export const Buttons = Template.bind({});
