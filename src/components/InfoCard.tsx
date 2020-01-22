import React from "react";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { StoreProvider } from "./Store";

const info: string = ``

export const InfoCard: React.FC = () => {
    React.useState()
    return (
        <StoreProvider>
            <React.Suspense fallback={<div>...loading</div>}>
                <Card className="ManikinInfo">
                    <CardContent>{info}</CardContent>
                </Card>
            </React.Suspense>
        </StoreProvider>)
}