import React from "react";

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Store, StoreProvider } from "./Store";

export const InfoCard: React.FC = (props: any): React.ReactElement => {
    const store = React.useContext(Store)
    return (
        <React.Suspense fallback={<div>...loading</div>}>
            <StoreProvider>
                <Card className="ManikinInfo">
                    <CardContent>{store.infoContent}</CardContent>
                </Card>
            </StoreProvider>
        </React.Suspense>
    )
}