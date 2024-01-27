import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { data_budget } from "../data/dummy";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { year_data } from "../add/data";


export default function TableBudget({ editable }: { editable: boolean }) {
    return (
        <>
            <div className="!h-[600px] overflow-auto">
                <Table className="w-[250rem] relative">
                    <TableHeader>
                        <TableRow className="2xl:sticky xl:sticky md:sticky relative top-0 z-[9]">
                            <TableHead className="2xl:w-[400px] xl:w-[400px] w-[200px] 2xl:sticky xl:sticky md:sticky relative left-0 bg-primary text-white border-r">Akun</TableHead>
                            {
                                year_data.map((el: string, i: number) => {
                                    return <TableHead className="bg-primary text-white border-r" key={i}>Forecasting {el}</TableHead>
                                })
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            data_budget.budgeting_report.data.map((el: any, i: number) => {
                                return <>
                                    <TableRow key={i}>
                                        <TableCell className="2xl:sticky xl:sticky md:sticky relative left-0 bg-[#f8f8f8] border-r">{el.name}</TableCell>
                                        {
                                            year_data.map((el: string, i: number) => {
                                                return <TableCell className="bg-[#f8f8f8]" key={i}></TableCell>
                                            })
                                        }
                                    </TableRow>
                                    {
                                        el.children[0]?.account.map((el: any, i: number) => {
                                            return <TableRow key={i}>
                                                <TableCell className="w-[300px] 2xl:sticky xl:sticky md:sticky relative left-0 border-r bg-white z-[8]">
                                                    <Link href={"/dashboard/list_account/detail"} className="text-primary hover:underline">
                                                        ({el.number}) - {el.name}
                                                    </Link>
                                                </TableCell>
                                                {
                                                    el.total_prev.map((el: any, i: number) => {
                                                        return <TableCell className="w-[300px] 2xl:sticky xl:sticky md:sticky relative left-0 border-r bg-white" key={i}>
                                                            <p className="text-right">0,00</p>
                                                        </TableCell>
                                                    })
                                                }
                                                {
                                                    year_data.slice(3).map((el: string, i: number) => {
                                                        return <TableCell className="w-[300px] 2xl:sticky xl:sticky md:sticky relative left-0 border-r bg-white" key={i}>
                                                            {
                                                                el === "Total" ? <p className="font-bold text-right">0,00</p> : editable ? <Input value={"0,00"} /> : <p className="text-right">0,00</p>
                                                            }
                                                        </TableCell>
                                                    })
                                                }
                                            </TableRow>
                                        })
                                    }

                                    <TableRow>
                                        <TableCell className="2xl:sticky xl:sticky md:sticky relative left-0 bg-[#f8f8f8] border-t border-b border-[#000] font-semibold">Total dari {el.name}</TableCell>
                                        {
                                            year_data.map((el: string, i: number) => {
                                                return <TableCell className="border-t border-b border-[#000]" key={i}><p className="font-bold text-right">0,00</p></TableCell>
                                            })
                                        }
                                    </TableRow>
                                </>


                            })
                        }

                    </TableBody>
                </Table>

            </div>
        </>
    )
}