type Product = {
    title: string,
    price: number,
    disponivel: boolean
}

const data: Product[] = [
    {title: 'Caneta', price: 15, disponivel: false},
    {title: 'Lapiseira', price: 10, disponivel: true},
    {title: 'Caneta Cara', price: 20, disponivel: true},
    {title: 'Borracha', price: 7, disponivel: true}
]

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price:number): Product[] => {
        return data.filter(item => item.price >= price && item.disponivel);
    },
    
}