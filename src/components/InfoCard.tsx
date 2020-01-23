import React from "react";

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Store } from "./Store";

export const InfoCard: React.FC = (props: any): React.ReactElement => {
    const store = React.useContext(Store)
    return (
        <Store.Provider value={store}>{props.children}
            <React.Suspense fallback={<div>...loading</div>}>
                <Card className="ManikinInfo">
                    <CardContent>{store.infoContent}</CardContent>
                </Card>
            </React.Suspense>
        </Store.Provider >
    )
}