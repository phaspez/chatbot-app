import Link from "next/link";
import { Button } from "flowbite-react";

export default function Home() {
	return (
		<main className="p-0 m-0 flex-col items-center justify-between px-0 text-white">
			<div className="w-screen flex justify-center p-5">
				<div className="text-highlights grid grid-cols-1 text-left gap-4">
					<h1 className="font-bold text-8xl text-opacity-10 px-0">CAAS</h1>
					<h1 className="p-0 text-gray-600 text-extra-large opacity-30 px-0">
						Chat-Voice Admissions Advisory Support
					</h1>
					<h1 className="p-0 text-gray-600 text-extra-large opacity-30 px-0">
						Hệ thống tư vấn tuyển sinh CTU
					</h1>
					<Link href={"/chat"}>
						<Button>Truy cập</Button>
					</Link>
				</div>
			</div>
		</main>
	);
}
