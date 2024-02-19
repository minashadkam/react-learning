export class Action {

    constructor(type,
                label,
                icon=null,
                image=null,
                command=null,
                index=null,
                tooltip=null,
                loading=null,
                iconClass=null,
                position=null,
                status=null,
                disabled=null,
                buttonType=null,
                styleClasses=null,
                ) {
        this.type = type;
        this.label = label;
        this.icon = icon;
        this.image = image;
        this.index = index;
        this.tooltip = tooltip;
        this.loading = loading;
        this.iconClass = iconClass;
        this.position = position;
        this.status = status;
        this.disabled = disabled;
        this.buttonType = buttonType;
        this.styleClasses = styleClasses;
        this.command = command;
    }

}