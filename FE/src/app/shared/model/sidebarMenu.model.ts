export class SidebarMenuModel{
    icon: string;
    name: string;
    id: number;
    menuChild: SidebarMenuModel[];
    // additionfield
    isShowChild?: Boolean;
}