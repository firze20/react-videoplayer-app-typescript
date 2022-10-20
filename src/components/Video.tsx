import React from "react";
import { IVideoProps } from "./IVideoProps";

export class Video extends React.Component<IVideoProps, {}> {
    public render(): JSX.Element {
        return(
            <div>
                <video controls autoPlay muted src={this.props.src} />
            </div>
        )
    }
}