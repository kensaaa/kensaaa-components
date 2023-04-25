import { Meta, StoryObj } from "@storybook/react";
import { Path, RouterMain } from "../componets/RouterMain";
import { RoutesPath } from "../componets/RoutesPath";

export default {
	title: "Router/RouterMain",
	component: RouterMain,
	tags: ["autodocs"],
} as Meta<typeof RouterMain>;

type Template = StoryObj<typeof RouterMain>;

const paths: Path[] = [
	{ label: "home", path: "/", Element: () => <h1>home</h1> },
	{ label: "contacto", path: "/contact", Element: () => <h1>contacto</h1> },
	{ label: "proyecto", path: "/proyecto", Element: () => <h1>proyecto</h1> },
];


export const Basic :Template = {
	args : {
		children: <RoutesPath />,
		paths,
	}
}
