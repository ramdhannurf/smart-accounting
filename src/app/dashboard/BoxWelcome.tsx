import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function BoxWelcome({ title, icons, href }: { title: string, icons: string, href: string }) {
    return (
        <>
            <Link href={href}>
                <Card className="w-full hover:border-[#fb749c] transition duration-500">
                    <CardContent className="py-3">
                        <div className="flex gap-3">
                            <div>
                                <img src={`/assets/img/icons/${icons}`} className="w-[50px]" alt="" />
                            </div>
                            <div className="self-center">
                                <p className="font-medium">{title}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}