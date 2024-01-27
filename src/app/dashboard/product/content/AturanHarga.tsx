import { DataTable } from "../../cash/data/data-table";
import { columns_price_rules } from "../data/colums_price_rules";
import { data_price_rules } from "../data/dummy";

export default function AturanHarga() {
    return (
        <>
            <DataTable data={data_price_rules} columns={columns_price_rules} search_data="nama_aturan" search_placeholder="Cari nama aturan..." />
        </>
    )
}