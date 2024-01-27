/** @format */

import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function Formulario() {
	return (
		<div>
            <form>
			<Tabs defaultValue='account' className=''>
				<TabsList className='grid w-full grid-cols-4'>
					<TabsTrigger className="" value='account'>Account</TabsTrigger>
					<TabsTrigger value='password'>Password</TabsTrigger>
                    <TabsTrigger value='teste'>testte</TabsTrigger>
                    <TabsTrigger disabled={true} value='outroteste'>teste</TabsTrigger>
				</TabsList>
				<TabsContent value='account'>
					<Card>
						<CardHeader>
							<CardTitle>Account</CardTitle>
							<CardDescription>
								Make changes to your account here. Click save when you're done.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-2'>
							<div className='space-y-1'>
								<Label htmlFor='name'>Name</Label>
								<Input id='name' defaultValue='Pedro Duarte' />
							</div>
							<div className='space-y-1'>
								<Label htmlFor='username'>Username</Label>
								<Input id='username' defaultValue='@peduarte' />
							</div>
						</CardContent>
						<CardFooter>
							<Button type="button">opa</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
            </form>
		</div>
	);
}
