import { Separator } from "@/components/ui/separator";
import { NotificationsForm } from "./notifications-form";

export default function NotificationsPage() {
    return (
        <>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Notifikasi</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                    <Separator className="my-5" />
                    <NotificationsForm />
                </div>
            </div>
        </>
    )
}