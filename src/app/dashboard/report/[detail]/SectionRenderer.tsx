import CashFlowTable from "./data/cash_flow/table";
import GeneralLedgerTable from "./data/general_ledger/table";
import JournalTable from "./data/journal/table";
import SectionProfitLoss from "./data/profit_loss/section";
import SalesTaxTable from "./data/sales_tax_report/table";
import WitholdingTaxTable from "./data/witholding_tax_report/table";

export default function SectionRenderer({ name }: { name: string }) {
    switch (name) {
        case "profit_loss":
            return <SectionProfitLoss />
        case "journal":
            return <JournalTable />
        case "general_ledger":
            return <GeneralLedgerTable />
        case "cash_flow":
            return <CashFlowTable />
        case "witholding_tax_report":
            return <WitholdingTaxTable />
        case "sales_tax_report":
            return <SalesTaxTable />
        default:
            return <p>Bad Request!</p>
    }
}