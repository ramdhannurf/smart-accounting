import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"

const data = [
    {
        name: "(1-10001) Kas",
        month: "Rp. 34.000,00",
        year: "Rp. 34.000,00"
    },
    {
        name: "(1-10002) Rekening Bank",
        month: "Rp. 0,00",
        year: "Rp. 0,00"
    },
    {
        name: "(1-10003) Giro",
        month: "Rp. 0,00",
        year: "Rp. 0,00"
    },
    {
        name: "(1-10100) Piutang Usaha",
        month: "Rp. 0,00",
        year: "Rp. 0,00"
    },
    {
        name: "(1-10101) Piutang Belum Ditagih",
        month: "Rp. 0,00",
        year: "Rp. 0,00"
    }
]

export default function HistoryAccount() {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Akun</TableHead>
                        <TableHead>Bulan Ini</TableHead>
                        <TableHead>Tahun Ini</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data.map((el, i: number) => {
                            return <TableRow key={i}>
                                <TableCell className="text-xs py-3">
                                    <Link href={"/dashboard/list_account/detail"} className="text-primary hover:underline font-semibold">
                                        {el.name}
                                    </Link>
                                </TableCell>
                                <TableCell className="text-xs py-3">{el.month}</TableCell>
                                <TableCell className="text-xs py-3">{el.year}</TableCell>
                            </TableRow>
                        })
                    }

                </TableBody>
            </Table>

        </>
    )
}