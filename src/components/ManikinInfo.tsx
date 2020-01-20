import React from "react";
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"

// placeholder data
const info: string = `some info should go here in theory, right?  Like just a short little description paragraph or whatever, I don't really care.`

export const ManikinInfo: React.FC = () => {
    return (
        <React.Suspense fallback={<div>...loading</div>}>
            <Card className="ManikinInfo">
                <CardContent>{info}</CardContent>
            </Card>
        </React.Suspense>)
}