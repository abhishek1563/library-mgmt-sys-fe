import { Card, CardActionArea, CardActions, CardContent } from "@mui/material";

interface IAprops {
    cardStyle?: React.CSSProperties;
    cardClassName?: string;
    cardActionAreaEnabled?: boolean;
    cardActionAreaStyle?: React.CSSProperties;
    cardActionAreaClassName?: string;
    cardActionAreaContent?: React.ReactNode;
    cardContentStyle?: React.CSSProperties;
    cardContentClassName?: string;
    cardActionsStyle?: React.CSSProperties;
    cardActionsClassName?: string;
    cardActionsContent?: React.ReactNode;
    cardContent: React.ReactNode;
    cardId: string;
    cardVariant?: "elevation" | "outlined";
}

const CustomCard: React.FC<IAprops> = ({ cardId, cardStyle, cardVariant, cardClassName, cardActionAreaEnabled = true, cardActionAreaStyle, cardActionAreaClassName, cardActionAreaContent, cardContentStyle, cardContentClassName, cardActionsStyle, cardActionsClassName, cardActionsContent, cardContent }) => {
    const cardBody = <>
        {cardActionAreaContent}
        <CardContent style={cardContentStyle} className={cardContentClassName}>
            {cardContent}
        </CardContent>
    </>;

    return (
        <Card style={cardStyle} className={cardClassName} id={cardId} variant={cardVariant || 'outlined'}>
            {cardActionAreaEnabled ? (
                <CardActionArea style={cardActionAreaStyle} className={cardActionAreaClassName}>
                    {cardBody}
                </CardActionArea>
            ) : cardBody}
            <CardActions style={cardActionsStyle} className={cardActionsClassName}>
                {cardActionsContent}
            </CardActions>
        </Card>
    );
};

export default CustomCard;
