// menu
const menu=[
    {
        home : 'Home'
    },
    {
        home : 'Clothes'
    },
    {
        home : 'Men Clothes'
    },
    {
        home : 'Women Clothes'
    },
    {
        home : 'Accessories'
    },
];
var getMenu='';
for(let i in menu){
    getMenu +=`<li><a href="#">${menu[i]['home']}</a></li>`;
}
document.getElementsByClassName('page-menu')[0].innerHTML=`<ul>${getMenu}</ul>`;
// logo
const logo=[
    {
        'logo':'image/logo2.png'
    }
];
var getLogo='';
for(let i in logo){
    getLogo = `<img src="${logo[i]['logo']}" alt="">`;
}
document.getElementsByClassName('logo')[0].innerHTML=getLogo;
document.getElementsByClassName('footer-logo')[0].innerHTML=getLogo;
// location
const address=[
    {
        'address':'ETEC Center IT Professional Training Center, Phnom Penh, Cambodia',
        'googlemap':'https://goo.gl/maps/fiBDVez2NDMADGoe8'
    }
];
var getAddress='';
for(let i in address){
    getAddress = `<a target="_blank" href="${address[i]['googlemap']}">
                    <p>${address[i]['address']}</p>
                </a>`;
}
document.getElementsByClassName('address')[0].innerHTML=getAddress;
// social
const social=[
    {
        'label':'image/facebook.png',
        'url':'https://web.facebook.com/luonverak.dev'
    },
    {
        'label':'image/tik-tok.png',
        'url':'https://www.tiktok.com/@luon_verak'
    },
    {
        'label':'image/instagram.png',
        'url':'https://www.instagram.com/luon_verak/'
    },
];
var getSocail='';
for(let i in social){
    getSocail += `<li>
                    <a target="_blank" href="${social[i]['url']}">
                    <img src="${social[i]['label']}" alt="">
                    </a>
                </li>`;
}
document.getElementsByClassName('contact-social')[0].innerHTML=`<ul>${getSocail}</ul>`;
// carosel
const carosel=[
    {
        'show':'image/clothes4.webp'
    },
    {
        'show':'image/clothe1.webp'
    },
    {
        'show':'image/clothes4.webp'
    }
];
var getCarosel='';
for(let i in carosel){
    getCarosel +=`<div class="carousel-item active">
                        <img src="${carosel[i]['show']}"  class="d-block w-100" alt="...">
                    </div>`;
}

//document.getElementsByClassName('carosel-data')[0].innerHTML=getCarosel;
// fetch api product
const url="https://fakestoreapi.com/products?limit=8";
var getProduct='';
const product=async()=>{
    try {
        const respone= await fetch(url);
        const data=await respone.json();
        for(let item of data){
            getProduct +=`
                        <div class="box-detail">
                            <div class="thumbnail">
                                <img src="${item.image}" alt="">
                            </div>
                            <div class="product-detail">
                                <div class="item-detail">
                                    <h1>${item.title}</h1>
                                <h1>Price ${item.price} $</h1>
                                <p>Rate ${item.rating['rate']}</p>
                                </div>
                                <div class="item-buy">
                                    <button class="btn btn-warning" type="button">Buy now !</button>
                                </div>
                            </div>
                        </div>
            `;
        }
    } catch (error) {
        console.log(error);
    }
    document.getElementsByClassName('main-container')[0].innerHTML=getProduct;
    console.log(getProduct)
}
product();
// search
const search=async()=>{
    const respone= await fetch(url);
    const dataApi=await respone.json();
    const list = [...new Set(dataApi.map((item)=>{
        return item;
    }))];
    document.getElementById('searchItem').addEventListener('keyup',(e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = list.filter((item)=>{
            return item.title.toLowerCase().includes(searchData);
        });
        desplayItem(filterData);
    });
    const desplayItem=((item)=>{
        document.getElementById('root').innerHTML = item.map((item)=>{
            const {image,title,price,rating} = item;
            return (`
                    <div class="box-detail">
                        <div class="thumbnail">
                            <img src="${image}" alt="">
                        </div>
                        <div class="product-detail">
                            <div class="item-detail">
                                <h1>${title}</h1>
                            <h1>Price ${price} $</h1>
                            <p>Rate ${rating['rate']}</p>
                            </div>
                            <div class="item-buy">
                                <button class="btn btn-warning" type="button">Buy now !</button>
                            </div>
                        </div>
                    </div>
            `);
        }).join('');
    });
}
search();