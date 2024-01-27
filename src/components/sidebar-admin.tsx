import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { Nav } from "./nav";
import { data_m_admin, data_s_admin, data_t_admin } from "@/app/sa-admin/dashboard/SidebarDataAdmin";

export default function SideBarAdmin({ isCollapsed, set_theme }: { isCollapsed: boolean, set_theme: string }) {
    return (
        <>
            <div className={cn("flex h-[64px] items-center", isCollapsed ? 'h-[64px] justify-center' : 'px-2')}>
                {
                    isCollapsed ? <img src="/assets/logo.png" className="w-[40px]" alt="" /> : <img src={`${set_theme === "light" ? "/assets/logo-navbar.png" : "/assets/logo-navbar-dark.png"}`} className="w-[200px]" alt="" />
                }
            </div>
            <Separator />
            {
                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Data Master</small></div>
            }

            <Nav
                isCollapsed={isCollapsed}
                links={data_m_admin}
            />
            <Separator />
            {
                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Transaksi</small></div>
            }

            <Nav
                isCollapsed={isCollapsed}
                links={data_t_admin}
            />
            <Separator />
            {
                !isCollapsed && <div className="px-4 mt-2"><small className="text-muted-foreground font-medium text-xs">Support</small></div>
            }

            <Nav
                isCollapsed={isCollapsed}
                links={data_s_admin}
            />
        </>
    )
}