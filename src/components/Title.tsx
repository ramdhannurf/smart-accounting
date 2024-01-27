import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export default function Title({ children, title, subtitle, href = "" }: { children?: React.ReactNode, title: string, subtitle: string, href?: string }) {
    return (
        <>
            <Card className="mb-5">
                <CardContent className="py-3">
                    <div className={`flex justify-between 2xl:flex-nowrap xl:flex-nowrap md:flex-nowrap flex-wrap gap-4`}>

                        <div className="flex gap-4 self-center">
                            {
                                href.length !== 0 && <div className="self-center">
                                    <Link href={href}>
                                        <ArrowLeftCircle className="text-muted-foreground" />
                                    </Link>
                                </div>
                            }
                            <div className="self-center">
                                {subtitle.length !== 0 && <p className="text-sm text-muted-foreground">{subtitle}</p>}
                                <h1 className="font-semibold text-2xl">{title}</h1>
                            </div>
                        </div>

                        <div className="flex gap-3 self-center 2xl:flex-nowrap xl:flex-nowrap flex-wrap">
                            {children}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}