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
import Link from "next/link"

export default function SalesTaxTable() {
    return (
        <>
            <Table className="border">
                <TableHeader>
                    <TableRow className="bg-primary hover:bg-primary">
                        <TableHead className=" text-white">Tanggal</TableHead>
                        <TableHead className="text-white">DPP</TableHead>
                        <TableHead className="text-white">Rate Pajak</TableHead>
                        <TableHead className="text-white">Total Pajak</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                </TableBody>
            </Table>
        </>
    )
}