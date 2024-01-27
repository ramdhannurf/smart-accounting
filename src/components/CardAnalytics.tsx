import { useSortable } from "@dnd-kit/sortable";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CSS } from "@dnd-kit/utilities";

export default function CardAnalytics({ children, className = "", title, id = 0, handle, value }: { children: React.ReactNode, className?: string, title: string, id?: number, value?: number, handle?: boolean }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: id, disabled: handle });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? "100" : "auto",
        opacity: isDragging ? 0.3 : 1
    };

    return (
        <>
            <Card className={`h-fit min-h-[350px] w-full ${className} ${!handle ? "border border-primary border-dashed" : ""}`} style={style} ref={setNodeRef}>
                <CardHeader {...listeners} {...attributes}>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="w-full h-fit">
                    <div className="w-full">
                        {children}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}