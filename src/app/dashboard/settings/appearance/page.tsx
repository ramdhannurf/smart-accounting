import { Separator } from "@/components/ui/separator";
import { AppearanceForm } from "./appearance-form";

export default function AppreancePage() {
    return (
        <>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Tampilan</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                    <Separator className="my-5" />
                    <AppearanceForm />
                </div>
            </div>
        </>
    )
}