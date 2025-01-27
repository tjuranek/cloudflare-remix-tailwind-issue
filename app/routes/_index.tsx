import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{
			name: "description",
			content: "Welcome to Remix! Using Vite and Cloudflare!",
		},
	];
};

export default function Index() {
	return (
		<h1 className="text-3xl font-bold underline text-[red]">Hello thomas!</h1>
	);
}
