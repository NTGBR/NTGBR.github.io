// Função para alternar entre abas
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover a classe "active" de todos os botões e abas
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Adicionar a classe "active" ao botão e aba clicados
        button.classList.add('active');
        const tab = document.getElementById(button.getAttribute('data-tab'));
        tab.classList.add('active');
    });
});

// Inicializando variáveis
let cart = [];
let total = 0;

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Obtendo o nome e o preço do produto a partir dos atributos de dados
        const nftName = button.getAttribute('data-nft');
        const nftPrice = parseFloat(button.getAttribute('data-price'));

        // Adicionando o item ao carrinho (array)
        cart.push({ name: nftName, price: nftPrice });

        // Atualizando o total
        total += nftPrice;

        // Atualizando o HTML do carrinho
        updateCart();
    });
});

// Função para atualizar o conteúdo do carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Limpando o conteúdo atual do carrinho
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Carrinho vazio</li>';
    } else {
        // Adicionando os itens ao carrinho
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price} ETH`;
            cartItems.appendChild(li);
        });
    }

    // Atualizando o valor total no HTML
    cartTotal.textContent = total.toFixed(2); // Formatando com 2 casas decimais
}

// Finalizar compra
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert(`Compra finalizada com sucesso! Total: ${total.toFixed(2)} ETH`);
        cart = [];
        total = 0;
        updateCart();
    }
});
