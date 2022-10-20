import React from "react";

import { IMenuProps } from "./IMenuProps";

export class Menu extends React.Component<IMenuProps, {}> {
    constructor(props: IMenuProps) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick(e: React.MouseEvent): void {
        const text: string = (e.target as HTMLFormElement).value;
        this.props.chooseVideo(text);
    }

    public render(): JSX.Element {
        return(
            <form onClick={(e) => this.handleClick(e)}>
                <input type={"radio"} name="src" value={"fast"} /> fast
                <input type={"radio"} name="src" value={"slow"} /> slow
                <input type={"radio"} name="src" value={"cute"} /> cute
                <input type={"radio"} name="src" value={"eek"} /> eek
            </form>
        )
    }
}