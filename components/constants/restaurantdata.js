import food1 from "/assets/food1.jpg";
import food2 from "/assets/food2.jpg";
import food3 from "/assets/food3.jpg";
import starters1 from "/assets/starters1.jpg";
import starters2 from "/assets/starters2.jpg";
import starters3 from "/assets/starters3.jpg";
import starters4 from "/assets/starters4.jpg";
import starters5 from "/assets/starters5.jpg";
import starters6 from "/assets/starters6.jpg";
import maincourse1 from "/assets/maincourse1.jpg";
import maincourse2 from "/assets/maincourse2.jpg";
import maincourse3 from "/assets/maincourse3.jpg";
import maincourse4 from "/assets/maincourse4.jpg";
import maincourse5 from "/assets/maincourse5.jpg";
import maincourse6 from "/assets/maincourse6.jpg";
import desserts1 from "/assets/desserts1.jpg";
import desserts2 from "/assets/desserts2.jpg";
import desserts3 from "/assets/desserts3.jpg";
import desserts4 from "/assets/desserts4.jpg";
import desserts5 from "/assets/desserts5.jpg";
import desserts6 from "/assets/desserts6.jpg";
import drinks1 from "/assets/drinks1.jpg";
import drinks2 from "/assets/drinks2.jpg";
import drinks3 from "/assets/drinks3.jpg";
import drinks4 from "/assets/drinks4.jpg";
import drinks5 from "/assets/drinks5.jpg";
import drinks6 from "/assets/drinks6.jpg";


const specialMenu=[
{
    title: 'Biryani',
    price: '₹580',
    tags: 'Non-Vegetarian | Raita | Crispy Patra',
    imgUrl: food1,
},
{
    title: 'Panner Makhani',
    price: '₹450',
    tags: 'Vegetarian | Spices',
    imgUrl: food2,
},
{
    title: 'Chole Bhature',
     price: '₹350',
    tags: 'Vegetarian | Spices',
    imgUrl: food3,
}
];

const starters=[
    {
        title: 'Aloo Tikki Chaat',
        price: '₹400',
        category:'starters',
        tags: 'Vegetarian',
        imgUrl: starters1,
    },
    {
        title: 'Dahi Papdi Chaat',
        price: '₹300',
        category:'starters',
        tags: 'Vegetarian',
        imgUrl: starters2,
    },
    {
        title: 'Chicken Lollipop',
        price: '₹450',
        category:'starters',
        tags: 'Non-Vegetarian',
        imgUrl: starters3,
    },
    {
        title: 'Chicken Nuggets',
        price: '₹450',
        category:'starters',
        tags: 'Non-Vegetarian',
        imgUrl: starters4,
    },
    {
        title: 'Chilli Mushroom',
        price: '₹400',
        category:'starters',
        tags: 'Vegetarian',
        imgUrl: starters5,
    },
    {
        title: 'Chilli Baby Corn',
        price: '₹300',
        category:'starters',
        tags: 'Vegetarian',
        imgUrl: starters6,
    },
];

const mainCourse = [
    {
        title: 'Chicken Curry',
        price: '₹580',
        tags: 'Non Vegetarian | Spices',
        category:'main course',
        imgUrl: maincourse1,
    },
    {
        title: 'Shahi Paneer',
        price: '₹450',
        tags: 'Vegetarian | Spices',
        category:'main course',
        imgUrl: maincourse2,
    },
    {
        title: 'Chilli Paneer',
        price: '₹350',
        tags: 'Vegetarian | Spices ',
        category:'main course',
        imgUrl: maincourse3,
    },
    {
        title: 'Black Dairy Dal',
        price: '₹470',
        tags: 'Vegetarian | Indian Accent Signature',
        category:'main course',
        imgUrl: maincourse4,
    },
    {
        title: 'Fish Curry',
        price: '₹450',
        category:'main course',
        tags: 'Non-Vegetarian | Spices',
        imgUrl: maincourse5,
    },
    {
        title: 'Kashmiri Aloo Dum',
        price: '₹450',
        tags: 'Vegetarian | Spices',
        category:'main course',
        imgUrl: maincourse6,
    },
];

const drinks = [
        {
            title: 'Mango Fizz',
            price: '₹800',
            tags: 'Mango | Honey | Cream',
            category:'drinks',
            imgUrl: drinks1,
        },
        {
            title: 'Mudra Punch',
            price: '₹750',
            tags: 'Rose Sharbat | Almond Milk | Coconut',
            category:'drinks',
            imgUrl: drinks2,
        },
        {
            title: 'Anar Shikanjvi',
            price: '₹400',
            tags: 'Pomegranate-based Mocktail',
            category:'drinks',
            imgUrl: drinks3,
        },
        {
        title: 'Mango Lassi',
        price: '₹450',
        tags: 'Milk|Mango',
        category:'drinks',
        imgUrl: drinks4,
        },
        {
            title: 'Masala Chai',
            price: '₹300',
            tags: 'Milk| Masala',
            category:'drinks',
            imgUrl: drinks5,
        },
        {
            title: 'Thandai',
            price: '₹400',
            tags: 'Milk',
            category:'drinks',
            imgUrl: drinks6,
        },
];

const desserts=[
    {
        title: 'Mango Kulfi',
        price: '₹300',
        category:'desserts',
        tags: 'Vegetarian',
        imgUrl: desserts1,
    },
    {
        title: 'Rasmalai',
        price: '₹350',
        category:'desserts',
        tags: 'Vegetarian',
        imgUrl: desserts2,
    },
    {
        title: 'Baked Rosogolla',
        price: '₹350',
        category:'desserts',
        tags: 'Vegetarian',
        imgUrl: desserts3,
    },
    {
        title: 'Gulab Jamun',
        price: '₹300',
        category:'desserts',
        tags: 'Vegetarian',
        imgUrl: desserts4,
    },
    {
        title: 'Aam Kheer',
        price: '₹300',
        category:'desserts',
        tags: 'Vegetarian',
        imgUrl: desserts5,
    },
    {
        title: 'Pistachio Kulfi',
        price: '₹300',
        category:'desserts',
        tags: 'Vegetarian',
        imgUrl: desserts6,
    },

];

const awards = [
    {
        imgUrl: 'placeholder',
        title: 'Condé Nast Traveller India – Top 50 Restaurants',
        subtitle: 'Winner in 2017, 2019, 2023 for excellence in Indian fine dining.',
    },
    {
        imgUrl: 'placeholder',
        title: 'Ultimate Restaurant Ratings – 5-Star Winner',
        subtitle: 'Awarded in 2025 for culinary innovation and quality.',
    },
    {
        imgUrl: 'placeholder',
        title: 'Innovation in Modern Indian Cuisine',
        subtitle: 'Recognized internationally for creative dishes.',
    },
    {
        imgUrl: 'placeholder',
        title: 'Excellence in Hospitality',
        subtitle: 'Honored for exceptional service standards.',
    },
];

export {specialMenu};
export { starters, mainCourse,drinks, desserts,awards };
