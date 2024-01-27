import BarCharts from "./chart/BarChart";
import HistoryAccount from "./chart/HistoryAccount";
import LineBarComposed from "./chart/LIneBarComposed";
import LineBarChart from "./chart/LineBarChart";
import PieCharts from "./chart/PieChart";

export default function ChartRenderer({ name }: { name: string }) {
    switch (name) {
        case "arus_kas":
            return <LineBarComposed />
        case "laba_rugi":
            return <LineBarComposed />
        case "kas":
            return <LineBarChart />
        case "aset_lancar_lainnya":
            return <LineBarChart />
        case "penjualan_terhutang":
            return <BarCharts />
        case "tagihan_belum_dibayar":
            return <BarCharts />
        case "biaya_operasional":
            return <PieCharts />
        case "daftar_akun_terpantau":
            return <HistoryAccount />
        default:
            return <p className="font-bold text-lg">Need Discuss About This....</p>
    }
}