interface MenuButton {
    name: string;
    id: string;
    active: boolean;
}

interface MenuItem {
    name: string;
    description: string;
    price: string;
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

export const menu_items: MenuItem[] = [
    {
        name: "Chorizo",
        description: "Chorizo criollo tradicional, jugoso y con el punto perfecto",
        price: "6.000",
    },
    {
        name: "Morcilla",
        description: "Morcilla criolla casera, suave y sabrosa",
        price: "6.000",
    },
    {
        name: "Provoleta",
        description: "Queso provolone a la parrilla con orégano y aceite de oliva",
        price: "13.000",
    },
    {
        name: "1/4 Pollo al Limón",
        description: "Pollo marinado con limón y hierbas",
        price: "14.000",
    },
    {
        name: "Chinchulín",
        description: "Chinchulines bien dorados y crocantes",
        price: "10.000",
    },
    {
        name: "Riñón a la Provenzal",
        description: "Riñones al punto con salsa provenzal",
        price: "12.000",
    },
    {
        name: "Matambrito con Salsa Criolla",
        description: "Matambrito con salsa criolla tradicional",
        price: "18.000",
    },
    {
        name: "Matambre a la Pizza",
        description: "Matambre con salsa de tomate y mozzarella",
        price: "24.000",
    },
    {
        name: "Matambre a la Pizza Especial",
        description: "Matambre a la pizza con ingredientes especiales",
        price: "29.000",
    },
    {
        name: "Molleja",
        description: "Mollejas tiernas y doradas",
        price: "20.000",
    },
    {
        name: "Asado",
        description: "Clásico corte argentino con hueso",
        price: "14.000",
    }
]