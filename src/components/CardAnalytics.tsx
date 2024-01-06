import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CardAnalytics() {
    return (
        <>
            <Card className="h-[300px]">
                <CardHeader>
                    <CardTitle>Example Chart</CardTitle>
                </CardHeader>
                <CardContent className="grid place-content-center mt-10">
                    <p className="font-bold text-lg">Work in progress</p>
                </CardContent>
            </Card>
        </>
    )
}