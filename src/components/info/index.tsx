/** @format */

"use client";
import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import TabsDemo from "../tabTeste";

const data = [
	{
		goal: 400,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 278,
	},
	{
		goal: 189,
	},
	{
		goal: 239,
	},
	{
		goal: 300,
	},
	{
		goal: 200,
	},
	{
		goal: 278,
	},
	{
		goal: 189,
	},
	{
		goal: 349,
	},
];

export default function DrawerDemo() {
	const [goal, setGoal] = React.useState(350);

	function onClick(adjustment: number) {
		setGoal(Math.max(200, Math.min(400, goal + adjustment)));
	}

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='outline'>Open Drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className='mx-auto w-full max-w-sm'>
					<DrawerHeader>
						<DrawerTitle>Move Goal</DrawerTitle>
						<DrawerDescription>Set your daily activity goal.</DrawerDescription>
					</DrawerHeader>
						<TabsDemo />
					<DrawerFooter>
						<Button>Submit</Button>
						<DrawerClose asChild>
							<Button variant='outline'>Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
