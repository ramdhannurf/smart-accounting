import CardAnalytics from "@/components/CardAnalytics";
import InnerContent from "@/components/InnerContent";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BusinessOverviewPage() {
    return (
        <>
            <InnerContent>
                <div className="mb-20">
                    <Card className="mb-5">
                        <CardContent className="py-3">
                            <div className="flex justify-between">
                                <div className="self-center">
                                    <h1 className="font-semibold text-2xl">Ringkasan Bisnis</h1>
                                </div>
                                <div>
                                    <Button>Atur Dashbor</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Tabs defaultValue="dashboard" className="w-full">
                        <TabsList>
                            <TabsTrigger value="dashboard">Dashbor 1</TabsTrigger>
                            <TabsTrigger value="dashboard_2">Dashbor 2</TabsTrigger>
                        </TabsList>
                        <TabsContent value="dashboard">
                            <div className="grid grid-cols-3 w-full gap-5">
                                <CardAnalytics />
                                <CardAnalytics />
                                <CardAnalytics />
                                <CardAnalytics />
                                <CardAnalytics />
                                <CardAnalytics />
                                <CardAnalytics />
                                <CardAnalytics />
                            </div>
                        </TabsContent>
                        <TabsContent value="dashboard_2"></TabsContent>
                    </Tabs>
                </div>
            </InnerContent>
        </>
    )
}