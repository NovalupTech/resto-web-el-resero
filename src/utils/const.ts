interface MenuButton {
    name: string;
    id: string;
    active: boolean;
}


export const menu_buttons: MenuButton[] = [
    {
        name: "🔥 Parrilla",
        id: "parrilla",
        active: true
    },
    {
        name: "🔥 Parrilladas",
        id: "parrilladas",
        active: false
    },
    {
        name: "🥟 Empanadas y Sándwiches",
        id: "empanadas",
        active: false
    },
    {
        name: "🥗 Ensaladas",
        id: "ensaladas",
        active: false
    },
    {
        name: "🍨 Postres",
        id: "postres",
        active: false
    },
    {
        name: "🥤 Bebidas",
        id: "bebidas",
        active: false
    },
    {
        name: "🍷 Vinos Tintos",
        id: "vinos-tintos",
        active: false
    },
    {
        name: "🍾 Vinos Blancos",
        id: "vinos-blancos",
        active: false
    },
    {
        name: "🎯 Promociones",
        id: "promociones",
        active: false
    }
]
