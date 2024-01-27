import { Mail } from "./components/main";
import { accounts, mails } from "./data";
import Cookies from 'js-cookie';

export default function ChatPage() {
    const layout = Cookies.get("react-resizable-panels:layout")
    const collapsed = Cookies.get("react-resizable-panels:collapsed")

    const defaultLayout = layout ? JSON.parse(layout) : [15, 85]
    const defaultCollapsed = collapsed ? JSON.parse(collapsed) : false;

    return (
        <>
            <div className="bg-white">
                <Mail
                    accounts={accounts}
                    mails={mails}
                    defaultLayout={defaultLayout}
                    defaultCollapsed={defaultCollapsed}
                    navCollapsedSize={4}
                />
            </div>
        </>
    )
}