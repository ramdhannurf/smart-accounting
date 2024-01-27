import { Separator } from "@/components/ui/separator";
import AuthorizationForm from "./authorization-form";

export default function AuthorizationPage() {
    return (
        <>
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium">Hak Akses User (Fitur Owner)</h3>
                    <p className="text-sm text-muted-foreground">
                        This is how others will see you on the site.
                    </p>
                    <Separator className="my-5" />
                    <AuthorizationForm />
                </div>
            </div>
        </>
    )
}