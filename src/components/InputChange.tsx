import { checkIsOnDemandRevalidate } from "next/dist/server/api-utils";
import { Input } from "./ui/input";
import { useState } from "react";

export default function InputChange({ children }: { children: string }) {
    const [clicked, setClicked] = useState<boolean>(false);
    const [value, setValue] = useState<string>(children || "");
    return (
        <>
            <div className="" onClick={() => setClicked(true)}>
                {
                    clicked ? <input value={value} className="outline-primary min-w-[100px]" onChange={(e) => setValue(e.target.value)} /> : <span>{value}</span>
                }
            </div>
        </>
    )
}