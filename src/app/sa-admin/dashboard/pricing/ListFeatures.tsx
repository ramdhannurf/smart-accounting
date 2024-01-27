import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

export default function ListFeatures({ title, id }: { title: string, id: string | number }) {
    return <div className="flex justify-between py-2 border-t">
        <p className="self-center">{title}</p>
        <div className="flex gap-2">
            <Button size={"icon"} variant={"outline"}><Pencil size={16} /></Button>
            <Button size={"icon"}><Trash size={16} /></Button>
        </div>
    </div>
}