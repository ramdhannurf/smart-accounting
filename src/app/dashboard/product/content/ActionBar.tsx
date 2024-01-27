import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";

export default function ActionBar({ setOpenGroup, setOpenFilter }: { setOpenGroup: any, setOpenFilter: any }) {
    return (
        <>
            <Card>
                <CardContent className="p-3">
                    <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3 justify-between">
                        <div>
                            <Button onClick={() => setOpenGroup(true)}>Atur kategori produk</Button>
                        </div>
                        <div className="flex 2xl:flex-nowrap xl:flex-nowrap flex-wrap gap-3">
                            <Button variant={"outline"}>Impor</Button>
                            <Button variant={"outline"}>Ekspor</Button>
                            <Input placeholder="Cari data..." />
                            <Button onClick={() => setOpenFilter(true)}><Filter size={16} className="mr-2" /> Filter</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}