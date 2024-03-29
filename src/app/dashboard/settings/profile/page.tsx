import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./account-form";

export default function ProfilePage() {
    return (
        <>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Akun Pribadi</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                    <Separator className="my-5" />
                    <AccountForm />
                </div>
            </div>
        </>
    )
}