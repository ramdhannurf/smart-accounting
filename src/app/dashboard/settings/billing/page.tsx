import { Separator } from "@/components/ui/separator";
import BillingForm from "./billing-form";

export default function BillingPage() {
    return (
        <>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Tagihan</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                    <Separator className="my-5" />
                    <BillingForm />
                </div>
            </div>
        </>
    )
}