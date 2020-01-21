import React from "react";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { StoreProvider } from "./Store";

// placeholder data
const info: string = ``

export const ManikinInfo: React.FC = () => {
    return (
        <StoreProvider>
            <React.Suspense fallback={<div>...loading</div>}>
                <Card className="ManikinInfo">
                    <CardContent>{info}</CardContent>
                </Card>
            </React.Suspense>
        </StoreProvider>)
}