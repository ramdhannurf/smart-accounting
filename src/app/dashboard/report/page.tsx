import InnerContent from "@/components/InnerContent";
import { laporan_content } from "@/components/data/Laporan";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function ReportPage() {
    return (
        <>
            <InnerContent>
                <div>
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="self-center">
                                    <h1 className="font-semibold text-2xl">Laporan</h1>
                                </div>
                                <div>
                                    <Input
                                        type="search"
                                        placeholder="Cari laporan..."
                                        className="md:w-[100px] lg:w-[300px]"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="py-8 px-8">
                            <div className="grid grid-cols-2 gap-5">
                                {
                                    laporan_content.map((el, i: number) => {
                                        return <Card key={i} className="shadow-none">
                                            <CardContent className="py-4 flex flex-col gap-2">
                                                <h3 className="text-lg font-bold">{el.title}</h3>
                                                <p className="text-sm">{el.desc}</p>
                                                <div className="mt-2">
                                                    <Button size={'sm'}>Lihat laporan</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    })
                                }
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </InnerContent>
        </>
    )
}