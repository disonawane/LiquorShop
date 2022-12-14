import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div>
<div className='home'>
<div className='home__container'>
    <img src="https://www.zippsliquor.com/wp-content/uploads/2019/11/Liquor-4-1200x600.png" alt="" className='home__image'/>
    <div className='home__row'>
        <Product 
        id = "421"
        title ="Base liquors (gin, vodka, whiskey, tequila, rum, brandy)"
        price = {30}
        rating = {5}
        image = "https://i.pinimg.com/474x/f5/a2/1d/f5a21d105811cdbe409a77f4eaf0cdb9.jpg"/>
        <Product
        id = "422"
        title = "Liqueurs (amaretto, Kahlua, Campari, Baileys, and more)"
        price = {40}
        rating = {3}
        image = "https://images.squarespace-cdn.com/content/v1/59d7a361a8b2b0677a0b2e12/1557761280873-4ITU8LXRN5LZW549D9RM/avion44.png"
        /> </div>
    <div className='home__row'> 
    
        <Product 
        id = "423"
        title = "Wines and fortified wines (vermouth, sherry, marsala)"
        price = {40}
        rating = {3}
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfihyorgJvf22NuuaDmqCODqHxpuqjsOZGgcluFtPKOZ3nGfSarPdCxK0vIYpkSXCSXI&usqp=CAU"
        />
        <Product 
        id = "424"
        title = "Gin is a distilled liquor that gets its flavor from juniper berries."
        price = {50}
        rating = {5}
        image = "https://static.wixstatic.com/media/8a00d5_6f8905b4280c4ab38443fa0a0e9e9e67~mv2.png/v1/fill/w_272,h_390,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Foggy%2045%20Rum_mockup.png"
        />
        <Product
        id ="425"
        title = "Brandy is a liquor made from distilling wine or other fruit, like apples or apricot"
        price = {70}
        rating = {2}
        image = "https://www.binnys.com/globalassets/catalogs/binnys/47/4701/47016/47016.jpg?width=690&height=690&mode=BoxPad&bgcolor=fff"
        />
    </div>
    <div className='home__row'> 
    
    <Product 
    id = "426"
    title = "Amaretto is an Italian almond-flavored liqueur invented in 1851"
    price = {70}
    rating = {4}
    image =  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrUvqcsB32Fjv_sWpykH7QbTgaVCYciel-g&usqp=CAU"
    />
    </div>
    
</div>
</div>
    </div>
  )
}

export default Home