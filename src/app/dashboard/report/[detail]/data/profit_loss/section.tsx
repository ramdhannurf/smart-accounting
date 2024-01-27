import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TableProfitLoss } from "./table"
import TableBudget from "@/app/dashboard/budget/table/table"

export default function SectionProfitLoss() {
    return (
        <>
            <Tabs defaultValue="laba_rugi">
                <TabsList>
                    <TabsTrigger value="laba_rugi">Laporan Laba Rugi</TabsTrigger>
                    <TabsTrigger value="budget">Laporan Perencanaan Anggaran</TabsTrigger>
                </TabsList>
                <TabsContent value="laba_rugi">
                    <div>
                        <TableProfitLoss />
                    </div>
                </TabsContent>
                <TabsContent value="budget">
                    <TableBudget editable={false} />
                </TabsContent>
            </Tabs>
        </>
    )
}